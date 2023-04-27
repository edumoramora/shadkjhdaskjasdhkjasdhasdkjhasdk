var nombreSeleccionado = localStorage.getItem('Seleccionado');
console.log("Nombre del programa seleccionado: " + nombreSeleccionado);

var programas = JSON.parse(localStorage.getItem('programas'));
var personas = JSON.parse(localStorage.getItem('personas'));
var empresas = JSON.parse(localStorage.getItem('empresas'));

var seleccionado = programas.find(function(programa) {
    return programa.nombre === nombreSeleccionado;
  }) || personas.find(function(persona) {
    return persona.nombre === nombreSeleccionado;
  }) || empresas.find(function(empresa) {
    return empresa.nombre === nombreSeleccionado;
  });

if (seleccionado) {
    localStorage.setItem('seleccionado', JSON.stringify(seleccionado));
    console.log("Objeto guardado en la memoria local: ", seleccionado);
} else {
    console.log("No se encontró ningún objeto con el nombre seleccionado");
}


function construirIndex() {
    var html = ""; 
    html += '<p class="card-text eliminar">';
    html += '<h3 class="card-title">' + seleccionado.nombre + '</h3>';
    html += '<p class="card-text">' + seleccionado.fecha + '</p>';
    html += '<p class="text-center">';
    html += '<img src="' + seleccionado.imagen + '" width="200px" class="img-fluid"/>';
    html += '</p>';

    document.getElementById("seleccionado").innerHTML = html;
    document.getElementById("seleccionadoWiki").src = seleccionado.wiki;

  }

