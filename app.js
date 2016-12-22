var cal22 = 0; 
var cal380 = 0; 
var cal40 = 0; 
var cal357 = 0; 
var calRT = 0; 
var cal12 = 0; 
var total = 0;



var calcular = function(argument) {

	cal22 = document.querySelector('#cal22').value * 0.80;
	document.querySelector('#resultCal22').innerHTML = "R$: " + cal22;
	cal380 = document.querySelector('#cal380').value * 1.50;
	document.querySelector('#resultCal380').innerHTML = "R$: " + cal380;
	cal40 = document.querySelector('#cal40').value * 1.80;
	document.querySelector('#resultCal40').innerHTML = "R$: " + cal40;
	cal357 = document.querySelector('#cal357').value * 3.50;
	document.querySelector('#resultCal357').innerHTML = "R$: " + cal357;
	calRT = document.querySelector('#calRT').value * 4.60;
	document.querySelector('#resultCalRT').innerHTML = "R$: " + calRT;
	cal12 = document.querySelector('#cal12').value * 3.00;
	document.querySelector('#resultCal12').innerHTML = "R$: " + cal12;

	total = cal22 + cal380 + cal40 + cal357 + calRT + cal12;

	document.querySelector('#total').innerHTML = total;
}
