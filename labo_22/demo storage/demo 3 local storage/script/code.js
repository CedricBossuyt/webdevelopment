const setup =() => {
	document.getElementById("btnVerhoog").addEventListener("click", verhoog);
}
const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	let clickCount=localStorage.getItem("clickCount");
	clickCount++
	localStorage.setItem("clickCount", clickCount.toString());
	txtResult.innerHTML="De waarde van de teller is " + clickCount;
}
window.addEventListener("load", setup);