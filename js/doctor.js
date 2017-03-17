var apiKey = require('./../.env').apiKey;

function Doctor () {
    this.doctor_name = "";
    this.address = "";
    this.phone_number = "";
}


Doctor.prototype.getDoctor = function (ailment, state) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + state + '&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
      console.log(JSON.stringify(result));
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.DoctorModule = Doctor;
