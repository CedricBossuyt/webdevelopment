let global = {
    Lijst: [],
    rood: 0,
    groen: 0,
    blauw: 0
}
const storeSliderValues = () => {
    global.rood = document.getElementById("sldRed").value
    global.groen = document.getElementById("sldGreen").value
    global.blauw = document.getElementById("sldBlue").value

    localStorage.setItem("colorPicker", JSON.stringify(global))
};
const restoreSliderValues = () => {

};
const storeSwatches = () => {
    // bouw een array met kleurinfo objecten

};
const restoreSwatches = () => {

};