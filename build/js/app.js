document.addEventListener("DOMContentLoaded", function(){
    iniciarApp()
})

const iniciarApp = () =>{
    mostrarImagenes();
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

}

const mostrarModal = () =>{

}

const darkMode = () => {
    
}