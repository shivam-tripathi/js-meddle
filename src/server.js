import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import User from './models/user';
import passport from 'passport';
import cookie from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';

const app = express();

app.set('views', __dirname + '/../src/views');
app.set('view engine', 'pug');
app.set('view engine', 'html');
app.engine('pug', require('pug').__express);
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/static'));
app.use(cookie('someSecretString'));
app.use(session({
	secret: 'anotherSecretString',
	resave: false,
  	saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/ch01', (err) => {
	 if (err) throw err
});

app.get('/', (req, res, next) => {
	res.render('index.pug');
});

function work(name="Shane") {
	console.log(name);
}

app.listen('4321', '0.0.0.0');
console.log('Express started on port 4321');