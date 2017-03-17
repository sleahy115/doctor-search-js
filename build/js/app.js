(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "acce9e17d09dbcefe3d4fe39ec0c19be";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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
          $('#output').append('<h4> Address:' + new_doctor.address[i] + '</h4>');
          $('#output').append('<h4> Phone number: ' + new_doctor.phone_number[i] + '</h4>');
        }
        //
        });
    });
});

},{"./../js/doctor.js":2}]},{},[3]);
