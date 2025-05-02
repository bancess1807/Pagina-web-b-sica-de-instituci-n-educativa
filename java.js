// Aquí puedes agregar funcionalidades interactivas con JavaScript
console.log("¡Hola desde scripts.js!");

// Ejemplo: Agregar un evento a un botón
const discoverButton = document.querySelector('.hero .button');
if (discoverButton) {
    discoverButton.addEventListener('click', function() {
        alert('¡Has hecho clic en el botón Descubre más!');
    });
}

// Puedes seguir agregando más interacciones y lógica aquí
document.addEventListener('DOMContentLoaded', function() {
    const btnSubir = document.getElementById('btnSubir');

    // Mostrar u ocultar el botón al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Cambia 300 por la distancia que quieras para que aparezca el botón
            btnSubir.style.display = 'block';
        } else {
            btnSubir.style.display = 'none';
        }
    });

    // Función para subir al inicio con animación suave
    btnSubir.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 