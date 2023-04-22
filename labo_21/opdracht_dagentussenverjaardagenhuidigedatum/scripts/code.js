const setup = () => {
    let huidigeDatum = new Date();
    let verjaardag = new Date(2004, 10, 11);
    let berekeningske = huidigeDatum - verjaardag;
    let dagenTussen = Math.ceil( berekeningske/ (1000 * 60 * 60 * 24));
    console.log("Ik leef al " + dagenTussen + " dagen! (ben geboren op 11 oktober 2004)");
}
window.addEventListener("load", setup);