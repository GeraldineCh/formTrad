function traductor() {
	
	var titulo = document.getElementById("form-signin-heading");
	var correo = document.getElementById("inputEmail");
	var contrasena = document.getElementById("inputPassword");
	var recordatorio = document.getElementsByTagName("span")[0];
	var boton = document.getElementsByClassName("btn")[0];

	titulo.innerHTML = "Iniciar sesión";
	correo.placeholder = "Correo electrónico";
	contrasena.placeholder = "Contraseña";
	recordatorio.innerHTML = "Recuérdame";
	boton.innerHTML = "Ingresar";
	}

	traductor();