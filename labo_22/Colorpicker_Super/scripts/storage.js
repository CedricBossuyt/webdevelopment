let global = {
    lijst : []
}

const storeSliderValues = () => {
    let sldRed = document.getElementById("sldRed").value;
    let sldGreen = document.getElementById("sldGreen").value;
    let sldBlue = document.getElementById("sldBlue").value;
    localStorage.setItem("redSlider", sldRed);
    localStorage.setItem("greenSlider", sldGreen);
    localStorage.setItem("blueSlider", sldBlue);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("redSlider");
    document.getElementById("sldGreen").value = localStorage.getItem("greenSlider");
    document.getElementById("sldBlue").value = localStorage.getItem("blueSlider");
};

const storeSwatches = () => {

};

const restoreSwatches = () => {

};
