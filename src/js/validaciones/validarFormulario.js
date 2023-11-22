import { validarCampos } from './validarCampos';
/**
 *
 * @returns {boolean} - Devuelve true si el formulario es válido y false si no lo es.
 */
export const validarFormulario = () => {
	// Selecciona todos los inputs del formulario.
	const inputs = document.querySelectorAll('input');
	// Inicializa la variable FormularioValido a true.
	let FormularioValido = true;
	// Itera sobre cada input del formulario.
	inputs.forEach((input) => {
		// Valida cada input del formulario (true / false).
		const campoValido = validarCampos(input);
		// Si el campo no es válido, se agrega la clase error_input al input y se cambia el valor de FormularioValido a false.
		if (!campoValido) {
			input.classList.add('error_input');
			FormularioValido = false;
		} else {
			// Si el campo es válido, se remueve la clase error_input del input.
			input.classList.remove('error_input');
		}
	});
	return FormularioValido;
};
