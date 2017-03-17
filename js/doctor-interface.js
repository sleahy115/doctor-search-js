var Doctor = require('./../js/doctor.js').DoctorModule
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('.doctor-search').submit(function(event) {
    event.preventDefault();
    var ailment = $('#ailment').val();
    var state = $('#state').val();
    
  });

});
