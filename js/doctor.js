var apiKey = require('./../.env').apiKey;

function Doctor () {
    this.doctor_name = "";
    this.address = "";
    this.phone_number = "";
}

Doctor.prototype.testMethod = function () {
  alert("this works");
};

Doctor.prototype.getDoctor = function (ailment, state) {
  console.log(ailment);
  console.log(state);
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + state + '&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.DoctorModule = Doctor;
