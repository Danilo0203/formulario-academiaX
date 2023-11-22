import { actualizarMensajeErrorContraseña } from './mensajeConstraseña';

/**
 *
 * @param {HTMLInputElement} input   - El elemento HTML que se quiere validar.
 * @returns {boolean} - Devuelve true si el campo es válido y false si no lo es.
 */
export const validarCampos = (input) => {
	// Objeto con expresiones regulares para validar los campos del formulario.
	const expresiones = {
		nombre: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/,
		apellido: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/,
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		contraseña: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
	};
	// Selecciona el id de input que se quiere validar.
	const tipo = input.id;
	// Valida el input con la expresión regular correspondiente.
	const campoValido = expresiones[tipo] ? expresiones[tipo].test(input.value) : true;
	// Si el campo no es válido, se agrega la clase error_input al input.
	// Si el campo es válido, se remueve la clase error_input del input.
	if (!campoValido) {
		document.getElementById(tipo).classList.add('error_input');
	} else {
		document.getElementById(tipo).classList.remove('error_input');
	}
	// Si el campo de contraseña se está validando, se llama a actualizarMensajeErrorContraseña.
	if (input.id === 'contraseña') {
		actualizarMensajeErrorContraseña(input);
	}
	// Si el campo de confirmación de contraseña se está validando, se compara su valor con el valor del campo de contraseña.
	if (input.id === 'contraseña_confirmar') {
		const contraseña = document.getElementById('contraseña').value;
		const confirmacion = input.value;
		// Si los valores son diferentes, se agrega la clase error_input al input.
		if (contraseña !== confirmacion) {
			document.getElementById('contraseña_confirmar').classList.add('error_input');
		} else {
			// Si los valores son iguales, se remueve la clase error_input del input.
			document.getElementById('contraseña_confirmar').classList.remove('error_input');
		}
	}
	return campoValido;
};
