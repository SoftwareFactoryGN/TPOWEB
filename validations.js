$(document).ready(function() {
// Validación del formulario de registro
    $('#signupForm').submit(function(event) {
        // Lógica de validación para el formulario de registro
        event.preventDefault();
        // variable simulada
        var username = $('#username').val();
        // Simula validacion y acepta cualquier usuario menos admin
        // Deberia constatar contra base de datos
        if (username !== 'admin') {
            // muestra mensaje de exito
            alert('Registro Completado con Exito');
        } else {
            // muestra mensaje de error
            alert('Usuario ya existe');
        }
    });

// Validación de login

    $('#loginForm').submit(function(event) {
        event.preventDefault();
        // variables simuladas
        var username = $('#username').val();
        var password = $('#password').val();
        
        // Valida usuario y contraseña
        // Si es correcto redirige a la página de progreso
        // deberia comparar contra base de datos
        if (username === 'admin' && password === 'admin') {
            window.location.href = 'progress.html';
        } else {
            // Mostrar mensaje de error
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
});