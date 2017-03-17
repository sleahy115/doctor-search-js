var Doctor = require('./../js/doctor.js').DoctorModule;

$(document).ready(function(){
  $('.doctor_search').submit(function(event){
    event.preventDefault();
    var ailment = $('#ailment').val();
    var state = $('#state').val();
    $('#output').prepend('<p>Thank you, ' + ailment + state + '</p>');
    new_doctor = new Doctor();
    new_doctor.getDoctor(ailment,state);
  });
});
