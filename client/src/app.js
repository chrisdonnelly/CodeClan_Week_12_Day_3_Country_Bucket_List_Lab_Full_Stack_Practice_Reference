var AjaxRequest = require('./services/ajax_request.js');
var CountriesView = require('./views/countries_view.js');

function app() {
    
    var restCountries = new AjaxRequest('https://restcountries.eu/rest/v2');

    var countriesView = new CountriesView();
    
    restCountries.get(countriesView.populate);
 
}

window.addEventListener('load', app);