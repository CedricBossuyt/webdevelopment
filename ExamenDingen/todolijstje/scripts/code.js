const setup = () => {
    document.getElementById("addButton").addEventListener("click", voegTaakskeToe)
    document.getElementById("verwijderTaakButton").addEventListener("click", verwijderTaak)
    document.getElementById("verbergTeLaat").addEventListener("click", verbergToonTeLateTaak)
    document.getElementById("sortOpDatum").addEventListener("click", sorteerTaak)
}
const voegTaakskeToe = () => {
    let pluske = document.getElementById("addButton")
    let taak = document.createElement("div")
    taak.className="taak"
    taak.id = "taakSwatch"
    document.getElementById("taakMaker").removeChild(pluske)
    document.getElementById("taakMaker").appendChild(taak)
    let titelke = document.createElement("p")
    let titelkeTekst = document.createTextNode("Taak")
    titelke.appendChild(titelkeTekst)
    taak.appendChild(titelke)
    let titelInput = document.createElement("input")
    titelInput.type = "text"
    titelInput.placeholder = "Naam Taak"
    titelInput.id = "titelInput"
    taak.appendChild(titelInput)
    let beschrijving = document.createElement("p")
    let beschrijvingTekst = document.createTextNode("Beschrijving")
    beschrijving.appendChild(beschrijvingTekst)
    taak.appendChild(beschrijving)
    let beschrijvingInput = document.createElement("input")
    beschrijvingInput.type = "text"
    beschrijvingInput.placeholder = "Beschrijving Taak"
    beschrijvingInput.id = "beschrijvingInput"
    taak.appendChild(beschrijvingInput)
    let datum = document.createElement("p")
    let datumTekst = document.createTextNode("Datum")
    datum.appendChild(datumTekst)
    taak.appendChild(datum)
    let datumInput = document.createElement("input")
    datumInput.type = "date"
    datumInput.id = "datumInput"
    taak.appendChild(datumInput)
    let annuleerButton = document.createElement("input")
    annuleerButton.type = "button"
    annuleerButton.value = "Annuleer"
    annuleerButton.id = "annuleerButton"
    taak.appendChild(annuleerButton)
    document.getElementById("annuleerButton").addEventListener("click", toonPlusImage)
    let aanmaakButton = document.createElement("input")
    aanmaakButton.type = "button"
    aanmaakButton.value = "Aanmaken"
    aanmaakButton.id = "aanmaakButton"
    taak.appendChild(aanmaakButton)
    document.getElementById("aanmaakButton").addEventListener("click", voegTaakToeAanLijst)
}
const voegTaakToeAanLijst = () => {
    let takenLijst = document.getElementById("takenLijst")
    let taakblokske = document.createElement("div")
    taakblokske.id = "taakblokID"
    let titelInput = document.getElementById("titelInput").value
    let titelInputFixed = document.createTextNode(titelInput)
    let beschrijvingInput = document.getElementById("beschrijvingInput").value
    let beschrijvingInputFixed = document.createTextNode(beschrijvingInput)
    let datumInput = document.getElementById("datumInput").value
    let datumTakske = new Date(datumInput)
    let datumTaakske = new Date(datumTakske.getFullYear(), datumTakske.getMonth(), datumTakske.getDate())
    let dezeDag = new Date()
    let vandaag = new Date(dezeDag.getFullYear(), dezeDag.getMonth(), dezeDag.getDate())
    let datumInputFixed = document.createTextNode("Tegen: " + datumInput)
    if(vandaag > datumTaakske) {
        taakblokske.style.backgroundColor = "red"
    }
    let titelTaak = document.createElement("p")
    titelTaak.appendChild(titelInputFixed)
    taakblokske.appendChild(titelTaak)
    let beschrijvingTaak = document.createElement("p")
    beschrijvingTaak.appendChild(beschrijvingInputFixed)
    taakblokske.appendChild(beschrijvingTaak)
    let datumTaak = document.createElement("p")
    datumTaak.appendChild(datumInputFixed)
    taakblokske.appendChild(datumTaak)
    let afronden = document.createElement("input")
    afronden.id = "afrondID"
    afronden.type = "button"
    afronden.value = "Taak afronden"
    taakblokske.appendChild(afronden)
    takenLijst.appendChild(taakblokske)
}
const toonPlusImage = () => {
    let taakMaker = document.getElementById("taakMaker")
    let taak = document.getElementById("taakSwatch")
    document.getElementById("taakMaker").removeChild(taak)
    let image = document.createElement("img")
    image.src = "images/plus.png"
    image.id = "addButton"
    taakMaker.appendChild(image)
    document.getElementById("addButton").addEventListener("click", voegTaakskeToe)
}
const verwijderTaak = () => {
    let takenLijstje = document.getElementById("takenLijst")
    while (takenLijstje.hasChildNodes()) {
    takenLijstje.removeChild(takenLijstje.firstChild)
    }
}
const verbergToonTeLateTaak = () => {
    let alleTaken = document.getElementById("takenLijst");
    for (let i = alleTaken.children.length - 1; i >= 0; i--) {
        let div = alleTaken.children[i];
        if (div.style.backgroundColor === "red") {
            if (div.style.display === "none") {
                div.style.display = "inline-block";
            } else {
                div.style.display = "none";
            }
        }
    }
}
const sorteerTaak = () => {
    let alleTaken = document.getElementById("takenLijst")
    
}
window.addEventListener("load", setup);