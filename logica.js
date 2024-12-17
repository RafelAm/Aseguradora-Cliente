// Captaación de botones y elementos
const submit = document.getElementById("sub");
const form = document.getElementById("formulario");

const nombre = document.getElementById("name");
const apll = document.getElementById("apll");
const dni = document.getElementById("dni");

const email = document.getElementById("email");
const telefono = document.getElementById("phone");

const sexo = document.getElementById("Sexo");
const comunidades = document.getElementById("comunidades");
const provincia = document.getElementById("provincia");
const marcas = document.getElementById("Marca");
const modelo = document.getElementById("Modelo");
const nacimiento = document.getElementById("nacimiento");

const carnet = document.getElementById("carnet");
const matricula = document.getElementById("matricula");
const matriculacion = document.getElementById("matriculacion");

const seguro = document.getElementById("Seguro");
const vehiculo = document.getElementById("Combustible");

const codigoPostal = document.getElementById("postal");
const fichero = document.getElementById("foto");
const terminos = document.getElementById("terminos");


// Añadir eventos a los elementos
nombre.addEventListener("input", validarNombre);
apll.addEventListener("input", validarApellidos);
dni.addEventListener("input", validarDNI);
email.addEventListener("input", validarEmail);
telefono.addEventListener("input", validarTelefono);

codigoPostal.addEventListener("input", validarPostal);
matricula.addEventListener("input", validarMatricula);

comunidades.addEventListener("change", loadProvincias);
marcas.addEventListener("change", loadModelos);
nacimiento.addEventListener("change", validarFechaNacimiento);
sexo.addEventListener("change", validarSexo);

carnet.addEventListener("change", validarFechaCarnet);
matriculacion.addEventListener("change", validarFechaMatriculacion);
fichero.addEventListener("change", validarFichero);

submit.addEventListener("click", calcularSeguro);


// Comunidades y provincias siendo las comunidades el indice 0
const comunidadesYProvincias = [
  [
    "Andalucía",
    "Almería",
    "Cádiz",
    "Córdoba",
    "Granada",
    "Huelva",
    "Jaén",
    "Málaga",
    "Sevilla",
  ],
  ["Aragón", "Huesca", "Teruel", "Zaragoza"],
  ["Asturias", "Asturias"],
  ["Islas Baleares", "Islas Baleares"],
  ["Canarias", "Las Palmas", "Santa Cruz de Tenerife"],
  ["Cantabria", "Cantabria"],
  [
    "Castilla-La Mancha",
    "Albacete",
    "Ciudad Real",
    "Cuenca",
    "Guadalajara",
    "Toledo",
  ],
  [
    "Castilla y León",
    "Ávila",
    "Burgos",
    "León",
    "Palencia",
    "Salamanca",
    "Segovia",
    "Soria",
    "Valladolid",
    "Zamora",
  ],
  ["Cataluña", "Barcelona", "Girona", "Lleida", "Tarragona"],
  ["Extremadura", "Badajoz", "Cáceres"],
  ["Galicia", "A Coruña", "Lugo", "Ourense", "Pontevedra"],
  ["Comunidad de Madrid", "Madrid"],
  ["Región de Murcia", "Murcia"],
  ["Comunidad Foral de Navarra", "Navarra"],
  ["La Rioja", "La Rioja"],
  ["País Vasco", "Álava", "Guipúzcoa", "Vizcaya"],
  ["Comunidad Valenciana", "Alicante", "Castellón", "Valencia"],
  ["Ceuta", "Ceuta"],
  ["Melilla", "Melilla"],
];


// Marcas y modelos siendo marcas el indice 0
const marcasYModelos = [
  ["Audi", "A3", "A4", "A6", "Q5", "Q7"],
  ["BMW", "Serie 1", "Serie 3", "Serie 5", "X3", "X5"],
  ["Chevrolet", "Spark", "Malibu", "Camaro", "Equinox", "Traverse"],
  ["Citroën", "C1", "C3", "C4", "C5", "Berlingo"],
  ["Fiat", "500", "Panda", "Tipo", "Punto", "Doblò"],
  ["Ford", "Fiesta", "Focus", "Mustang", "Escape", "Explorer"],
  ["Honda", "Civic", "Accord", "CR-V", "HR-V", "Jazz"],
  ["Hyundai", "i10", "i20", "i30", "Kona", "Tucson"],
  ["Jaguar", "XE", "XF", "XJ", "F-Pace", "E-Type"],
  ["Jeep", "Renegade", "Compass", "Cherokee", "Wrangler", "Gladiator"],
  ["Kia", "Picanto", "Rio", "Ceed", "Sportage", "Sorento"],
  ["Land Rover", "Defender", "Discovery", "Range Rover", "Evoque", "Velar"],
  ["Lexus", "IS", "ES", "GS", "RX", "NX"],
  ["Mazda", "Mazda2", "Mazda3", "Mazda6", "CX-3", "CX-5"],
  ["Mercedes-Benz", "A-Class", "C-Class", "E-Class", "S-Class", "GLE"],
  ["Mitsubishi", "Mirage", "Lancer", "Outlander", "Pajero", "Eclipse"],
  ["Nissan", "Micra", "Juke", "Qashqai", "X-Trail", "Leaf"],
  ["Peugeot", "208", "308", "508", "2008", "3008"],
  ["Renault", "Clio", "Mégane", "Scénic", "Kadjar", "Zoe"],
  ["SEAT", "Ibiza", "León", "Ateca", "Arona", "Tarraco"],
  ["Škoda", "Fabia", "Octavia", "Superb", "Karoq", "Kodiaq"],
  ["Subaru", "Impreza", "Legacy", "Outback", "Forester", "Ascent"],
  ["Suzuki", "Swift", "Baleno", "Vitara", "Jimny", "SX4"],
  ["Tesla", "Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
  ["Toyota", "Corolla", "Camry", "RAV4", "Highlander", "Prius"],
  ["Volkswagen", "Golf", "Polo", "Passat", "Tiguan", "Touareg"],
  ["Volvo", "XC40", "XC60", "XC90", "S60", "V60"],
];

loadMarcas();
loadModelos();
loadComunidades();
loadProvincias();

let comprobacion = false;

function validar() {
  if (
    validarNombre() &&
    validarApellidos() &&
    validarDNI() &&
    validarEmail() &&
    validarTelefono() &&
    validarPostal() &&
    validarFechaCarnet() &&
    validarMatricula() &&
    validarFechaMatriculacion() &&
    validarFechaNacimiento() &&
    validarSexo() &&
    validarComundiades() &&
    validarProvincia() &&
    validarMarca() &&
    validarModelo() &&
    validarSeguro() &&
    validarVehiculo() &&
    validarTerminos()
  ) {
    comprobacion = true;
  }
  return comprobacion;
}

function validarNombre() {
  nombre.value.trim();

  if (
    nombre.value.match(/\d|\s/) ||
    nombre.value === "" ||
    nombre.value.length > 30
  ) {
    nombre.setAttribute(
      "title",
      "Error el nombre no puede contener números, espacios y no puede ser mayor a 30 caracteres."
    );
    nombre.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    nombre.removeAttribute("title");
    nombre.style.background = "";
    return true;
  }
}

function validarApellidos() {
  apll.value.trim();

  if (apll.value.match(/\d/) || apll.value === "" || apll.value.length > 30) {
    apll.setAttribute(
      "title",
      "Error Los Apellidos no pueden contener números, espacios y no puede ser mayor a 30 caracteres."
    );
    apll.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    apll.removeAttribute("title");
    apll.style.background = "";
    return true;
  }
}

function validarDNI() {
  if (!dni.value.match("^[0-9]{8}[A-z]$")) {
    dni.setAttribute(
      "title",
      "Error el DNI debe tener 8 números y una letra mayúscula."
    );
    dni.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    dni.removeAttribute("title");
    dni.style.background = "";
    return true;
  }
}

function validarEmail() {
  if (
    !email.value.match(
      "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
    )
  ) {
    email.setAttribute(
      "title",
      "Error el DNI debe tener 8 números y una letra mayúscula."
    );
    email.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    email.removeAttribute("title");
    email.style.background = "";
    return true;
  }
}

function validarTelefono() {
  if (!telefono.value.match("[0-9]{9}") || telefono.value.length > 9) {
    telefono.setAttribute(
      "title",
      "Error el telefono debe contener 9 caracteres."
    );
    telefono.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    telefono.removeAttribute("title");
    telefono.style.background = "";

    return true;
  }
}

function validarPostal() {
  if (!codigoPostal.value.match("[0-9]{5}") || codigoPostal.value > 52999) {
    codigoPostal.setAttribute(
      "title",
      "Error el codigo postal no puede ser mayor a 52999"
    );
    codigoPostal.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    codigoPostal.removeAttribute("title");
    codigoPostal.style.background = "";
    return true;
  }
}

let edad;

function validarFechaNacimiento() {
  const fechaNacimiento = nacimiento.value;
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const fechaActual = new Date();

  edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  let mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();

  if (mes > 0 || fechaActual.getDate() < fechaNacimientoDate.getDate()) {
    edad--;
  }

  if (edad < 18 && edad < 99) {
    nacimiento.setAttribute(
      "title",
      "Error no podemos aseguras a una persona menor de 18 años"
    );
    nacimiento.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    nacimiento.removeAttribute("title");
    nacimiento.style.background = "";
    return true;
  }
}

function validarMatricula() {
  if (
    !matricula.value.match("^[0-9]{1,4}[BCDFGHJKLMNPRSTVWXYZ]{3}") ||
    matricula.value.length > 7
  ) {
    matricula.setAttribute("title", "Error la matricula no es correcta");
    matricula.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    matricula.removeAttribute("title");
    matricula.style.background = "";
    return true;
  }
}

let añosCoche;

function validarFechaMatriculacion() {
  const fechaMatriculacion = matriculacion.value;
  const fechaMatriculacionDate = new Date(fechaMatriculacion);
  const fechaActual = new Date();

  añosCoche = fechaMatriculacionDate.getFullYear() - fechaActual.getFullYear();

  if (
    (fechaMatriculacionDate.getDate() > fechaActual.getDate() &&
      fechaMatriculacionDate.getFullYear() > fechaActual.getFullYear()) ||
    fechaMatriculacionDate.getFullYear() > fechaActual.getFullYear() ||
    fechaMatriculacionDate.getFullYear() < 1920
  ) {
    matriculacion.setAttribute(
      "title",
      "Error la fecha de matriculación no puede ser menos a 1920 ni posterior a la actual"
    );
    matriculacion.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    matriculacion.removeAttribute("title");
    matriculacion.style.background = "";
    return true;
  }
}

let añosCarnet;

function validarFechaCarnet() {
  const fechaCarnet = carnet.value;
  const fechaCarnetDate = new Date(fechaCarnet);
  const fechaActual = new Date();

  if (
    (fechaCarnetDate.getDate() > fechaActual.getDate() &&
      fechaCarnetDate.getFullYear() > fechaActual.getFullYear()) ||
    fechaCarnetDate.getFullYear() > fechaActual.getFullYear() ||
    fechaCarnetDate.getFullYear() < 1942
  ) {
    carnet.setAttribute(
      "title",
      "Error tu fecha de carnet es posterior a la fecha de hoy"
    );
    carnet.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    carnet.removeAttribute("title");
    carnet.style.background = "";

    añosCarnet = fechaActual.getFullYear() - fechaCarnetDate.getFullYear();
    return true;
  }
}

function validarSexo() {
  if (sexo.value == "") {
    sexo.setAttribute("title", "Error el campo de sexo no puede quedar vacío");
    sexo.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    sexo.removeAttribute("title");
    sexo.style.background = "";
    return true;
  }
}

function validarComundiades() {
  if (comunidades.value == "-1") {
    comunidades.setAttribute(
      "title",
      "Error el campo de comunidades no puede quedar vacío"
    );
    comunidades.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    comunidades.removeAttribute("title");
    comunidades.style.background = "";
    return true;
  }
}

function validarProvincia() {
  if (provincia.value == "-1") {
    provincia.setAttribute(
      "title",
      "Error el campo de provincias no puede quedar vacío"
    );
    provincia.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    provincia.removeAttribute("title");
    provincia.style.background = "";
    return true;
  }
}

function validarMarca() {
  if (marcas.value == "-1") {
    marcas.setAttribute(
      "title",
      "Error el campo de marcas no puede quedar vacío"
    );
    marcas.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    marcas.removeAttribute("title");
    marcas.style.background = "";
    return true;
  }
}

function validarModelo() {
  if (modelo.value == "-1") {
    modelo.setAttribute(
      "title",
      "Error el campo de modelo no puede quedar vacío"
    );
    modelo.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    modelo.removeAttribute("title");
    modelo.style.background = "";
    return true;
  }
}

function validarSeguro() {
  if (seguro.value == "") {
    seguro.setAttribute(
      "title",
      "Error el campo de modelo no puede quedar vacío"
    );
    seguro.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    seguro.removeAttribute("title");
    seguro.style.background = "";
    return true;
  }
}

function validarVehiculo() {
  if (vehiculo.value == "") {
    vehiculo.setAttribute(
      "title",
      "Error el campo de modelo no puede quedar vacío"
    );
    vehiculo.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    vehiculo.removeAttribute("title");
    vehiculo.style.background = "";
    return true;
  }
}

function validarFichero() {
  if (!fichero.value.match(/\.(jpg)$/)) {
    fichero.setAttribute("title", "Error la extensión del archivo no es jpg");
    fichero.style.background = "rgba(255, 0, 0, 0.56)";
    return false;
  } else {
    fichero.removeAttribute("title");
    fichero.style.background = "";
    return true;
  }
}

let error = document.createElement("p");
function validarTerminos() {
  if (!terminos.checked) {
    error.style.background = "rgba(255, 0, 0, 0.56)";
    error.style.width = "25%";
    error.textContent = "Error Debes acceptar los terminos y condiciones";
    error.id = "error";
    form.insertBefore(error, terminos);
    return false;
  } else {
    if (document.getElementById("error")) {
      document.getElementById("error").remove();
    }
    return true;
  }
}

function loadComunidades() {
  for (let i = 0; i < comunidadesYProvincias.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = comunidadesYProvincias[i][0];
    comunidades.appendChild(option);
  }
}

function loadProvincias() {
  provincia.innerHTML = "";
  let valCom;
  if (comunidades.value >= 0) {
    valCom = comunidades.value;
    provincia.style.display = "";
    provincias.style.display = "";
    for (let i = 1; i < comunidadesYProvincias[valCom].length; i++) {
      const option = document.createElement("option");
      option.value = comunidadesYProvincias[valCom][i]
        .toLowerCase()
        .replace(/ /g, "_");
      option.textContent = comunidadesYProvincias[valCom][i];
      provincia.appendChild(option);
    }
  } else {
    document.getElementById("provincias").style.display = "none";
    provincia.style.display = "none";
  }
}

function loadMarcas() {
  for (let i = 0; i < marcasYModelos.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = marcasYModelos[i][0];
    marcas.appendChild(option);
  }
}

function loadModelos() {
  modelo.innerHTML = "";
  document.getElementById("ModeloID").style.display = "none";
  let valCom;
  if (marcas.value >= 0) {
    valCom = marcas.value;
    modelo.style.display = "";
    document.getElementById("ModeloID").style.display = "";
    for (let i = 1; i < marcasYModelos[valCom].length; i++) {
      const option = document.createElement("option");
      option.value = marcasYModelos[valCom][i].toLowerCase().replace(/ /g, "_");
      option.textContent = marcasYModelos[valCom][i];
      modelo.appendChild(option);
    }
  } else {
    document.getElementById("Modelo").style.display = "none";
    modelo.style.display = "none";
  }
}

// 500, 650, 750, 1000

const baseTerceros = 500;
const baseTercerosAmpliados = 650;
const baseFranquicia = 750;
const baseTodoRiesgo = 1000;

let tiposSeguro = [
  "Terceros",
  "Terceros Ampliado",
  "Franquiciado",
  "Todo Riesgo",
];
let precios;

function calcularSeguro(event) {
  event.preventDefault();

  validar();

  let resTerceros = baseTerceros;
  let resTercerosAmp = baseTercerosAmpliados;
  let resFranquicia = baseFranquicia;
  let resTodoRiesgo = baseTodoRiesgo;

  if (edad < 25 && edad > 18) {
    resTerceros += (baseTerceros * 10) / 100;
    resTercerosAmp += (baseTercerosAmpliados * 10) / 100;
    resFranquicia += (baseFranquicia * 10) / 100;
    resTodoRiesgo += (baseTodoRiesgo * 10) / 100;
  }
  if (añosCarnet > 5) {
    resTerceros -= (baseTerceros * 10) / 100;
    resTercerosAmp -= (baseTercerosAmpliados * 10) / 100;
    resFranquicia -= (baseFranquicia * 10) / 100;
    resTodoRiesgo -= (baseTodoRiesgo * 10) / 100;
  }

  // 20%, 15%, 5%, 0%

  switch (vehiculo.value) {
    case "Diesel":
      resTerceros += (baseTerceros * 20) / 100;
      resTercerosAmp += (baseTercerosAmpliados * 20) / 100;
      resFranquicia += (baseFranquicia * 20) / 100;
      resTodoRiesgo += (baseTodoRiesgo * 20) / 100;
      break;
    case "Gasolina":
      resTerceros += (baseTerceros * 15) / 100;
      resTercerosAmp += (baseTercerosAmpliados * 15) / 100;
      resFranquicia += (baseFranquicia * 15) / 100;
      resTodoRiesgo += (baseTodoRiesgo * 15) / 100;
      break;
    case "Hibrido":
      resTerceros += (baseTerceros * 5) / 100;
      resTercerosAmp += (baseTercerosAmpliados * 5) / 100;
      resFranquicia += (baseFranquicia * 5) / 100;
      resTodoRiesgo += (baseTodoRiesgo * 5) / 100;
      break;
  }

  if (añosCoche > 10) {
    resTerceros += (baseTerceros * 1) / 100;
    resTercerosAmp += (baseTercerosAmpliados * 1) / 100;
    resFranquicia += (baseFranquicia * 1) / 100;
    resTodoRiesgo += (baseTodoRiesgo * 1) / 100;
  }

  precios = [resTerceros, resTercerosAmp, resFranquicia, resTodoRiesgo];

  if (comprobacion) {
    loadSeguros();
  }
}

const cartas = document.getElementById("cards");
let indice = 0;

let segValue = ["Terceros", "Terceros-2", "Franquicia", "TodoRiesgo"];

function loadSeguros() {
  if (indice < 4) {
    for (let i = indice; i < 4; i++) {
      indice++;
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let precio = document.createElement("h4");
      let accept = document.createElement("button");
      let deny = document.createElement("button");
      accept.id = i;
      accept.textContent = "Contratar";
      accept.addEventListener("click", () => {
        alert(
          "Gracias por contratar. Atentamente tu asesor de seguros Rafel Amengual Tomás"
        );
      });

      deny.id = i;
      deny.value = i;
      deny.textContent = "Borrar";
      deny.addEventListener("click", borraCarta);

      if (seguro.value == segValue[i]) {
        div.className = "carta-S";
      } else {
        div.className = "carta";
      }

      precio.id = i;
      precio.textContent = "Precio: " + precios[i] + " €";

      h3.textContent = tiposSeguro[i];
      h3.id = i;

      div.id = i;
      div.appendChild(h3);
      div.appendChild(precio);
      div.appendChild(accept);
      div.appendChild(deny);
      cartas.appendChild(div);
    }
  }
}

function borraCarta(event) {
  if (event.target.tagName == "BUTTON") {
    let buttonId = event.target.id;

    document.getElementById(buttonId).remove();
    indice--;
  }
}
