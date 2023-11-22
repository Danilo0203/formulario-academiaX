(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
	new MutationObserver((r) => {
		for (const a of r) if (a.type === 'childList') for (const s of a.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && o(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(r) {
		const a = {};
		return (
			r.integrity && (a.integrity = r.integrity),
			r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === 'use-credentials' ? (a.credentials = 'include') : r.crossOrigin === 'anonymous' ? (a.credentials = 'omit') : (a.credentials = 'same-origin'),
			a
		);
	}
	function o(r) {
		if (r.ep) return;
		r.ep = !0;
		const a = n(r);
		fetch(r.href, a);
	}
})();
const l = (e) => {
		const t = {
				longitud: 'La contraseña debe tener entre 8 y 16 caracteres.',
				mayuscula: 'La contraseña debe incluir al menos una letra mayúscula.',
				minuscula: 'La contraseña debe incluir al menos una letra minúscula.',
				numero: 'La contraseña debe contener al menos un número.',
			},
			n = document.querySelector('.formulario_error_contraseña');
		let o = '';
		e.value !== '' &&
			((e.value.length < 8 || e.value.length > 16) && (o = t.longitud),
			/[A-Z]/.test(e.value) || (o = t.mayuscula),
			/[a-z]/.test(e.value) || (o = t.minuscula),
			/\d/.test(e.value) || (o = t.numero),
			o && (n.textContent = o));
	},
	i = (e) => {
		const t = {
				nombre: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/,
				apellido: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/,
				correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
				contraseña: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
			},
			n = e.id,
			o = t[n] ? t[n].test(e.value) : !0;
		if ((o ? document.getElementById(n).classList.remove('error_input') : document.getElementById(n).classList.add('error_input'), e.id === 'contraseña' && l(e), e.id === 'contraseña_confirmar')) {
			const r = document.getElementById('contraseña').value,
				a = e.value;
			r !== a ? document.getElementById('contraseña_confirmar').classList.add('error_input') : document.getElementById('contraseña_confirmar').classList.remove('error_input');
		}
		return o;
	},
	u = () => {
		const e = document.querySelectorAll('input');
		let t = !0;
		return (
			e.forEach((n) => {
				i(n) ? n.classList.remove('error_input') : (n.classList.add('error_input'), (t = !1));
			}),
			t
		);
	},
	c = document.getElementById('formulario_contenedor'),
	d = document.querySelector('.mensaje_registro');
c.addEventListener('keyup', (e) => {
	if ((i(e.target), e.target.id === 'contraseña')) {
		const t = document.getElementById('contraseña_confirmar');
		i(t);
	}
}),
	c.addEventListener('submit', (e) => {
		e.preventDefault(), u() && (d.classList.remove('hidden'), c.closest('article').classList.add('hidden'));
	});
