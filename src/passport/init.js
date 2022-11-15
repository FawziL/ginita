const login =require( './login.js');
const signup =require( './signup.js');
const User = require ('../models/usuario.model');

module.exports = function(passport){

    
    signup(passport);
    login(passport);
    passport.serializeUser((user, done)=> {
        done(null, user);
    });

    passport.deserializeUser((user, done)=> {
      done(null, user);
       
    });

}