/**
 *
 * @param {HTMLInputElement} input - El elemento HTML que se quiere validar.
 * @returns
 */
export const actualizarMensajeErrorContraseña = (input) => {
	// Objeto con mensajes de error para el campo de contraseña.
	const mensajes = {
		longitud: 'La contraseña debe tener entre 8 y 16 caracteres.',
		mayuscula: 'La contraseña debe incluir al menos una letra mayúscula.',
		minuscula: 'La contraseña debe incluir al menos una letra minúscula.',
		numero: 'La contraseña debe contener al menos un número.',
	};
	// Selecciona el elemento HTML donde se mostrará el mensaje de error.
	const mensajeErrorHTML = document.querySelector('.formulario_error_contraseña');
	// Inicializa la variable mensajeError a un string vacío.
	let mensajeError = '';
	// Si el campo de contraseña está vacío, se retorna.
	if (input.value === '') return;
	// Si el campo de contraseña no cumple con alguna de las expresiones regulares,
	// se asigna el mensaje de error correspondiente a la variable mensajeError.
	if (input.value.length < 8 || input.value.length > 16) {
		mensajeError = mensajes.longitud;
	}
	if (!/[A-Z]/.test(input.value)) {
		mensajeError = mensajes.mayuscula;
	}
	if (!/[a-z]/.test(input.value)) {
		mensajeError = mensajes.minuscula;
	}
	if (!/\d/.test(input.value)) {
		mensajeError = mensajes.numero;
	}
	// Se muestra el mensaje de error en el HTML.
	if (mensajeError) {
		mensajeErrorHTML.textContent = mensajeError;
	}
};
