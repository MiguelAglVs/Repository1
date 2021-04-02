const fs = require('fs');
listadoCursos = [];

const crear = (cursos) => {
	cargar()
	let duplicado = listadoCursos.find(buscar => buscar.idcurso == cursos.idcurso);
	if (duplicado) {
		texto = `<div class='alert alert-warning alert-dismissble
			fade show' role='alert'>
			Ya existe un curso de ${cursos.nombre} con el id ${cursos.idcurso}
			</div>`
	} else {
		listadoCursos.push(cursos)
		guardar()
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			El curso ${cursos.nombre} ha sido creado con éxito
			</div>`
	}
	return texto
}


const cargar = () => {
	try {
		listadoCursos = require('./../Cursos.json')
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
	listadoCursos = require('./../Cursos.json')
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
			'<td class="sta">' + cur.estado + '</td></tr>'
	});
	texto = texto + '<tbody><table>';
	return texto;
}
const listar2 = () => {
	listadoCursos = require('./../Cursos.json')
	let texto = "<div class='accordion'>";
	i = 1;
	listadoCursos.forEach(cur => {
		texto = texto +
			`<div class="card">
						<div class="card-header" id="heading${i}">
							<h5 class="mb-0">
								<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
									${cur.nombre}
								</button>
							</h5>
						</div>
						<div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
							<div class="card-body">
								<div class="table-responsive">
									<table class="table table-striped table-hover">
										<thead class="thead-color">
											<th>Id</th>
											<th>Nombre</th>
											<th>Modalidad</th>
											<th>Valor</th>
											<th>Intencidad</th>
											<th>Descripción</th>
											<th>Estado</th>
										</thead>
										<tbody>
											<tr>
												<td>${cur.idcurso}</td>
												<td> ${cur.nombre}</td>
												<td> ${cur.modalidad}</td>
												<td> ${cur.valor}</td>
												<td> ${cur.intencidad}</td>
												<td> ${cur.descripcion}</td>
												<td class="sta"> ${cur.estado}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>`
		i++;
	})
	texto = texto + '</div>';
	return texto;
}
const listaCursos = () => {
	listadoCursos = require('./../Cursos.json')
	let texto = '<select name="idcurso" class="form-control" required><option selected hidden>--SELECIONAR--</option>';
	listadoCursos.forEach(cur => {
		texto = `${texto} <option value='${cur.idcurso}'>${cur.idcurso} - ${cur.nombre}</option>`
	})
	texto = texto + '</select>'
	return texto
}

const verCurso = (idcurso) => {
	listadoCursos = require('./../Cursos.json')
	let encontrar = listadoCursos.find(buscar => buscar.id == idcurso)
	texto = ""
	if (encontrar.id == idcurso) {
		texto = texto +
			'<tr>' +
			'<td>' + encontrar.idcurso + '</td>' +
			'<td>' + encontrar.nombre + '</td>' +
			'<td>' + encontrar.modalidad + '</td>' +
			'<td>' + encontrar.valor + '</td>' +
			'<td>' + encontrar.intencidad + '</td>' +
			'<td>' + encontrar.descripcion + '</td>' +
			'<td class="sta">' + encontrar.estado + '</td></tr>'
		texto = texto + '<tbody><table>';
		return texto
	}
}


const actualizar = (idcurso, sta) => {
	listadoCursos = require('./../Cursos.json')
	let encontrar = listadoCursos.find(buscar => buscar.id == idcurso)
	if (!encontrar) {
		console.log('no existe el curso' + idcurso)
	} else {
		encontrar.estado = sta
		guardar()
	}
}//cursos

listaInscritos = [];
const inscribir = (inscritos) => {
	cargarIns()
	let duplicado = listaInscritos.find(buscar => buscar.documento == inscritos.documento);
	if (duplicado) {
		texto = `<div class='alert alert-warning alert-dismissble
			fade show' role='alert'>
			${inscritos.nombre} ya estas inscrito/a
			</div>`
	} else {
		listaInscritos.push(inscritos)
		guardarIns()
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			${inscritos.nombre} te has sido inscrito con éxito
			</div>`
	}
	return texto
}

const cargarIns = () => {
	try {
		listaInscritos = require('./../Inscritos.json')
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
	listadoCursos = require('./../Inscritos.json')
	let texto = ''
	listadoCursos.forEach(insc => {
		texto = texto +
			`<tr>
			<td>${insc.documento}</td>
			<td>${insc.nombre}</td>
			<td>${insc.correo}</td>
			<td>${insc.telefono}</td>
			<td>${insc.nomCurso}</td>
			<td><button type="submit" class="form-control btn btn-danger btn-sm" name="documento" value="${insc.documento}"><i class='fas fa-trash'></i></button></td></tr>`
	});
	texto = texto + '<tbody><table>';
	return texto;
}

const listarCursos = (idcurso) => {
	listadoCursos = require('./../Cursos.json')
	let encontrar = listadoCursos.find(buscar => buscar.id == idcurso)
	let texto = '<select name="nomCurso" class="form-control"><option selected disabled>--SELECIONAR--</option>';
	if (encontrar != 'disponible') {
		listadoCursos.forEach(encontrar => {
			texto = `${texto} <option value='${encontrar.nombre}'>${encontrar.nombre}</option>`
		})
		texto = texto + '</select>'
		return texto
	}
}

const eliminar = (documento) => {
	cargarIns()
	let nuevo = listaInscritos.filter(doc => doc.documento != documento)
	console.log(nuevo.length)
	console.log(listaInscritos.length)
	console.log(documento)
	console.log(nuevo)
	if (nuevo.length == listaInscritos.length) {
		texto = `<div class='alert alert-danger alert-dismissble
			fade show' role='alert'>
			No se encontro el documento ${documento}</div>`
	}
	else {
		listaInscritos = nuevo
		guardarIns()
		texto = `<div class='alert alert-success alert-dismissble
			fade show' role='alert'>
			ha eliminado el documento ${documento} </div>`
	}
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
