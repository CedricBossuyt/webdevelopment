let global ={
    swatchLijst: [],
    red: 128,
    green: 128,
    blue: 128
}
const setup = () => {
    document.getElementById("saveColor").addEventListener("click", saveColor)
    let sliderRed = document.getElementById("sliderRed")
    sliderRed.addEventListener("change", updateKleur)
    sliderRed.addEventListener("input", updateKleur)

    let sliderGreen = document.getElementById("sliderGreen")
    sliderGreen.addEventListener("change", updateKleur)
    sliderGreen.addEventListener("input", updateKleur)

    let sliderBlue = document.getElementById("sliderBlue")
    sliderBlue.addEventListener("change", updateKleur)
    sliderBlue.addEventListener("input", updateKleur)

    let object = JSON.parse(localStorage.getItem("kleurenLijst"))
    if(object !== null){
        if (object.swatchLijst !== null){
            global.swatchLijst = object.swatchLijst
            for (let i = 0; i < global.swatchLijst.length ; i++) {
                let storage = document.getElementById("storage")
                let swatch = document.createElement('div')
                swatch.id = "swatch"
                let kleur = global.swatchLijst[i]
                swatch.style.backgroundColor = kleur
                let xButton = document.createElement("input")
                xButton.type = "button"
                xButton.value = "X"
                xButton.id = "deleteSwatch"
                swatch.appendChild(xButton)
                storage.appendChild(swatch)
                xButton.addEventListener("click", deleteSwatchke)
            }
        }
        global.red = object.red
        global.green = object.green
        global.blue = object.blue
        sliderRed.value = global.red
        sliderGreen.value = global.green
        sliderBlue.value = global.blue
        updateKleur();
    }
}
const updateKleur = () => {
    let red = document.getElementById("sliderRed").value
    let green = document.getElementById("sliderGreen").value
    let blue = document.getElementById("sliderBlue").value

    document.getElementById("redValue").innerHTML = red
    document.getElementById("greenValue").innerHTML = green
    document.getElementById("blueValue").innerHTML = blue

    let veranderendKleur = document.getElementById("colorChangingBlock")
    veranderendKleur.style.backgroundColor = `rgb(${red},${green},${blue})`

    global.red = red
    global.green = green
    global.blue = blue
    localStorage.setItem("kleurenLijst", JSON.stringify(global))
}
const saveColor = () => {
    let storage = document.getElementById("storage")
    let swatch = document.createElement('div')
    swatch.id = "swatch"
    let kleur = document.getElementById("colorChangingBlock").style.backgroundColor
    swatch.style.backgroundColor = kleur
    console.log(kleur)
    let xButton = document.createElement("input")
    xButton.type = "button"
    xButton.value = "X"
    xButton.id = "deleteSwatch"
    swatch.appendChild(xButton)
    storage.appendChild(swatch)
    xButton.addEventListener("click", deleteSwatchke)
    global.swatchLijst.push(kleur)
    localStorage.setItem("kleurenLijst", JSON.stringify(global))
}
const deleteSwatchke = (event) => {
    event.currentTarget.parentNode.remove()
}
window.addEventListener("load", setup);