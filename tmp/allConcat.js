var Doctor = require('./../js/doctor.js').DoctorModule;

$(document).ready(function(){
  $('.doctor_search').submit(function(event){
    event.preventDefault();
    var ailment = $('#ailment').val();
    var state = $('#state').val();
    var new_doctor = new Doctor();
    new_doctor.getDoctor(ailment,state, new_doctor, function (){
      var doctors = new_doctor;
      console.log(doctors);
      $('#output').prepend(doctors);
    });
  });
});
