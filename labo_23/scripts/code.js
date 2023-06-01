const setup = () => {
    document.getElementById("GObutton").addEventListener("click", submitCommand)
}
const submitCommand = () => {
    let input = document.getElementById("zoekOpdracht")
    let query = input.value;
    if(input.value.startsWith("/", 0)){
        if(input.value.startsWith("g", 1)){
            let gQuery = query.replace('/g ', '')
            window.open("https://www.google.be/search?q=" + gQuery)
            let info = {
                Titel: "Google",
                Beschrijving: gQuery
            }
            let baseURL = "https://www.google.be/search?q=";
            let element = document.createElement('div');
            let miniGOButton = document.createElement('input');
            miniGOButton.setAttribute('type', 'button');
            miniGOButton.setAttribute('value', 'Go!')
            miniGOButton.setAttribute('onclick', `window.location.href='${baseURL}${gQuery}'`)
            element.style.backgroundColor =`rgb(${0},${128},${255})`
            miniGOButton.style.backgroundColor = `rgb(${255},${77},${0})`
            miniGOButton.style.color = `rgb(${255},${130},${21})`
            element.className="historyBlok"
            miniGOButton.className ="miniGOButton"
            document.getElementById("history").appendChild(element)
            element.innerHTML = info.Titel + " " + info.Beschrijving
            element.appendChild(miniGOButton)
            clearInput()
        } else if(input.value.startsWith("y", 1)){
            let yQuery = query.replace('/y ', '')
            window.open("https://www.youtube.com/results?search_query=" + yQuery)
            let info = {
                Titel: "Youtube",
                Beschrijving: yQuery
            }
            let baseURL = "https://www.youtube.com/results?search_query=";
            let element = document.createElement('div');
            let miniGOButton = document.createElement('input');
            miniGOButton.setAttribute('type', 'button');
            miniGOButton.setAttribute('value', 'Go!')
            miniGOButton.setAttribute('onclick', `window.location.href='${baseURL}${yQuery}'`)
            element.style.backgroundColor =`rgb(${255},${0},${0})`
            miniGOButton.style.backgroundColor = `rgb(${0},${0},${0})`
            miniGOButton.style.color = `rgb(${255},${255},${255})`
            element.className="historyBlok"
            miniGOButton.className ="miniGOButton"
            document.getElementById("history").appendChild(element)
            element.innerHTML = info.Titel + " " + info.Beschrijving
            element.appendChild(miniGOButton)
            clearInput()
        }else if(input.value.startsWith("t", 1)){
            let tQuery = query.replace('/t ', '')
            let tQueryfixed = tQuery.replaceAll(' ', '');
            window.open("https://twitter.com/hashtag/" + tQueryfixed)
            let info = {
                Titel: "Twitter",
                Beschrijving: tQueryfixed
            }
            let baseURL = "https://twitter.com/hashtag/";
            let element = document.createElement('div');
            let miniGOButton = document.createElement('input');
            miniGOButton.setAttribute('type', 'button');
            miniGOButton.setAttribute('value', 'Go!')
            miniGOButton.setAttribute('onclick', `window.location.href='${baseURL}${tQueryfixed}'`)
            element.style.backgroundColor =`rgb(${51},${153},${255})`
            miniGOButton.style.backgroundColor = `rgb(${0},${0},${0})`
            miniGOButton.style.color = `rgb(${255},${255},${255})`
            element.className="historyBlok"
            miniGOButton.className ="miniGOButton"
            document.getElementById("history").appendChild(element)
            element.innerHTML = info.Titel + " " + info.Beschrijving
            element.appendChild(miniGOButton)
            clearInput()
        }else if(input.value.startsWith("i", 1)){
            let iQuery = query.replace('/i ', '')
            let iQueryfixed = iQuery.replaceAll(' ', '')
            console.log(iQueryfixed)
            window.open("https://www.instagram.com/explore/tags/" + iQueryfixed)
            let info = {
                Titel: "Instagram",
                Beschrijving: iQueryfixed
            }
            let baseURL = "https://www.instagram.com/explore/tags/";
            let element = document.createElement('div');
            let miniGOButton = document.createElement('input');
            miniGOButton.setAttribute('type', 'button');
            miniGOButton.setAttribute('value', 'Go!')
            miniGOButton.setAttribute('onclick', `window.location.href='${baseURL}${iQueryfixed}'`)
            element.style.backgroundColor =`rgb(${201},${75},${167})`
            miniGOButton.style.backgroundColor = `rgb(${240},${114},${17})`
            miniGOButton.style.color = `rgb(${240},${188},${17})`
            element.className="historyBlok"
            miniGOButton.className ="miniGOButton"
            document.getElementById("history").appendChild(element)
            element.innerHTML = info.Titel + " " + info.Beschrijving
            element.appendChild(miniGOButton)
            clearInput()
        }
        else{
            window.alert("Unkown command prefix")
        }
    }
    else if(input.value === "refresh pagina"){
        location.reload();
    }
    else{
        window.alert("invalid command")
    }
    function clearInput() {
        document.getElementById("zoekOpdracht").value = "";
    }
}
window.addEventListener("load", setup);