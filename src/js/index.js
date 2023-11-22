import { validarCampos } from './validaciones/validarCampos';
import { validarFormulario } from './validaciones/validarFormulario';
const formulario = document.getElementById('formulario_contenedor');
const mensaje = document.querySelector('.mensaje_registro');
(() => {
	formulario.addEventListener('keyup', (e) => {
		// Valida los campos del formulario mientras el usuario escribe en ellos.
		validarCampos(e.target);
		//Si el campo de contraseña se está validando, también se valida el campo de confirmación de contraseña.
		if (e.target.id === 'contraseña') {
			const confirmarContraseñaHtml = document.getElementById('contraseña_confirmar');
			// Llama a validarCampos para el campo de confirmación.
			validarCampos(confirmarContraseñaHtml);
		}
	});
	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
		// Valida los campos del formulario cuando el usuario hace click en el botón de registrarse.
		// Si el formulario devuelve true, se muestra el mensaje de registro exitoso.
		if (validarFormulario()) {
			mensaje.classList.remove('hidden');
			formulario.closest('article').classList.add('hidden');
		}
	});
})();
