var apiKey = require('./../.env').apiKey;

function Doctor () {
    this.doctor_name = "";
    this.address = "";
    this.phone_number = "";
}


Doctor.prototype.getDoctor = function (ailment, state, new_doctor, callback) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + state + '&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
      var doctor_name = result.data[0].practices[0].name;
      var address = result.data[0].practices[0].visit_address.street;
      var phone_number = result.data[0].practices[0].phones[0].number;
      new_doctor.doctor_name = doctor_name;
      new_doctor.address = address;
      new_doctor.phone_number = phone_number;
      console.log(new_doctor.phone_number);
      callback();
    })
   .fail(function(undefined){
       alert ("sorry there are no doctors matching this search");
    })
    .fail(function(error){
       alert ("sorry there are no doctors matching this search");
     });
};

exports.DoctorModule = Doctor;
