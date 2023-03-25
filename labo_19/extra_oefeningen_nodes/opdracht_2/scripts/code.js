const setup = () => {
    document.querySelectorAll("li").forEach((li) => {
        li.classList.add('listitem');
    });

    const style = document.createElement('style');
    style.innerHTML = `
      .listitem {
        color:red;
      }
    `;
    document.head.appendChild(style);

    const img = document.createElement("img");
    img.src = 'images/selfie.jpg';
    document.body.appendChild(img);
}
window.addEventListener("load", setup);