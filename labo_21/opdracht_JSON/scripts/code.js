const setup = () => {
    let student1={
        voornaam : "Jan",
        familienaam : "Deklerck",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        }
    }
    let tekst = JSON.stringify(student1);
    console.log(tekst);

    let jsontekst = "{\"voornaam\":\"Jan\",\"familienaam\":\"Deklerck\",\"geboorteDatum\":\"1993-12-31T00:00:00.000Z\",\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"}}\n" +
        "in"
    let student2 = JSON.parse(jsontekst);
    console.log(student2.adres);
}
window.addEventListener("load", setup);