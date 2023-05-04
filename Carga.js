document.addEventListener('DOMContentLoaded', function() {


  localStorage.setItem('datos', JSON.stringify(datos));
  localStorage.setItem('login',JSON.stringify(login));







  construirProgramas();
  construirPersonas();
  construirEmpresas();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
  

    var user = document.querySelector("input[name='usuario']").value;
    var password = document.querySelector("input[name='password']").value;
    const formularioLogin = document.getElementById('formulario-login');
    const logoutBtn = document.getElementById('logout-btn');
    
    const usuarios = JSON.parse(localStorage.getItem("login"));
    const usuarioEncontrado = usuarios.find(usuario => usuario.usuario === user && usuario.password === password);
    
  
    if (usuarioEncontrado) {
      localStorage.setItem('sesionExitosa', 'false');
      alert('Inicio de sesión exitoso');
      
      formularioLogin.classList.add('d-none');
      logoutBtn.classList.remove('d-none');
     
      $('.card-body .eliminar').each(function() {
        var $this = $(this);
     
        var button = $('<button/>', {
            text: 'Eliminar',
            class: 'btn btn-danger ml-2',
            click: function() { 
              var nombreEliminado = $this.attr('data-nombre');
              console.log(nombreEliminado);   
              if (eliminarPorNombre(nombreEliminado)) {
                $(this).parent().remove();
              }
          }
      });
      $this.append(button);
  });
   
    
      $('.container-btn').each(function() {
        var addButton = $('<button/>', {
          text: 'Añadir elemento',
          class: 'btn btn-success mt-3',
          click: function() {
            var titulo = $(this).siblings('.card-title').attr('class');
            console.log(titulo);
             window.location.href = 'nuevo.html';

          }
        });
        $(this).append(addButton);
      });
  
  
    } else {
      alert('El correo electrónico o la contraseña son incorrectos');
    }
  
    logoutBtn.addEventListener('click', () => {
    window.location.href = "Index.html";
    });
  });
});




function construirProgramas() {
  var programas = datos.programas;
    var html = crearHTML(programas);
    document.getElementById("programas").innerHTML = html;
}


function construirPersonas() {
var personas = datos.personas;
var html = crearHTML(personas);
document.getElementById("personas").innerHTML = html;
}

function construirEmpresas() {
    var empresas = datos.empresas;
    var html = crearHTML(empresas);
    document.getElementById("empresas").innerHTML = html;
}

function crearHTML(datos) {
    var html = "";
    for (var i = 0; i < datos.length; i++) {
      html += "<p class='card-text eliminar' data-nombre='" + datos[i].nombre + "'>";
      html += "<img src='" + datos[i].imagen + "' width='10%' />";
      if (datos[i].link) {
        html += "<a class='programa-link' href='" + datos[i].link + "' onclick='guardarNombre(\"" + datos[i].nombre + "\")'>" + datos[i].nombre + "</a>";
      } else {
        html += datos[i].nombre;
      }
      html += "</p>";
    }
    return html;
  }


  function guardarNombre(nombre) {
    localStorage.setItem('Seleccionado', nombre);
  }

  function eliminarPorNombre(nombre) {
    var index = datos.programas.findIndex(function(item) {
      return item.nombre === nombre;
    });
    if (index !== -1) {
      datos.programas.splice(index, 1);
      const datosJson = JSON.stringify(datos.programas);
      localStorage.setItem('datos.programas', datosJson);
      return true;
    }

    index = datos.empresas.findIndex(function(item) {
      return item.nombre === nombre;
    });
    if (index !== -1) {
      datos.empresas.splice(index, 1);
      const datosJson = JSON.stringify(datos.empresas);
      localStorage.setItem('datos.empresas', datosJson);
      return true;
    }
  
    index = datos.personas.findIndex(function(item) {
      return item.nombre === nombre;
    });
    if (index !== -1) {
      datos.personas.splice(index, 1);
      const datosJson = JSON.stringify(datos.personas);
      localStorage.setItem('datos.personas', datosJson);
      return true;
    }
  
    return false;
  }

const loginForm = document.getElementById('login-form');




  

