var Doctor = require('./../js/doctor.js').DoctorModule;

$(document).ready(function() {
    $('.doctor_search').submit(function(event) {
        event.preventDefault();
        var ailment = $('#ailment').val();
        var state = $('#state').val();
        var new_doctor = new Doctor();
        new_doctor.getDoctor(ailment, state, new_doctor, function() {
            new_doctor.doctors.forEach(function(element) {
                $('#output').prepend('<li>' + element + '</li>');
            });
        });
    });
});
