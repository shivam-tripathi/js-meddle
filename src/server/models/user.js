import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import validator from 'validator';


let userSchema = new mongoose.Schema ({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

userSchema.pre('save', function (next) {
	if(!this.isModified('password')) {
		return next();
	}
	this.password = User.encryptPassword(this.password);
	next();
});

let User = mongoose.model('User', userSchema);

userSchema.methods = {
	validPassword: function (password) {
		return bcrypt.compareSync(password, this.password);
	}
}

userSchema.statics = {
	makeSalt: () => bcrypt.genSaltSync(10),
	encryptPassword: function (password) {
		!password ? '' : bcrypt.hashSync(password, this.makeSalt())
	},
	register: function (email, password, cb) {
		let user = new this({email, password});
		user.save((err) => cb(err, user));
	}
}

User.schema.path('password').validate(password => {
	return validator.isLength(password, 6);
});

User.schema.path('email').validate(email => {
	return validator.isEmail(email);
});

export default User;