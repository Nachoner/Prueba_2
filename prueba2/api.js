$(document).ready(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        const indicadoresDiv = $('#indicadores');

        // Selecciona solo el valor del dólar y la UF
        const dolar = data.dolar;
        const uf = data.uf;

        const indicadoresHtml = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${dolar.nombre} (${dolar.codigo})</h5>
                    <p class="card-text">Valor: ${dolar.valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                    <p class="card-text">Unidad: ${dolar.unidad_medida}</p>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${uf.nombre} (${uf.codigo})</h5>
                    <p class="card-text">Valor: ${uf.valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                    <p class="card-text">Unidad: ${uf.unidad_medida}</p>
                </div>
            </div>
        `;

        indicadoresDiv.html(indicadoresHtml);
    }).fail(function(jqxhr, textStatus, error) {
        console.error('No se pudo traer la informacion :():', error);
    });
});