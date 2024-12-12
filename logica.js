// Captar boton submit
let submit = document.getElementById("sub");
let form = document.getElementById("formulario");

let error;


let name = document.getElementById("name");
let apll = document.getElementById("apll");



submit.addEventListener("click",validador);


function validador(){
    if(validarNombre()){
        form.removeChild(errorNombre);
    }
    
}    


function validarNombre(){
    event.preventDefault();
    let errorNombre = document.createElement("p");
    errorNombre.style.color = "red";

        
    if(name.value.match(/\d|\s/) || name.value === ""){
        errorNombre.textContent = "El nombre no puede ser vacío, ni contener espacios o números.";
        form.insertBefore(errorNombre,name);
        return false;
    }else if(name.value.length > 30){
        errorNombre.textContent = "El nombre no puede tener mas de 30 caracteres.";
        form.insertBefore(errorNombre,name);
        return false;
    }
    


    return true;
}


function validarApellidos(){
    event.preventDefault();
    error = document.createElement("p");
    error.style.color = "red";
    if(apll.value.match(/\d|\s/) || apll.value === ""){
        error.textContent = "Los apellidos no puede ser vacío, ni contener espacios o números.";
        return false;
    }else if(apll.value.length > 30){
        error.textContent = "Los apellidos no puede tener mas de 30 caracteres.";
        return false;
    }


    return true;
}
/*function validarApellidos(){
    event.preventDefault();
    error = document.createElement("p");
    error.style.color = "red";

    if(apll.value.match(/\d|\s/) || apll.value === ""){
        error.textContent = "El apellido no puede ser vacío, ni contener espacios o números."
        form.insertBefore(error,apll);
    }

}*/
