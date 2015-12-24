
module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSecret',
  facebook: {
    clientID: '1523635054630198',
    clientSecret: 'adb46d5c88072893a6b8b38dbc528e77',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: '1523635054630198',
    clientSecret: 'adb46d5c88072893a6b8b38dbc528e77',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	}
};
