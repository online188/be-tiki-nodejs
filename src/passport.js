const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = '867648153807-l2tqmf20vjkphm3j0acagl8qpa3i71uu.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = '7305d7def6a7fe87fbfa';
const GITHUB_CLIENT_SECRET = 'd3b05012cb484706b94425ca95f00742c9164357';

const FACEBOOK_APP_ID = 'yourid';
const FACEBOOK_APP_SECRET = 'yourid';

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            // console.log(profile);
            // done(null, profile);
            try {
                console.log(profile);

                done(null, profile);
                // let user = await UserSocial.findOne({ googleId: profile.id });
                // if (user) {
                //     return done(null, user);
                // } else {
                //     const newUser = {
                //         username: profile.displayName,
                //         googleId: profile.id,
                //         avatar: profile.photos[0].value,
                //         email: profile.emails[0].value,
                //     };
                //     user = await UserSocial.create(newUser);
                //     done(null, user);
                //     console.log(profile);
                // }
            } catch (error) {
                console.log(error);
            }
        }
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: '/auth/github/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
            //db.user.save()...
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
