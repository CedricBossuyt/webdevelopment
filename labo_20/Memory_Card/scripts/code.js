let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    AANTAL_KAARTEN_OPTAFEL: 12,
    kaartLijst: []
};
const setup = () => {
    let kaartTafel = document.createElement("div")
    kaartTafel.classList.add("kaartTafel");
    document.body.appendChild(kaartTafel)

    for (let i = 0; i < global.AANTAL_KAARTEN_OPTAFEL; i++) {
        let kaart = document.createElement("img")
        kaart.className = "achterkant"
        kaart.id = "kaart" + i;
        kaart.src = "images/achterkant.jpg"
        kaart.onclick = klik;
        kaartTafel.appendChild(kaart);
        global.kaartLijst.push(kaart);
    }
}
const klik = () => {
    
}
window.addEventListener("load", setup);