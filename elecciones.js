function cerrarSesion() {
    // Redirige a la página de login al cerrar sesión
    window.location.href = 'index.html';
}

function votar() {
    // Obtén los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var dni = document.getElementById('dni').value;
    var candidato = document.querySelector('input[name="candidato"]:checked');

    // Verifica si el DNI ya ha votado
    if (localStorage.getItem(dni)) {
        alert('Ya has votado. No puedes votar de nuevo.');
        return;
    }

    // Almacena el voto en el almacenamiento local
    localStorage.setItem(dni, JSON.stringify({ nombre: nombre, candidato: candidato.value }));

    // Muestra el mensaje de éxito y redirige a la página de login
    alert('Su voto se realizó con éxito. Gracias por su votación.');
    window.location.href = 'index.html';
}

