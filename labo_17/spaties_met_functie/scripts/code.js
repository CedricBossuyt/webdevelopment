// const maakMetSpaties = (inputText) => {
//     return document.getElementById(inputText);
// }
const maakMetSpaties = (input) => {
    let tekst = input.toString();
    let spatiesweg = tekst.replace(/\s/g, '');
    let atekst = spatiesweg.match(/.{0,1}/g);
    return atekst.join(" ");
}

window.addEventListener("load", maakMetSpaties);