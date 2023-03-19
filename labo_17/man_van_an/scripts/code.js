const setup = () => {
    let counter = 0;
    let mva = "De man van An geeft geen hand aan ambetante verwanten";
    for (let i = 0; i < mva.length; i++) {
        if(mva.charAt(i) === 'an')
        {if(mva.charAt(i+1))
            {counter++;
                i++;
            }
        }
    }
    let output = document.getElementById('op')
    output.innerHTML = counter
}
window.addEventListener("load", setup);