document.addEventListener("DOMContentLoaded", function(){
    iniciarApp()
})

const iniciarApp = () =>{
    mostrarImagenes();
    ScrollBar()
    mostrarModal()
}

const ScrollBar = () => {

}

const mostrarImagenes = () => {
    const lista = document.querySelector("galeria-imagenes")

    for (let i = 1; i <= 5; i++) {
    const imagen = document.createElement("img")
    imagen.innerHTML = `
        <source src="build/img/thumb/${i}.png" alt="imagen ${i}">
        <source src="build/img/thumb/${i}.jpg" alt="imagen ${i}">
        <source src="build/img/thumb/${i}.webp" alt="imagen ${i}">

        <img src="build/img/thumb/${i}.png" alt="imagen ${i}">
    `
        
    }
}

const crearModal = () => {
    //creamos el modal
    const modal = document.createElement("div")
    modal.classList.add(modal)
    modal.innerHTML = `

    `
}

const mostrarModal = () =>{

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