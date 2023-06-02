const setup =() => {
	document.getElementById("btnVerhoog").addEventListener("click", verhoog);
	let txtResult=document.getElementById("txtResult");
	let clickCounter = localStorage.getItem('clickCount')
	if(clickCounter !== null) {
		txtResult.innerHTML = "De waarde van de teller is " + clickCounter;
	}
}
const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	let clickCounter =localStorage.getItem("clickCount");
	clickCounter++
	localStorage.setItem("clickCount", clickCounter.toString());
	txtResult.innerHTML="De waarde van de teller is " + clickCounter;
}
window.addEventListener("load", setup);