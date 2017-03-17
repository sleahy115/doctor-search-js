function Doctor = (name, address, phone_number){
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
}

Doctor.prototype.GetDoctor = function (ailment) {
  $get.('https://api.betterdoctor.com/2016-03-01/doctors?query=' + 'ailment' + '&skip=0&limit=10&user_key='+ 'api_key')   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

};


exports.DoctorModule = Doctor;
