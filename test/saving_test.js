const assert = require('assert');
const MarioChar = require('../models/mariochar');


//describe test
describe('Saving Records',function(){

    // Describe Test

    it('SAve a record to the database',function(done){
        var char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });
});
