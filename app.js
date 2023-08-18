const express = require('express');
// const morgan = require('morgan');
// express app
const app = express();

app.listen(3000);

// register to view engine
app.set('view engine', 'ejs');

// middleware and static files
// app.use(express.static('public'));
// app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.render('index', { title: 'Homepage' });
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About us' });
});

app.get('/contact', (req, res) => {
	res.render('contact-me', { title: 'About us' });
});

app.use((req, res) => {
	res.status(404).render('404', { title: 'ERROR' });
});
