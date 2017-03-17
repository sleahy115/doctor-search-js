var Doctor = require('./../js/doctor.js').DoctorModule;

$(document).ready(function(){
  $('.doctor_search').submit(function(event){
    event.preventDefault();
    var ailment = $('#ailment').val();
    $('#output').prepend('<p>Thank you, ' + ailment + ' has been added to our list!</p>');
    new_doctor = new Doctor();
    new_doctor.testMethod();
  });
});

// $(document).ready(function(){
//   $('.doctor-search').submit(function(event) {
//     event.preventDefault();
//     var ailment = $('#ailment').val();
//     console.log(ailment);
//     var state = $('#state').val();
//     console.log(state);
//     new_doctor = new Doctor();
//     new_doctor.getDoctor(ailment, state);
//     ('#output').text("your state is " + state);
//   });
//
// });
