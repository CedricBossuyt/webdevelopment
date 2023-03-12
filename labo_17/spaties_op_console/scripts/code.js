const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", spaties)
}

const spaties = () => {
    let input = document.getElementById("input").value;
    let tekst = input.toString();
    let spatiesweg = tekst.replace(/\s/g, '');
    let atekst = spatiesweg.match(/.{0,1}/g);
    let btekst = atekst.join(" ");
    console.log(btekst);
}
window.addEventListener("load", setup);