const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const notFoundController = require('./controllers/notFoundController');

const app = express();
const port = 3000;

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));


app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);
app.use('/about', homeController);
//TODO attach all controllers


app.all('*', notFoundController);

app.listen(port, () => {console.log(`Server listening at port: ${port}`);})