
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser(async (id, done) => {
    let user = await User.findById(id);
    done(null, user);
})
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async (accesToken, refreshToken, profile, done) => {
            let existingUser = await User.findOne({ googleId: profile.id });
            if (!existingUser) {
                const instance = new User({ googleId: profile.id, displayName: profile.displayName });
                existingUser = await instance.save();
            }
            done(null, existingUser);
        }
    )
);