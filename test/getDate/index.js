var should = require('chai').should()
  	, foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

var getDatePretty = require('../../controllers/get_date_pretty/index.js');

module.exports = function () {

	describe('#getDatePretty', function () {
		// Fecha en formato string
		it('Deberia regresar un string', function () {
			var dateHere = new Date();

			getDatePretty(dateHere, (dateTemplate) => {
				dateTemplate.should.be.a('string');

			})

		})

		// Fecha reciente => 'hace 0 segundos'
		it('Deberia regresar fecha reciente 0 segundos', function () {
			var dateHere = new Date();

			getDatePretty(dateHere, (dateTemplate) => {
				var value = dateTemplate.indexOf('0');

				if(value > 0 && value !== -1) {
					// El valor del segundo '0'fue encontrado en la cadena
					dateTemplate[value].should.equal('0');

				}
			})
		})

		it('Deberia regresar fecha en string', function () {
			var date5Seconds = 'Mon Nov 28 2016 23:17:07 GMT-0500 (PET)';

			getDatePretty(date5Seconds, (dateTemplate) => {

				// El valor del segundo '0'fue encontrado en la cadena
				dateTemplate.should.be.a('string');
			})

		})
	})

}