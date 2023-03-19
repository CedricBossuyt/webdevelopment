const setup = () => {
    let gemeente = ""
    let gemeenteLijst = []
    let gemeentetjes = document.getElementById("gemeenteDing")
    while (gemeente.toLowerCase() !== "stop") {
        gemeente = window.prompt("Gemeente")
        gemeenteLijst.push(gemeente)
    }
    gemeenteLijst.pop(); //verwijdert "stop" van de array
    gemeenteLijst.sort();
    while(gemeenteLijst.length !== 0) {
        let optie = document.createElement("option")
        optie.text = gemeenteLijst.shift()
        gemeentetjes.appendChild(optie)
    }
}
window.addEventListener("load", setup);