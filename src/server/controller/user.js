import User from '../models/user';

export function showRegistrationForm(req, res, next) {
    res.render('register.html');
}

export function createUser(req, res, next) {
    User.register(req.body.email, req.body.password, (err, user) => {
        if(err) return next(err);
        req.login();
    });
}

