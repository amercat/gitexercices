const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe test
describe('Updating a Records', function () {

    var char;

    beforeEach(function (done) { 
        char = new MarioChar({
            name: 'Mario',
            weight:50
        });

        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });

    it('Update one record  in the database', function (done) {
        
        MarioChar.findOneAndUpdate({ name: 'Mario'},{name:'Tony'}).then(function(){
        MarioChar.findOne({ _id: char._id }).then(function(result){
                assert(result.name === 'Tony');
                done();
            })
        });
    });

    it('Increments the weight by 1', function (done) {
        
        MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (record) {
                assert(record.weight === 51);
                done();

            });
        });
    });
});