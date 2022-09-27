const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const app = express();
const port = 3000;

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.listen(port, () => {console.log(`Server listening at port: ${port}`);})