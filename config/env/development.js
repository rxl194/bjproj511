
module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSecret',
  facebook: {
    clientID: '1523635054630198',
    clientSecret: 'adb46d5c88072893a6b8b38dbc528e77',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    clientID: 'FsLl4XeciuVjLA6fFPCsB9TAz',
    clientSecret: 'gce6rLbYFgQ4wBC3Y59TYlPuG3HFAIT0k9G661vl82FXinWCCs',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
  google: {
    clientID: 'Application Id',
    clientSecret: 'Application Secret',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};
