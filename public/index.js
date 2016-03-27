"use strict"

//var $, detailTmpl;

// $ = require('jquery'); // Load jQuery as module, using Browserify
// require('jsrender')($); // Load JsRender as jQuery plugin

// require('jsrender');
// detailTmpl = require("../app/home/detail.html")($);

// Alternatively, see clientcode-movies-browserify.js, for case where jQuery is loaded already as global.jQuery, using:


require('jsrender');
detailTmpl = require("../app/home/detail.html");

var data = {
  world: "Brave New",
  version: 1
};

$("#render").on("click", function() {
  //var html = detailTmpl.render(data);
  var html = detailTmpl(data);
  $("#result").html(html);
  data.version ++;
  data.world += "+";
});



