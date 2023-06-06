let global ={
    linkLijst: []
}
const setup = () => {
    document.getElementById('GObutton').addEventListener('click', goButtonKlik)
    let objectlinkskes = JSON.parse(localStorage.getItem("linkjes"))
    if(objectlinkskes !== null){
        if(objectlinkskes.linkLijst !== null){
            global.linkLijst = objectlinkskes.linkLijst
            for (let i = 0; i < global.linkLijst.length; i++) {
                let history = document.getElementById('history')
                let card = document.createElement('div')
                card.className = 'cardLink'
                if (global.linkLijst[i].includes('google')){
                    card.style.backgroundColor = 'rgb(0,0,255)'
                }else if(global.linkLijst[i].includes('youtube')){
                    card.style.backgroundColor = 'rgb(255,0,0)'
                }
                let smallGoButton = document.createElement('input')
                smallGoButton.type = 'button'
                smallGoButton.value = 'go!'
                smallGoButton.className = 'smallGoButton'
                smallGoButton.addEventListener("click", () => { open(global.linkLijst[i]) })
                card.appendChild(smallGoButton)
                history.appendChild(card)
            }
        }
    }
}
const goButtonKlik = () => {
    let input = document.getElementById('zoekOpdracht')
    if(input.value.startsWith('/g')){
        let gZoekOpdracht = input.value.replace('/g', '')
        open('https://www.google.com/search?q='+gZoekOpdracht)
        let link = 'https://www.google.com/search?q='+gZoekOpdracht
        global.linkLijst.push(link)
        makeCard(link)
    }else if(input.value.startsWith('/y')) {
        let yZoekOpdracht = input.value.replace('/y', '')
        open('https://www.youtube.com/results?search_query=' + yZoekOpdracht)
        let link = 'https://www.youtube.com/results?search_query='+yZoekOpdracht
        global.linkLijst.push(link)
        makeCard(link)
    }else if(input.value.startsWith('/')){
        window.alert('die prefieks ken ik niet kill')
    }else{
        window.alert('die kommando ken ik tog niet mwoan')
    }
    localStorage.setItem("linkjes", JSON.stringify(global))
}
const makeCard = (link) =>{
    let input = document.getElementById('zoekOpdracht')
    let gZoekOpdracht = input.value.replace('/g', '')
    let yZoekOpdracht = input.value.replace('/y', '')
    let history = document.getElementById('history')
    let card = document.createElement('div')
    card.className = 'cardLink'
    let titel = document.createElement('p')
    let beschrijving = document.createElement('p')
    if (link.includes('google')){
        let textTitel = document.createTextNode("Google")
        let textBeschrijving = document.createTextNode(gZoekOpdracht)
        titel.appendChild(textTitel)
        beschrijving.appendChild(textBeschrijving)
        card.style.backgroundColor = 'rgb(0,0,255)'
    }else if(link.includes('youtube')){
        let textTitel = document.createTextNode("Youtube")
        let textBeschrijving = document.createTextNode(yZoekOpdracht)
        titel.appendChild(textTitel)
        beschrijving.appendChild(textBeschrijving)
        card.style.backgroundColor = 'rgb(255,0,0)'
    }
    let smallGoButton = document.createElement('input')
    smallGoButton.type = 'button'
    smallGoButton.value = 'go!'
    smallGoButton.className = 'smallGoButton'
    smallGoButton.addEventListener("click", () => { open(link) })
    card.appendChild(titel)
    card.appendChild(beschrijving)
    card.appendChild(smallGoButton)
    history.appendChild(card)
}
window.addEventListener("load", setup);