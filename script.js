const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Añade un evento de clic al botón del menú
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Alterna la clase "active" en el menú
});



$(document).ready(function() {
    $(".features").css("opacity", "1").css("transform", "translateY(0)");

    $(".feature").each(function(index) {
        $(this).delay(200 * index).animate({
            opacity: 1,
            top: "0"
        }, 500);
    });
});

$(document).ready(function() {
    $(".card-image").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.1)");
            $(this).find(".overlay").css("opacity", "1");
        },
        function() {
            $(this).find("img").css("transform", "scale(1)");
            $(this).find(".overlay").css("opacity", "0");
        }
    );
});

$(document).ready(function() {
    $(".card-image").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.1)");
            $(this).find(".overlay").css("opacity", "1");
            $(this).find(".ver-mas").delay(200).queue(function(next) {
                $(this).css("opacity", "1");
                next();
            });
        },
        function() {
            $(this).find("img").css("transform", "scale(1)");
            $(this).find(".overlay").css("opacity", "0");
            $(this).find(".ver-mas").css("opacity", "0");
        }
    );
});


document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project'); // Obtiene el identificador del proyecto
            localStorage.setItem('selectedProject', projectId); // Guarda el proyecto en localStorage
            window.location.href = 'proyectos.html'; // Redirige a proyectos.html
        });
    });
});



window.addEventListener('load', function() {
    document.body.style.display = 'none'; // Oculta temporalmente el cuerpo
    setTimeout(function() {
        document.body.style.display = 'block'; // Vuelve a mostrar el cuerpo
    }, 0);
});



$(document).ready(function() {
    const mobileBreakpoint = 1150; // Define el breakpoint para dispositivos móviles

    $('.card').on('click', function() {
        // Verifica si el ancho de la ventana es menor o igual al breakpoint
        if ($(window).width() <= mobileBreakpoint) {
            const projectId = $(this).attr('data-project'); // Obtiene el identificador del proyecto
            localStorage.setItem('selectedProject', projectId); // Guarda el proyecto en localStorage
            window.location.href = 'proyectos.html'; // Redirige a proyectos.html
        }
    });
});


const mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.addEventListener("change", () => {
    location.reload(); // Recarga si detecta un cambio de tamaño
});