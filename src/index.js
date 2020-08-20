var str = require('./constant');
var $ = require('jquery');
require('./css/index.js');
var App = function(){
	console.log(str);
	$('body').html(str)
}
var app = new App();