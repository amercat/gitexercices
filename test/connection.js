const mongoose = require('mongoose')

// Connect to mongo db

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before test run

before(function(done){
    //Connect to mongodb

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks...');
    done();
}).on('error',function(error){
    console.log('Connection error:', error);
});

});

// Drop the characters collection beofre each test

beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});


