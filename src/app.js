const express = require('express');
const funciones = require('./funciones');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers/helpers');

// Path
const dirPublic = path.join(__dirname, '../public')
const dirViews = path.join(__dirname, '../template/views')
const dirPartials = path.join(__dirname, '../template/partials')

// Static
app.use(express.static(dirPublic))

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }))

// hbs
app.set('view engine', 'hbs');
app.set('views', dirViews);
hbs.registerPartials(dirPartials)

// Paginas
app.get('/', (req, res) => {
	res.render('index', {
		titulo: 'Inicio'
	});
});

app.get('/crearCurso', (req, res) => {
	res.render('crearCurso', {
		titulo: 'Crear curso'
	})
})

app.post('/crearCurso', (req, res) => {
	res.render('crearCurso', {
		titulo: 'Crear curso',
		idcurso: parseInt(req.body.idcurso),
		nombre: req.body.nombre,
		modalidad: req.body.modalidad,
		valor: req.body.valor,
		intencidad: req.body.intencidad,
		descripcion: req.body.descripcion
	})
})

app.get('/verCursos', (req, res) => {
	res.render('listaCurso', {
		titulo: 'Lista de cursos'
	})
})

app.post('/verCursos', (req, res) => {
	res.render('listaCurso', {
		titulo: 'Lista de cursos',
		estado: req.body.estado
	})
})

app.post('/actualizar', (req, res) => {
	res.render('actualizar', {
		titulo: 'Modificar',
		nCurso: req.body.nCurso
	})
})

app.get('/inscribir', (req, res) => {
	res.render('inscribir', {
		titulo: 'Inscribir'
	});
});

app.post('/inscribir', (req, res) => {
	res.render('inscribir', {
		titulo: 'Inscribir',
		documento: parseInt(req.body.documento),
		nombre: req.body.nombre,
		correo: req.body.correo,
		telefono: req.body.telefono,
		nomCurso: req.body.nomCurso
	});
});

app.get('/verInscritos', (req, res) => {
	res.render('listainscritos', {
		titulo: 'Lista de cursos'
	})
})
app.get('*', (req, res) => {
	res.render('error', {
		titulo: 'Error'
	});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('servidoren elpuerto ' + port);
});