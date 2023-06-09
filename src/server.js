import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const passport = require('passport');
import cors from 'cors';
import { logRequestStart } from './log';

require('dotenv').config();
let app = express();

// app.use(cors({ credentials:true, origin: process.env.URL_REACT}));
// app.use(cors({ credentials:true, origin: process.env.URL_REACT_PRODUCT}));

// fix CORS
const whitelist = [process.env.URL_REACT, process.env.URL_REACT_PRODUCT];
app.use(
    cors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(null, true);
                // callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true,
        optionsSuccessStatus: 200,
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
    })
);

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         credentials: 'include',
//         optionsSuccessStatus: 200,
//         allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
//     })
// );

// app.options('*', cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    })
);

app.use(cookieSession({ name: 'session', keys: ['lama'], maxAge: 365 * 24 * 60 * 60 * 100 }));
// app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(logRequestStart);

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log('Backend NodeJs is running on the port: ' + port);
});
