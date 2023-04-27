
function construirProgramas() {

  var programas = [  {    "nombre": "SGML",    "imagen": "https://i.pinimg.com/originals/7b/e9/2d/7be92d0ce2d1bda2e9833632ed778d32.png"  },  {    "nombre": "XML",    "imagen": "https://cdn-icons-png.flaticon.com/512/29/29611.png"  },  {    "nombre": "HTML",    "imagen": "https://cdn-icons-png.flaticon.com/512/919/919827.png",    "link": "paginaSecundaria.html",    "wiki": "https://es.wikipedia.org/wiki/HTML", "fecha": "29 de octubre de 1991"  },  {    "nombre": "HTTP",    "imagen": "https://cdn-icons-png.flaticon.com/128/2593/2593633.png"  },  {    "nombre": "CSS",    "imagen": "https://cdn-icons-png.flaticon.com/512/919/919826.png"  },  {    "nombre": "JavaScript",    "imagen": "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"  }];
  localStorage.setItem('programas', JSON.stringify(programas));
  var html = crearHTML(programas);
  document.getElementById("programas").innerHTML = html;
}


function construirPersonas() {
var personas = [{ "nombre": "Vannevar Bush", "imagen": "http://www.icesi.edu.co/blogs_estudiantes/anavelez/files/2010/01/bush.jpg" },{ "nombre": "Tim Berners Lee", "imagen": "https://i.blogs.es/3ef43a/tim-berners-lee/1366_2000.jpg", "link": "paginaSecundaria.html" }];
localStorage.setItem("personas", JSON.stringify(personas));
var html = crearHTML(personas);
document.getElementById("personas").innerHTML = html;
}

function construirEmpresas() {
  var empresas = [{"nombre": "IBM", "imagen": "https://cdn-icons-png.flaticon.com/512/882/882727.png"},{"nombre": "CERN", "imagen": "https://ioppublishing.org/wp-content/uploads/2018/05/CERN-logo-300x300.jpg"},{"nombre": "W3C", "imagen": "https://www.vectorlogo.zone/logos/w3c/w3c-ar21.png"}];
  localStorage.setItem("empresas", JSON.stringify(empresas));
  var html = crearHTML(empresas);
  document.getElementById("empresas").innerHTML = html;
}

function crearHTML(datos) {
  var html = "";
  for (var i = 0; i < datos.length; i++) {
    html += "<p class='card-text eliminar'>";
    html += "<img src='" + datos[i].imagen + "' width='10%' />";
    if (datos[i].link) {
      html += "<a href='" + datos[i].link + "'>" + datos[i].nombre + "</a>";
    } else {
      html += datos[i].nombre;
    }
    html += "</p>";
  }
  return html;
}
  