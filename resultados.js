document.addEventListener('DOMContentLoaded', function () {
    cargarDatos();
    calcularTotales();
});

function cargarDatos() {
    var resultadosTable = document.getElementById('resultadosTable');
    var tbody = resultadosTable.getElementsByTagName('tbody')[0];

    // Obtiene los datos almacenados en el localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var dni = localStorage.key(i);
        var data = JSON.parse(localStorage.getItem(dni));

        // Crea una nueva fila en la tabla con los datos
        var newRow = tbody.insertRow();
        var cellNombre = newRow.insertCell(0);
        var cellDNI = newRow.insertCell(1);
        var cellCandidato = newRow.insertCell(2);

        cellNombre.innerHTML = data.nombre;
        cellDNI.innerHTML = dni;
        cellCandidato.innerHTML = data.candidato;
    }
}

function calcularTotales() {
    var resultadosTable = document.getElementById('resultadosTable');
    var tbody = resultadosTable.getElementsByTagName('tbody')[0];
    var totalVotosCell = document.getElementById('totalVotos');
    var totalVotosCandidato1Cell = document.getElementById('totalVotosCandidato1');
    var totalVotosCandidato2Cell = document.getElementById('totalVotosCandidato2');
    var totalVotosCandidato3Cell = document.getElementById('totalVotosCandidato3');
    var totalVotosCandidato4Cell = document.getElementById('totalVotosCandidato4');
    var totalVotosCandidato5Cell = document.getElementById('totalVotosCandidato5');
    var totalVotosCandidato6Cell = document.getElementById('totalVotosCandidato6');

    var totalVotos = tbody.rows.length;
    var totalVotosCandidato1 = contarVotosPorCandidato('Candidato1');
    var totalVotosCandidato2 = contarVotosPorCandidato('Candidato2');
    var totalVotosCandidato3 = contarVotosPorCandidato('Candidato3');
    var totalVotosCandidato4 = contarVotosPorCandidato('Candidato4');
    var totalVotosCandidato5 = contarVotosPorCandidato('Candidato5');
    var totalVotosCandidato6 = contarVotosPorCandidato('Candidato6');

    // Actualiza el total de votos en la celda del footer
    totalVotosCell.innerHTML = totalVotos;
    totalVotosCandidato1Cell.innerHTML = totalVotosCandidato1;
    totalVotosCandidato2Cell.innerHTML = totalVotosCandidato2;
    totalVotosCandidato3Cell.innerHTML = totalVotosCandidato3;
    totalVotosCandidato4Cell.innerHTML = totalVotosCandidato4;
    totalVotosCandidato5Cell.innerHTML = totalVotosCandidato5;
    totalVotosCandidato6Cell.innerHTML = totalVotosCandidato6;
}

function contarVotosPorCandidato(candidato) {
    var resultadosTable = document.getElementById('resultadosTable');
    var tbody = resultadosTable.getElementsByTagName('tbody')[0];
    var count = 0;

    for (var i = 0; i < tbody.rows.length; i++) {
        var candidatoVotado = tbody.rows[i].cells[2].textContent;
        if (candidatoVotado === candidato) {
        count++;
        }
    }

    return count;
}

function cerrarSesion() {
    // Redirige a la página de login al cerrar sesión
    window.location.href = 'index.html';
}

function guardarPDF() {
    var resultadosTable = document.getElementById('resultadosTable');

    // Configura las opciones para html2pdf
    var opciones = {
        margin: 10,
        filename: 'resultados.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Usa html2pdf para generar el PDF y descargarlo
    html2pdf(resultadosTable, opciones);
}

function borrarDatos() {
    // Borra todos los datos del localStorage
    localStorage.clear();

    // Recarga la página para reflejar los cambios
    location.reload();
}
