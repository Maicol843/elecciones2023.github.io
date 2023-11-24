function login() {
    var selectType = document.getElementById('selectType').value;

    if (selectType === 'elecciones') {
        window.location.href = 'elecciones.html';
    } else if (selectType === 'resultados') {
        var password = prompt('Introduce la contraseña:');
        // Reemplaza 'tu_contraseña' con la contraseña que desees
        if (password === 'elecciones2023') {
        window.location.href = 'resultados.html';
        } else {
        alert('Contraseña incorrecta');
        }
    }
}
