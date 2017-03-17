var Doctor = require('./../js/doctor.js').DoctorModule;

$(document).ready(function() {
    $('.doctor_search').submit(function(event) {
        event.preventDefault();
        var ailment = $('#ailment').val();
        var state = $('#state').val();
        var new_doctor = new Doctor();
        $('#output').empty();
        $('#output').show();
        new_doctor.getDoctor(ailment, state, new_doctor, function() {
        for(var i = 0; i< new_doctor.doctor_name.length; i++) {
          $('#output').append('<h3>' + new_doctor.doctor_name[i] + '</h3>');
          $('#output').append('<li> Address: ' + new_doctor.address[i] + '</li>');
          $('#output').append('<li> Phone number: ' + new_doctor.phone_number[i] + '</li>');
        }
        //
        });
    });
});
