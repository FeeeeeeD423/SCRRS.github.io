document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registroConsulta').addEventListener('click', function() {
        document.querySelector('.menu-principal').style.display = 'none';
        document.querySelector('.registro-consulta').style.display = 'block';
    });

    document.getElementById('volver').addEventListener('click', function() {
        document.querySelector('.registro-consulta').style.display = 'none';
        document.querySelector('.menu-principal').style.display = 'block';
    });

    document.getElementById('ingresar').addEventListener('dblclick', function() {
        document.getElementById('formConsulta').reset();
    });

    document.getElementById('copiar').addEventListener('click', function() {
        const respuestaTentativa = document.getElementById('respuestaTentativa').value;
        document.getElementById('respuestaFinal').value = respuestaTentativa;
    });
});
