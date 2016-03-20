"use strict";
var gpio = require('gpio'),
intervalTimer;

var gpio17 = gpio.export(17,{
	direction:'out',
interval:200,
ready:function(){
	intervalTimer = setInterval(function() {
         gpio17.set();
         setTimeout(function() { gpio17.reset(); }, 500);
      }, 1000);
}});
setTimeout(function() {
   clearInterval(intervalTimer);          // stops the voltage cycling 
   gpio17.removeAllListeners('change');   // unbinds change event 
   gpio17.reset();                        // sets header to low 
   gpio17.unexport();                     // unexport the header 
}, 10000)

