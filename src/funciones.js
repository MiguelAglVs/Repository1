const fs = require('fs');
listadoCursos = [];

const crear = (cursos) => {
	cargar()
	let duplicado = listadoCursos.find(buscar => buscar.idcurso == cursos.idcurso);
	if (duplicado) {
		texto = `<div class='alert alert-warning alert-dismissble
			fade show' role='alert'>
			Ya existe un curso de ${cursos.nombre} con el id ${cursos.idcurso}
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	} else {
		listadoCursos.push(cursos)
		guardar()
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			El curso ${cursos.nombre} ha sido creado con éxito
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	}
	return texto
}


const cargar = () => {
	try {
		listadoCursos = require('./Cursos.json')
	} catch (err) {
		listadoCursos = []
	}
}

const guardar = () => {
	let datos = JSON.stringify(listadoCursos);
	fs.writeFile('Cursos.json', datos, (err) => {
		if (err) throw (err);
		console.log('Archivo fue creado con éxito');
	})
}
const listar = () => {
	listadoCursos = require('./Cursos.json')
	let texto = ''
	listadoCursos.forEach(cur => {
		texto = texto +
			'<tr>' +
			'<td>' + cur.idcurso + '</td>' +
			'<td>' + cur.nombre + '</td>' +
			'<td>' + cur.modalidad + '</td>' +
			'<td>' + cur.valor + '</td>' +
			'<td>' + cur.intencidad + '</td>' +
			'<td>' + cur.descripcion + '</td>' +
			'<td>' + cur.estado + '</td></tr>'
	});
	texto = texto + '<tbody><table>';
	return texto;
}
const listar2 = () => {
	listadoCursos = require('./Cursos.json')
	let texto = ''
	listadoCursos.forEach(cur => {
		texto = texto +
			'<tr>' +
			'<td>' + cur.idcurso + '</td>' +
			'<td>' + cur.nombre + '</td>' +
			'<td>' + cur.modalidad + '</td>' +
			'<td>' + cur.valor + '</td>' +
			'<td>' + cur.intencidad + '</td>' +
			'<td>' + cur.descripcion + '</td>' +
			'<td>' + cur.estado + '</td></tr>'
	});
	texto = texto + '<tbody><table>';
	return texto;
}

const listaCursos = () => {
	listadoCursos = require('./Cursos.json')
	let texto = '<select name="idcurso" class="form-control"><option selected disabled>--SELECIONAR--</option>';
	listadoCursos.forEach(cur => {
		texto = `${texto} <option value='${cur.idcurso}'>${cur.idcurso} - ${cur.nombre}</option>`
	})
	texto = texto + '</select>'
	return texto
}

const verCurso = (idcurso) => {
	listadoCursos = require('./Cursos.json')
	let encontrar = listadoCursos.find(buscar => buscar.id == idcurso)
	texto = ""
	if (encontrar) {
		texto = texto +
			'<tr>' +
			'<td>' + encontrar.idcurso + '</td>' +
			'<td>' + encontrar.nombre + '</td>' +
			'<td>' + encontrar.modalidad + '</td>' +
			'<td>' + encontrar.valor + '</td>' +
			'<td>' + encontrar.intencidad + '</td>' +
			'<td>' + encontrar.descripcion + '</td>' +
			'<td>' + encontrar.estado + '</td></tr>'
		texto = texto + '<tbody><table>';
		return texto
	}
}


const actualizar = (idcurso, sta) => {
	listadoCursos = require('./Cursos.json')
	let encontrar = listadoCursos.find(buscar => buscar.id == idcurso)
	if (!encontrar) {
		console.log('no existe el curso' + idcurso)
	} else {
		encontrar.estado = sta
		guardar()
	}
}

const eliminar = (dell) => {
	cargar()
	let nuevo = listaClientes.filter(dell => dell.idcurso != idcurso)
	if (nuevo.length == listadoCursos.length) {
		texto = `<div class='alert alert-danger alert-dismissble
			fade show' role='alert'>
			No existe un curs ocon el id ${dell.idcurso}
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	}
	else {
		listadoCursos = nuevo
		guardar()
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			${dell.idcurso} se ha eliminado
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	}
	return eliminar
} //cursos

listaInscritos = [];
const inscribir = (inscritos) => {
	cargarIns()
	let duplicado = listaInscritos.find(buscar => buscar.documento == inscritos.documento);
	if (duplicado) {
		texto = `<div class='alert alert-warning alert-dismissble
			fade show' role='alert'>
			${inscritos.nombre} ya estas inscrito/a
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	} else {
		listaInscritos.push(inscritos)
		guardarIns()
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			${inscritos.nombre} te has sido inscrito con éxito
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	}
	return texto
}

const cargarIns = () => {
	try {
		listaInscritos = require('./Inscritos.json')
	} catch (err) {
		listaInscritos = []
	}
}

const guardarIns = () => {
	let datos = JSON.stringify(listaInscritos);
	fs.writeFile('Inscritos.json', datos, (err) => {
		if (err) throw (err);
		console.log('Archivo fue creado con éxito');
	})
}

const listarIns = () => {
	listadoCursos = require('./Inscritos.json')
	let texto = ''
	listadoCursos.forEach(insc => {
		texto = texto +
			'<tr>' +
			'<td>' + insc.documento + '</td>' +
			'<td>' + insc.nombre + '</td>' +
			'<td>' + insc.correo + '</td>' +
			'<td>' + insc.telefono + '</td>' +
			'<td>' + insc.nomCurso + '</td></tr>'
	});
	texto = texto + '<tbody><table>';
	return texto;
}

const listarCursos = (estado) => {
	listadoCursos = require('./Cursos.json')
	let encontrar = listadoCursos.find(buscar => buscar.sta == estado)
	let texto = '<select name="nomCurso" class="form-control"><option selected disabled>--SELECIONAR--</option>';
	if (encontrar != 'cerrado') {
		listadoCursos.forEach(cur => {
			texto = `${texto} <option value='${cur.idcurso}'>${cur.nombre}</option>`
		})
		texto = texto + '</select>'
		return texto
	}
}

module.exports = {
	crear,
	listar,
	verCurso,
	listar2,
	listaCursos,
	inscribir,
	listarIns,
	listarCursos,
	actualizar,
	eliminar
}
