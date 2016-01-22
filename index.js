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

typejs.prototype.append = function(data,clb) {
	this.console.innerHTML = this.console.innerHTML + data.charAt(0);
	var currentInstance = this;
	if (data.length > 1){
		var remString = data.substr(1,data.length);
		setTimeout(function(){currentInstance.append(remString,clb);},currentInstance.operationSpeed);
	}else{
		clb();
	}
};

typejs.prototype.clear = function(clb) {
	var currentText = this.console.innerHTML;
	var currentInstance = this;
	if(currentText.length > 0){
		this.console.innerHTML = this.console.innerHTML.substr(0,this.console.innerHTML.length-1);
		setTimeout(function(){currentInstance.clear(clb);},currentInstance.operationSpeed);
	}else{
		clb();
	}
};

typejs.prototype.flush = function() {
	this.console.innerHTML = "";
};

typejs.prototype.delWord = function(clb) {
	var currentText = this.console.innerHTML;
	var currentInstance = this;
	if(currentText.charAt(currentText.length-1) != " "){
		this.console.innerHTML = this.console.innerHTML.substr(0,this.console.innerHTML.length-1);
		setTimeout(function(){currentInstance.delWord(clb);},currentInstance.operationSpeed);
	}else{
		clb();
	}
};