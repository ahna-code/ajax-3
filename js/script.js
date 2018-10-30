'use strict'

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';

$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {

  $('<li>').text("Name: " + item.name).appendTo(countriesList);
  $('<li>').text("Captial: " + item.capital).appendTo(countriesList);
  $('<li>').text("Area (sq.km): " + item.area).appendTo(countriesList);
  $('<li>').text("Population (mil): " + item.population).appendTo(countriesList);
  $('<li>').text("Languages: " + item.languages).appendTo(countriesList);
  $('<hr>').appendTo(countriesList);

  });
  }
