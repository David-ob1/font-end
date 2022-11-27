
function validar() {
	var nombre, apellido ,correo ,usuario, clave, telefono, expresion;

	nombre = document.getElementById('nombre').value;
	apellidos = document.getElementById('apellidos').value;
	correo = document.getElementById('correo').value;
	usuario = document.getElementById('usuario').value;
	clave = document.getElementById('clave').value;
	telefono = document.getElementById('telefono').value;

	expresion = /\w+@\w\.+[a-z]/;

	if(nombre === "" || apellidos === "" || correo === "" ||usuario ==="" || clave ==="" || telefono ===""){
		
		alert("todos los campos son obligatorios");
		return false;


	}
		// validacion nombre
	else if(nombre.length>30) {
		alert("el nombre es muy largo");
		return false;
	}

	else if(apellidos.length>80) {
		alert("los apellidos son muy largos");
		return false;
	}

	// validacion de correo
	else if(correo.length>30) {
		alert("el correo es muy largo");
		return false;
	}
	else if(!expresion.test(correo)){

		alert("el correo no es valido");
		return false;
	}

	
	// validacion de usuario
	else if(usuario.length>20 || clave>20) {
		alert("el usuario y la clave solo deben tener 20 caracteres maximo");
		return false;
	}

	
// validacion de telefono
	else if(nombre.length>10) {
		alert("el telefono es muy largo");
		return false;
	}

	else if(isNaN(telefono)) {
		alert("el telefono ingresado no es un numero");
		return false;
	}


}