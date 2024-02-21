document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    
    navegacionFija();

    crearGaleria();

    scrollNav();

    darkMode();

     let yearSpan = document.getElementById("year");

     let currentYear = new Date().getFullYear();

     yearSpan.textContent = currentYear;
}


function navegacionFija() {
    const barra = document.querySelector('.header');
    const video = document.querySelector('.video');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function() {
        if( video.getBoundingClientRect().bottom < 0 && this.window.innerWidth >= 768 ) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}


function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', ({ target }) => {
            event.preventDefault();
            const seccionScroll = target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 5; i++ ) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.png" type="image/png">
            <source srcset="build/img/thumb/${i}.jpg" type="image/jpg">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.png" alt="imagen galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}  

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.png" type="image/png">
        <source srcset="build/img/grande/${id}.jpg" type="image/jpg">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.png" alt="imagen galeria">
    `;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

function darkMode() {
    const botonDarkMode = document.querySelector('#dark-mode-button');
    const body = document.querySelector('body');
    botonDarkMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
}