const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();


const webDivRoutes = require('./routes/webDivs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`App listening on port ${3000}!`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Web<Div>',
        documentTitle: 'Web<Div>',
        subTitle: 'It\'s the web in a div!'
    });
});

app.use('/webDivs', webDivRoutes);

app.get('*', function(req, res) {
    res.status(404).send({message: '404 - THE WEBPAGE DOES NOT exist'});
});