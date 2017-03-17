var Doctor = require('./../js/doctor.js').DoctorModule;

$(document).ready(function(){
  $('.doctor_search').submit(function(event){
    event.preventDefault();
    var ailment = $('#ailment').val();
    var state = $('#state').val();
    var new_doctor = new Doctor();
    new_doctor.getDoctor(ailment,state, new_doctor, function (){
      var doctor_name = new_doctor.doctor_name;
      var address = new_doctor.address;
      var phone_number = new_doctor.phone_number;
      $('#output').prepend(doctor_name, + " " + address, " " + phone_number);
    });
  });
});
