"use strict";

var typejs = function(idx){
	//FIXME: this can be a class also
	this.console = document.getElementById(idx);
	this.currentText = this.console.innerHTML;
	//Default speed in case none is given
	this.operationSpeed = 50;
};

typejs.prototype.setSpeed = function(speedx) {
	this.operationSpeed = speedx;
};

typejs.prototype.append = function(data) {
	this.console.innerHTML = this.console.innerHTML + data.charAt(0);
	var currentInstance = this;
	if (data.length > 1){
		var remString = data.substr(1,data.length);
		setTimeout(function(){currentInstance.append(remString);},currentInstance.operationSpeed);
	}
};

var w = new typejs("consoleContent");
w.setSpeed(200);
w.append("hello typejs!");