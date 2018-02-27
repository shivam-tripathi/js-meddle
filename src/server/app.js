import auth from './utils/auth';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './utils/config'
import connectMongo from 'connect-mongo';
import ejs from 'ejs';
import express from 'express';
import flash from 'connect-flash';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import pug from 'pug';
import session from 'express-session';
import User from './models/user';

const app = express();

app.set('view engine', 'pug');
app.engine('pug', pug.renderFile);
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, '/../../src/views'));
app.use(express.static(path.join(__dirname, "/../client")));

app.use(logger('dev'));

mongoose.connect(config.database.url);
mongoose.connection.on('error', () => {
	console.error(`MongoDB Connection Error. \
		Make sure MongoDB is running.`
	)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cookieParser(config.cookie.secret));

// Session set up, necessary for passport
const MongoStore = connectMongo(session);
app.use(session({
	secret: config.session.secret,
	resave: config.session.resave,
	saveUninitialized: config.session.saveUninitialized,
	// Session stored on mongodb using connect-mongo
	store: new MongoStore({url: config.database.url, collections: 'sessions'})
	// In production, we need connect-redis
}));

app.use(passport.initialize()); // Initialise passport authentication
app.use(passport.session()); // Persistant login sessions
app.use(flash()); // Flash messages using connect-flash

// routes(app);
export default app;

app.get('/', (req, res, next) => {
	res.render('index.pug');
});

app.get('/test', (req, res, next) => {
	res.render('index.pug');
});

app.listen(config.server.port, config.server.host, () => {
	console.log(
		`Express started on ${config.server.host}:${config.server.port}`
	);
});
