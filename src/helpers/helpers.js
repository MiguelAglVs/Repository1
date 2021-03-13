const hbs = require('hbs');
const funciones = require('./../funciones');

hbs.registerHelper('crearCurso', (idcurso, nombre, modalidad, valor, intencidad, descripcion) => {
	if (idcurso) {
		let cur = {
			idcurso: idcurso,
			nombre: nombre,
			modalidad: modalidad,
			valor: valor,
			intencidad: intencidad,
			descripcion: descripcion,
			estado: 'disponible'
		}
		return funciones.crear(cur)
	}
})

hbs.registerHelper('listar', () => {
	try {
		return funciones.listar()
	} catch (err) {
		return 'No hay cursos por mostar'
	}
})
hbs.registerHelper('listar2', () => {
	try {
		return funciones.listar2()
	} catch (err) {
		return 'No hay cursos por mostar'
	}
})
hbs.registerHelper('mostarcur', () => {
	try {
		return funciones.listaCursos()
	} catch (err) {
		return 'No hay cursos disponibles'
	}
})

hbs.registerHelper('verCurso', (nCurso) => {
	return funciones.verCurso(nCurso)
})//creat cursos

hbs.registerHelper('inscribir', (documento, nombre, correo, telefono, nomCurso) => {
	if (documento) {
		let insc = {
			documento: documento,
			nombre: nombre,
			correo: correo,
			telefono: telefono,
			nomCurso: nomCurso
		}
		return funciones.inscribir(insc)
	}
})

hbs.registerHelper('listarInscritos', () => {
	try {
		return funciones.listarIns()
	} catch (err) {
		return 'No hay inscritos por mostar'
	}
})

hbs.registerHelper('mostarLista', () => {
	try {
		return funciones.listarCursos()
	} catch (err) {
		return 'No hay cursos disponibles'
	}
})
