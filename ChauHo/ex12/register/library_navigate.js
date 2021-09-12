"use strict";
const $ = function (id) {
  return document.getElementById(id);
};

const navigate = {
  showForm: function () {
    $("registration_form").setAttribute("class", "show");
    $("registration_result").setAttribute("class", "hide");
  },
  showResults: function () {
    $("registration_form").setAttribute("class", "hide");
    $("registration_result").setAttribute("class", "show");
  },
};
