var AjaxRequest = require('./services/ajax_request.js');
var CountriesView = require('./views/countries_view.js');

function app() {
    
    var restCountries = new AjaxRequest('https://restcountries.eu/rest/v2');

    var countriesView = new CountriesView();
    
    restCountries.get(countriesView.populate);

    var select = document.getElementById('country-drop-down');
    
    select.addEventListener('change', function() {
        var selectedCountry = this.value;
        var ul = document.getElementById('country-data');
        
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
          
        var li = document.createElement('li');
        li.innerText = 'Country: ' + restCountries.data[selectedCountry].name;
        ul.appendChild(li);
        var li = document.createElement('li');
        li.innerText = 'Capital: ' + restCountries.data[selectedCountry].capital;
        ul.appendChild(li);
        var li = document.createElement('li');
        li.innerText = 'Region: ' + restCountries.data[selectedCountry].region;
        ul.appendChild(li);
        var li = document.createElement('li');
        li.innerText = 'Main Currency: ' + restCountries.data[selectedCountry].currencies[0].name;
        ul.appendChild(li);
    })
 
}

window.addEventListener('load', app);