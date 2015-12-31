
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1523635054630198', // your App ID
        'clientSecret'  : 'adb46d5c88072893a6b8b38dbc528e77', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'FsLl4XeciuVjLA6fFPCsB9TAz',
        'consumerSecret'    : 'gce6rLbYFgQ4wBC3Y59TYlPuG3HFAIT0k9G661vl82FXinWCCs',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '753124678134-jtfl3adck3dn9c9u6epu365q5ngqb0i8.apps.googleusercontent.com',
        'clientSecret'  : 'dgEMC8k5v0dHtnDBSgmcuCqa',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};


