var apiKey = require('./../.env').apiKey;

function Doctor() {
    this.doctor_name = [];
    this.address = [];
    this.phone_number = [];
}


Doctor.prototype.getDoctor = function(ailment, state, new_doctor, callback) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + state + '&skip=0&limit=10&user_key=' + apiKey)
        .then(function(result) {
            if (result.data.length === 0) {
                $('#output').text("sorry there are no doctors matching this search");
            } else {
                var doctors = [];
                for (var i = 0; i < result.data.length; i++) {
                    var doctor_name = result.data[i].practices[0].name;
                    var address = result.data[i].practices[0].visit_address.street;
                    var phone_number = result.data[i].practices[0].phones[0].number;
                    new_doctor.doctor_name.push(doctor_name);
                    new_doctor.address.push(address);
                    new_doctor.phone_number.push(phone_number);
                    console.log(new_doctor.doctor_name);
                }
            }
            callback();
        })
        .fail(function(error) {
            $('#output').text("sorry there are no doctors matching this search");
        });
};

exports.DoctorModule = Doctor;
