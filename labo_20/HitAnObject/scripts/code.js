let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
let interval = 0;
const setup = () => {
    let start = document.getElementById("Startknop");
    start.addEventListener("click", startSpel);
}

const startSpel = () => {
    interval = setInterval(berekenVolgendeLocatieFoto, 1000);
    interval = setInterval(veranderFoto, 1000);
}

const alert = () => {
    window.alert("GAME OVER")
    history.go();
}
const berekenVolgendeLocatieFoto = () => {
        let foto = document.getElementsByClassName("foto")[0];
        let speelveld = document.getElementById("playField");
        let maxLeft=speelveld.clientWidth - foto.offsetWidth;
        let maxHeight=speelveld.clientHeight - foto.offsetHeight;
        let left = Math.floor(Math.random() * maxLeft);
        let top = Math.floor(Math.random() * maxHeight);
        foto.style.left = left + "px";
        foto.style.top = top + "px";
}

const veranderFoto = () => {
    let clickfoto = document.getElementById("fotot")
    let getal = Math.random() * 4;
    let afgerondGetal = Math.round(getal);
    document.getElementById("fotot").src = global.IMAGE_PATH_PREFIX + afgerondGetal + global.IMAGE_PATH_SUFFIX;
    if (afgerondGetal === 0) {
    clickfoto.addEventListener('click', alert)
    }
    else
    {
        clickfoto.addEventListener('click', counterUp);
    }
}

const counterUp = () => {
    let counter = document.getElementById("counter")
    counter.innerHTML ++;
}
window.addEventListener("load", setup);