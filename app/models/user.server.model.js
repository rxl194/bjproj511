
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  website: {
    type: String,
    get: function(url) {
      if (!url) {
        return url;
      } else {
        if ( url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0 ) {
          url = 'http://' + url;
        }
        return url;
      }
    }
  },
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password) {
        return password.length >= 6;
      }, 
      'Password should be longer'
    ]
  },
  created: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  }
});

UserSchema.virtual('fullName')
  .get(function() {
    return this.firstName + ' ' + this.lastName;
  })
  .set(function(fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || ' ';
    this.lastName = splitName[1] || ' ';
  });


UserSchema.set('toJSON', { getters: true });


UserSchema.statics.findOneByUserName = 
function (username, callback) {
  this.findOne( {username: new ReqExp(username, 'i')}, callback);
};

UserSchema.methods.authenticate = 
function(password) {
  return this.password === password;
};

UserSchema.pre('save', function(next) {
  //if (...) {
    next();
  //} else {
  //  next(new Error('An Error Occured'));
  //}
});

UserSchema.post('save', function(next) {
  if (this.isNew) {
    console.log('A new user was created.');
  } else {
    console.log('A user updated is details.');
  }
});

mongoose.model('User', UserSchema);

