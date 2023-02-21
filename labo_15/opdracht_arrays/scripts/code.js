var familieleden = ["Jos", "Dirk", "Ben", "Bob", "Josefien"]
console.log(familieleden.length);

for (let i = 0; i < familieleden.length; i += 2) {
    console.log(familieleden[i])
}

const VoegNaamToe = () => {
    var familielid = window.prompt("Wat is uw naam", "onbekend");
    familieleden.push(familielid);
    console.log(familieleden);
}

const Converteer = () => {
    familieleden.toString;
    console.log(familieleden);
}
window.addEventListener("load", setup);