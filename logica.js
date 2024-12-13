// Captar boton submit
let submit = document.getElementById("sub");
let form = document.getElementById("formulario");



let name = document.getElementById("name");
let apll = document.getElementById("apll");
let dni = document.getElementById("dni");

let email = document.getElementById("email");
let telefono = document.getElementById("phone");

let sexo = document.getElementById("Sexo");
let comunidades = document.getElementById("comunidades");
let provincia = document.getElementById("provincia");
let marcas = document.getElementById("Marca");
let modelo = document.getElementById("Modelo");
let nacimiento = document.getElementById("nacimiento");

let carnet = document.getElementById("carnet");
let matricula = document.getElementById("matricula");
let matriculacion = document.getElementById("matriculacion");


let codigoPostal = document.getElementById("postal");

name.addEventListener("input", validarNombre);
apll.addEventListener("input", validarApellidos);
dni.addEventListener("input", validarDNI);
email.addEventListener("input" , validarEmail);
telefono.addEventListener("input", validarTelefono);

codigoPostal.addEventListener("input" ,validarPostal);
matricula.addEventListener("input" , validarMatricula);

comunidades.addEventListener("change",loadProvincias);
marcas.addEventListener("change",loadModelos);
nacimiento.addEventListener("change", validarFechaNacimiento);
carnet.addEventListener("change", validarFechaCarnet);
matriculacion.addEventListener("change", validarFechaMatriculacion);

const comunidadesYProvincias = [
    ["Andalucía", "Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"],
    ["Aragón", "Huesca", "Teruel", "Zaragoza"],
    ["Asturias", "Asturias"],
    ["Islas Baleares", "Islas Baleares"],
    ["Canarias", "Las Palmas", "Santa Cruz de Tenerife"],
    ["Cantabria", "Cantabria"],
    ["Castilla-La Mancha", "Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"],
    ["Castilla y León", "Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"],
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
    ["Melilla", "Melilla"]
  ];
  
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
    ["Volvo", "XC40", "XC60", "XC90", "S60", "V60"]
  ];
  

  loadMarcas();
  loadModelos();
  loadComunidades();
  loadProvincias();

  

function validarNombre(){
    event.preventDefault();
    name.value.trim();
        
    if(name.value.match(/\d|\s/) || name.value === "" || name.value.length > 30){
        name.setAttribute("title","Error el nombre no puede contener números, espacios y no puede ser mayor a 30 caracteres.")
        name.style.border = "4px solid red";
        name.style.color = "red";
        return false;
    }else{
        name.removeAttribute("title")
        name.style.border = "";
        return true;
    }
    
}


function validarApellidos(){
    event.preventDefault();
    apll.value.trim();
        
    if(apll.value.match(/\d/) || apll.value === "" || apll.value.length > 30){
        apll.setAttribute("title","Error Los Apellidos no pueden contener números, espacios y no puede ser mayor a 30 caracteres.")
        apll.style.border = "4px solid red";
        return false;
    }else{
        apll.removeAttribute("title")
        apll.style.border = "";
        return true;
    }
    
}


function validarDNI(){

    if(!dni.value.match("^[0-9]{8}[A-z]$")){
        dni.setAttribute("title","Error el DNI debe tener 8 números y una letra mayúscula.");
        dni.style.border = "4px solid red";
        return false;
    }else{
        dni.removeAttribute("title");
        dni.style.border = "";
        return true;
    }

}


function validarEmail(){
    if(!email.value.match("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")){
        email.setAttribute("title","Error el DNI debe tener 8 números y una letra mayúscula.");
        email.style.border = "4px solid red";
        return false;
    }else{
        email.removeAttribute("title");
        email.style.border = "";
        return true;
    }
}

function validarTelefono(){
   
    if(!telefono.value.match("[0-9]{9}") || telefono.value.length > 9 ){
        telefono.setAttribute("title","Error el telefono debe contener 9 caracteres.");
        telefono.style.border = "4px solid red";
        return false;
    }else{
        telefono.removeAttribute("title");
        telefono.style.border = "";
        return true;
    }
}


function validarPostal(){
    if(!codigoPostal.value.match("[0-9]{5}") || codigoPostal.value > 52999 ){
        codigoPostal.setAttribute("title","Error el codigo postal no puede ser mayor a 52999");
        codigoPostal.style.border = "4px solid red";
        return false;
    }else{
        codigoPostal.removeAttribute("title");
        codigoPostal.style.border = "";
        return true;
    }
}


function validarFechaNacimiento(){
    const fechaNacimiento = nacimiento.value;
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date(); 

    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();

    if(mes > 0 || (fechaActual.getDate() < fechaNacimientoDate.getDate())){
        edad--;
    }

    if(edad < 18 && edad < 99){
        nacimiento.setAttribute("title","Error no podemos aseguras a una persona menor de 18 años");
        nacimiento.style.border = "4px solid red";
    }else{
        nacimiento.removeAttribute("title");
        nacimiento.style.border = "";
    }
    
}


function validarMatricula(){
    

    if(!matricula.value.match("^[0-9]{1,4}[BCDFGHJKLMNPRSTVWXYZ]{3}") ){
        matricula.setAttribute("title","Error la matricula no es correcta");
        matricula.style.border = "4px solid red";
        return false;
    }else{
        matricula.removeAttribute("title");
        matricula.style.border = "";
        return true;
    }
}

function validarFechaMatriculacion(){
    const fechaMatriculacion = matriculacion.value;
    const fechaMatriculacionDate = new Date(fechaMatriculacion);
    const fechaActual = new Date();

    if(fechaMatriculacionDate.getDate() > fechaActual.getDate() || fechaMatriculacionDate.getFullYear > fechaActual.getFullYear() || fechaMatriculacionDate.getFullYear() < 1920){
        matriculacion.setAttribute("title","Error la fecha de matriculación no puede ser menos a 1920 ni posterior a la actual");
        matriculacion.style.border = "4px solid red";
    }else{
        matriculacion.removeAttribute("title");
        matriculacion.style.border = "";   
    }
}


function validarFechaCarnet(){
    const fechaCarnet = carnet.value;
    const fechaCarnetDate = new Date(fechaCarnet);
    const fechaActual = new Date();


    if(fechaCarnetDate.getDate() > fechaActual.getDate() || fechaCarnetDate.getFullYear > fechaActual.getFullYear() || fechaCarnetDate.getFullYear() < 1942){
        carnet.setAttribute("title","Error tu fecha de carnet es posterior a la fecha de hoy");
        carnet.style.border = "4px solid red";
    }else{
        carnet.removeAttribute("title");
        carnet.style.border = "";   
    }
}


function loadComunidades(){

    for(let i = 0; i < comunidadesYProvincias.length ; i++){
        const option = document.createElement('option'); 
        option.value = i; 
        option.textContent = comunidadesYProvincias[i][0]; 
        comunidades.appendChild(option);
    }
}




function loadProvincias(){
    provincia.innerHTML ="";
    let valCom;
    if(comunidades.value >= 0){
        valCom = comunidades.value;
        provincia.style.display = "";
        provincias.style.display = ""; 
    for (let i = 1; i < comunidadesYProvincias[valCom].length; i++) { 
        
        const option = document.createElement('option'); 
        option.value = comunidadesYProvincias[valCom][i].toLowerCase().replace(/ /g, '_'); 
        option.textContent = comunidadesYProvincias[valCom][i];
        provincia.appendChild(option); 
    }
    }else{
        document.getElementById("provincias").style.display = "none";
        provincia.style.display = "none";
    }


}



function loadMarcas(){
    for(let i = 0; i < marcasYModelos.length ; i++){
        const option = document.createElement('option'); 
        option.value = i; 
        option.textContent = marcasYModelos[i][0]; 
        marcas.appendChild(option);
    }
}




function loadModelos(){
    modelo.innerHTML ="";
    let valCom;
    if(marcas.value >= 0){
        valCom = marcas.value;
        modelo.style.display = "";
            
    for (let i = 1; i < marcasYModelos[valCom].length; i++) { 
        
        const option = document.createElement('option'); 
        option.value = marcasYModelos[valCom][i].toLowerCase().replace(/ /g, '_'); 
        option.textContent = marcasYModelos[valCom][i];
        modelo.appendChild(option); 
    }
    }else{
        document.getElementById("Modelo").style.display = "none";
        modelo.style.display = "none";
    }
}