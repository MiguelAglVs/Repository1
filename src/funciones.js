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
	let texto = '<select name="nCurso" class="form-control"><option selected disabled>--SELECIONAR--</option>';
	listadoCursos.forEach(cur => {
		texto = `${texto} <option value='${cur.idcurso}'>${cur.idcurso} - ${cur.nombre}</option>`
	})
	texto = texto + '</select>'
	return texto
}

const verCurso = (nCurso) =>{
	listadoCursos = require('./Cursos.json')
	let encontar = listadoCursos.find(buscar => buscar.id == nCurso)
	if(encontar){
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			No existe un curso con el id ${encontar.idcurso}
			<button type="button"
			class="btn-close" data-bs-dismiss="alert"
			aria-label="Close"></button></div>`
	}
	return texto
}

const actualizar = (idcurso, nombre, modalidad, valor, intencidad, descripcion) => {
	cargar()
	let encontar = listadoCursos.find(buscar => buscar.idcurso == idcurso)
	if (!encontar) {
		console.log('no existeel curso')
	} else
		if (encontar.estado == 'dispnible') {
			encontar.estado = 'Cerrado'
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

const listarCursos = () => {
	listadoCursos = require('./Cursos.json')
	let texto = '<select name="nomCurso" class="form-control"><option selected disabled>--SELECIONAR--</option>';
	listadoCursos.forEach(cur => {
		texto = `${texto} <option value='${cur.nombre}'>${cur.nombre}</option>`
	})
	texto = texto + '</select>'
	return texto
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