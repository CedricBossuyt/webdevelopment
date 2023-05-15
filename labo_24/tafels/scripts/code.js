let global = {
    lijst: []
}
const setup = () => {
    document.getElementById("goButton").addEventListener("click", maakTafel)
}
const valideer = () => {
    
}
const maakTafel = () => {
    let input = document.getElementById("cijferInput")
    let nummer = Number(input.value);
    if(Number.isInteger(nummer)){
        let tafelke = document.createElement("div")
        tafelke.className="tafelke";
        document.getElementById("tafels").appendChild(tafelke)
        let header = document.createElement("div")
        header.className = "header";
        let date = new Date();
        let headerTekst = document.createTextNode("Tafel van " + nummer + " aangemaakt op: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        header.appendChild(headerTekst);
        tafelke.appendChild(header);
        for (let i = 1; i < 11; i++) {
            let rij = document.createElement("div")
            rij.className = "rij";
            let output = nummer * i;
            let rekenSom = document.createTextNode(nummer + " x " + i + " = " + output)
            rij.appendChild(rekenSom)
            tafelke.appendChild(rij);
        }
    }else{
        window.alert("Geef een geldig getal in!")
    }
}
window.addEventListener("load", setup);