const setup = () => {
    let texts = document.getElementById('myDIV');
    texts.addEventListener("click", klik);
};

const klik = () =>{
    const text =document.createElement("p");
    text.textContent="Random Tekst";
    document.body.appendChild(text);
}

window.addEventListener("load", setup);