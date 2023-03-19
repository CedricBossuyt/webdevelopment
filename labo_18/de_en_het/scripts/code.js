const setup = () => {
    let azin = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    let bzin = azin.split(' de')
    let czin = bzin.join(' het')
    console.log(czin)
}
window.addEventListener("load", setup);