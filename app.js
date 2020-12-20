/**
===================================================================
========================== require start ==========================
===================================================================
*/
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');

/**
===================================================================
========================== require end ============================
===================================================================
*/

/**
===================================================================
========================== setting start ==========================
===================================================================
*/
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
===================================================================
========================== setting end ============================
===================================================================
*/
/**
===================================================================
========================== database start =========================
===================================================================
*/
const database;
const UserSchema;
const UserModel;

const DB = {
    database:{},
    createUserSchema() {
        UserSchema = require('./database/user-schema').createSchema();
        const UserModel = mongoose.model('user3', UserSchema);
        console.log('UserModel 정의');
    },
    connectDB() {
        const dbUrl = 'mongodb://localhost:27017/shopping';
 
        mongoose.connect(dbUrl);
        this.database = mongoose.connection;
        this.database.on('error', console.error.bind(console,'mongoose connection error'));
        this.database.on('open', () => {
            console.log(`database connect success ${dbUrl}`);
            this.createUserSchema();
        });        
    },
};

DB.connectDB();

/**
===================================================================
========================== database end ===========================
===================================================================
*/

module.exports = app;