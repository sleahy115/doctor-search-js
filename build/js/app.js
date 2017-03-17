(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "acce9e17d09dbcefe3d4fe39ec0c19be";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
    this.doctor_name = "";
    this.address = "";
    this.phone_number = "";
    this.doctors = [];
}


Doctor.prototype.getDoctor = function(ailment, state, new_doctor, callback) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + state + '&skip=0&limit=10&user_key=' + apiKey)
        .then(function(result) {
            console.log(result);
            var doctors = [];
            for (var i = 0; i < result.data.length; i++) {
                var doctor_name = result.data[i].practices[0].name;
                var address = result.data[i].practices[0].visit_address.street;
                var phone_number = result.data[i].practices[0].phones[0].number;
                new_doctor.doctors.push(doctor_name, address, phone_number);
            }
            callback();
        })
        .fail(function(error) {
            $('#output').text("sorry there are no doctors matching this search");
        });
};

exports.DoctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
