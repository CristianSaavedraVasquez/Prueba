const path = require('path');
const bodyParser  = require('body-parser');
const express = require('express');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');

const app = express();

const http = require("http");
const server = http.Server(app);

app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 80);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => console.log('server on port 3000'));