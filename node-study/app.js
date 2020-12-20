const mongoose = require('mongoose');

const createUserSchema = () => {
    UserSchema = require('./database/user-schema').createSchema(mongoose);
    const UserModel = mongoose.model('user3', UserSchema);
    console.log('UserModel 정의');
};