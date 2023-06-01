const setup = () => {
    document.getElementById("optelKnop").addEventListener("click", telOp)
}
const telOp = () => {
    let tekst = document.getElementById("counter")
    let clickCount = localStorage.getItem("Counterke")
    clickCount++
    localStorage.setItem("Counterke", clickCount.toString())
    tekst.innerHTML = clickCount
}
window.addEventListener("load", setup);