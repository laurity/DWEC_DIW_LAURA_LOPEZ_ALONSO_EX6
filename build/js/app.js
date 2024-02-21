document.addEventListener("DOMContentLoaded", function(){
    iniciarApp()
})

const iniciarApp = () =>{
    mostrarImagen();
    ScrollBar()
    mostrarModal()
}

const ScrollBar = () => {
    const barra = document.querySelectorAll("contenedor-header")
    barra.addEventListener("scroll", () => {
        
    })

}

const crearImagenes = () =>{
    const galeria = document.querySelector(".galeria-imagenes")
    for(let i = 1; i <= 5; i++){
        const imagen = document.createElement("picture")
        imagen.src = `build/img/thumb/${i}.webp`
        imagen.onclick = mostrarImagen

        const lista = document.createElement("LI")
        lista.appendChild(imagen)
        galeria.appendChild(lista)
    }

}

const mostrarImagen = () => {
    const id = parseInt(imagen.dataset.imagenId)
    const imagen = document.createElement("img")
    imagen.src = `build/img/grande/${id}.webp`

    const overlay = document.createElement("div")
    overlay.appendChild(imagen)
    overlay.classList.add("overlay")

    overlay.onclick = () => {
        overlay.remove()
    }
    const cerrarImagen = document.createElement("p")
    cerrarImagen.textContent = "X"
    cerrarImagen.classList.add("btn-cerrar")

    cerrarImagen.onclick = () => {
        overlay.remove()
    }

    overlay.appendChild(cerrarImagen)
    const body = document.querySelector("body")
    body.appendChild(overlay)
}

const crearModal = () => {
    const modal = document.createElement("div")
    modal.classList.add(modal)
    modal.innerHTML = `
    `
}

const mostrarModal = () =>{
    const imagenes = document.querySelectorAll(".galeria-imagenes img")
    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => {
            console.log("click")
        })
    })
}

const darkMode = () => {
    const darkMode = document.getElementById("dark-mode")

    darkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark")
    })

    body.style.backgroundColor = "black"
    body.style.color = "white"
}

const mostrarAnio = () => {
    const year = document.getElementById("year")
    year = getFullYear();
    year.innerHTML = year
}