
var users = require('../../app/controllers/users.server.controller'),
  passport = require('passport');

module.exports = function(app) {
  app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  app.route('/signin')
     .get(users.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signin',
       failureFlash: true
     }));

  app.get('/signout', users.signout);

  app.get('/auth/facebook',
	  passport.authenticate('facebook', {
      scope : 'email',
			failureRedirect: '/signin'
		}));

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			failureRedirect: '/signin',
			successRedirect: '/'
		}));

  app.get('/auth/twitter',
	  passport.authenticate('twitter', {
			failureRedirect: '/signin'
		}));

	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', {
			failureRedirect: '/signin',
			successRedirect: '/'
		}));

	app.get('/auth/google', passport.authenticate('google', {
  	failureRedirect: '/signin',
  	scope: [
    	'https://www.googleapis.com/auth/userinfo.profile',
    	'https://www.googleapis.com/auth/userinfo.email'
  	],
	}));

	app.get('/auth/google/callback', passport.authenticate('google', {
  	failureRedirect: '/signin',
  	successRedirect: '/'
	}));

};

