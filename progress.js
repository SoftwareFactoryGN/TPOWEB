$(document).ready(function() {
// Lógica para mostrar el progreso y sugerencias de cursos
// Simula el progreso del curso
var porcentajeCompletado = 75; // valor de backend simulado
var cursoActual = "Elementos de Diseño y Desarrollo Web" // valor de backend simulado

    $('#cursoActual').text(cursoActual);
    // Actualiza el texto del porcentaje y la barra de progreso
    $('#porcentajeCompletado').text(porcentajeCompletado + '%');
    $('#progressBar').css('width', porcentajeCompletado + '%');

// Evento para cerrar sesión
$('#logoutBtn').click(function() {
    window.location.href = 'index.html';
    // ...
});
});