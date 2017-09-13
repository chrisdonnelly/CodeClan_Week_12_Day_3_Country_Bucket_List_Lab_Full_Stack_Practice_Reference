var CountriesView = function() {

}

CountriesView.prototype.populate = function(data) {
    var countrySelect = document.getElementById('country-drop-down');
    data.forEach(function(country, index) {
        var option = document.createElement('option');
        option.innerText = country.name;
        option.value = index;
        countrySelect.appendChild(option);
    });

}

module.exports = CountriesView;