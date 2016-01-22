"use strict";

var typejs = function(idx){
	//FIXME: this can be a class also
	this.console = document.getElementById(idx);
	this.currentText = this.console.inerHTML;
	//Default speed in case none is given
	this.operationSpeed = 50;
};

typejs.prototype.setSpeed = function(speedx) {
	this.operationSpeed = speedx;
};

var w = new typejs("consoleContent");
w.setSpeed(200);