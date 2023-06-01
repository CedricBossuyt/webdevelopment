const setup = () => {
    // let student={
    //     voornaam : "Jan",
    //     familienaam : "Janssens",
    //     geboorteDatum : new Date("1993-12-31"),
    //     adres : { // een object
    //         straat : "Kerkstraat 13",
    //         postcode : "8500",
    //         gemeente : "Kortrijk"
    //     },
    //     isIngeschreven : true,
    //     namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
    //     aantalAutos : 2
    // }
    // let stringStudent = JSON.stringify(student)
    // console.log(stringStudent)

    let studentke = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';
    let dagStudent = JSON.parse(studentke)
    console.log(dagStudent)
}
window.addEventListener("load", setup);