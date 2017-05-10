var should = require('chai').should()
  	, foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// Modulos de Testing
var m = require('./getDate/index.js')();

describe('Primer Modulo', function () {
    describe('#Parte1', function () {
        var number = 10;
        var name = 'joel';

        it('Deberia ser un numero', function () {
           number.should.be.a('number');
        })

        it('Deberia ser un string', function () {
           name.should.be.a('string');
        })
    })
})


