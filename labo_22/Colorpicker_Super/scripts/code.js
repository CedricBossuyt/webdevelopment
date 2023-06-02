const initialize = () => {
    document.getElementById("btnSave").addEventListener("click", saveSwatch);
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }


    let lijst = JSON.parse(localStorage.getItem("lijst"));
    for(let i = 0; i < lijst.length; i++){
        let red = lijst[i].Red;
        let green = lijst[i].Green;
        let blue = lijst[i].Blue;
        addSwatchComponent(red, green, blue);
    }
    restoreSliderValues();
    restoreSwatches();
    update();
};

const saveSwatch = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let object = {
        Red: red,
        Green: green,
        Blue: blue
    }
    global.lijst.push(object);

    let stringLijst = JSON.stringify(global.lijst);
    localStorage.setItem("lijst", stringLijst);
    // voeg swatch toe
    addSwatchComponent(red, green, blue);

    // bewaar kleurinfo van alle swatches in local storage
    storeSwatches();
};

const setColorPickerFromSwatch = (event) => {
    if (event.target.className=="swatch") {
        let swatch = event.target;
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green
        document.getElementById("sldBlue").value = rgb.blue

        // helaas triggeren de .value wijzigingen niet automatisch
        // een change event ds moeten we handmatig update oproepen
        update();
    }
};

const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);

    // bewaar kleurinfo van alle swatches in local storage
    storeSwatches();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    storeSliderValues();
};


window.addEventListener("load", initialize);