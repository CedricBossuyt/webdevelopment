let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const bewaarBewerktePersoon = () => {
    valideer()
        let lijst = document.querySelector('select')
        let voornaam = document.getElementById('txtVoornaam')
        let familienaam = document.getElementById('txtFamilienaam')
        let persoon = document.createElement('option')
        persoon.text = voornaam.value + " " + familienaam.value;
        lijst.add(persoon);

    let persoonInfo = {
        Voornaam: document.getElementById("txtVoornaam").value,
        Achternaam: document.getElementById("txtFamilienaam").value,
        Geboortedatum: document.getElementById("txtGeboorteDatum").value,
        Email: document.getElementById("txtEmail").value,
        AantalKinderen: document.getElementById("txtAantalKinderen").value
    }
    personen.push(persoonInfo)

    // valideer alle input data en controleer of er geen errors meer zijn


    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let voornaam = document.getElementById('txtVoornaam');
    voornaam.value = "";
    let familienaam = document.getElementById('txtFamilienaam');
    familienaam.value = "";
    let geboortedatum = document.getElementById('txtGeboorteDatum');
    geboortedatum.value = "";
    let email = document.getElementById('txtEmail');
    email.value = "";
    let aantalKinderen = document.getElementById('txtAantalKinderen');
    aantalKinderen.value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const klikOpPersoon = (value) =>{
    let geupdatePersoon = JSON.parse(value)
    document.getElementById("txtVoornaam").value = geupdatePersoon.Voornaam;
    document.getElementById("txtFamilienaam").value = geupdatePersoon.Achternaam;
    document.getElementById("txtGeboorteDatum").value = geupdatePersoon.Geboortedatum
    document.getElementById("txtEmail").value = geupdatePersoon.Email
    document.getElementById("txtAantalKinderen").value = geupdatePersoon.AantalKinderen
}
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", () => {klikOpPersoon(lstPersonen.value)})
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};
// onze setup functie die de event listeners registreert


window.addEventListener("load", setup);