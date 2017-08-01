const express = require('express');
const controller = require('../controllers/webDivController');
const webDivHelpers = require('../services/webDivs/webDivHelpers.js');

const webDivRoutes = express.Router();


webDivRoutes.get('/', webDivHelpers.hello, controller.index);
webDivRoutes.get('/add', (req, res) => {
    res.render('webDivs/webDivs-add', {
        documentTitle: 'Web<Div> ADD',
    });
});

webDivRoutes.get('/edit/:id', controller.edit);
webDivRoutes.get('/:id', controller.show);


webDivRoutes.post('/', controller.create);
webDivRoutes.put('/:id', controller.update);
webDivRoutes.delete('/:id', controller.destroy);

module.exports = webDivRoutes;
