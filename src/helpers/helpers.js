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
			estado: "Disponible"
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
		return '<select name="idcurso" class="form-control"><option selected disabled>No hay cursos disponibles</option></select>'
	}
})

hbs.registerHelper('buscar', (idcurso) => {
	return funciones.verCurso(idcurso)
})//crear cursos

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

hbs.registerHelper('mostarLista', (idcurso) => {
	try {
		return funciones.listarCursos(idcurso)
	} catch (err) {
		return '<select name="nomCurso" class="form-control"><option selected disabled>No hay cursos disponibles</option></select>'
	}
})

hbs.registerHelper('eliminar', (documento) => {
	return funciones.eliminar(parseInt(documento))
})
