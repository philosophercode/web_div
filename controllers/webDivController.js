const WebDiv = require('../models/webDiv');

const controller = {};

controller.index = (req, res) => {
    WebDiv.findAll()
        .then(webDivs => {
            res.render('webDivs/webDivs-index', {
                documentTitle: 'Web<Div>!',
                webDivsData: webDivs,
            });
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

controller.show = (req, res) => {
    WebDiv.findById(req.params.id)
        .then(webDiv => {
            res.render('webDivs/webDivs-single', {
                documentTitle: 'Web<Div> VIEW',
                webDiv: webDiv,
            });
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

// controller.findByCategory = (req, res) => {
//     WebDiv.findByCategory(category)
//         .then(webDivs => {
//             res.render('webDivs/webDivs-index', {
//                 documentTitle: 'Web<Div>',
//                 webDivsData: webDivs,
//             });
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// };

controller.create = (req, res) => {
    WebDiv.create({
        websitetitle: req.body.websitetitle,
        urls: req.body.urls,
        categories_id: req.body.categories_id,
        descriptiontext: req.body.descriptiontext,
    })
    .then(webDiv => {
        res.redirect('/webDivs');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};


controller.edit = (req, res) => {
    WebDiv.findById(req.params.id)
        .then(webDiv => {
            console.log(`webDiv: ${webDiv}`);
            res.render('webDivs/webDivs-edit', {
                documentTitle: 'Web<Div> EDIT',
                webDiv: webDiv,
                id: req.params.id,
            });
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

controller.update = (req, res) => {
    WebDiv.update({
        websitetitle: req.body.websitetitle,
        urls: req.body.urls,
        categories_id: req.body.categories_id,
        descriptiontext: req.body.descriptiontext,
    }, req.params.id)
    .then(webDiv => {
        res.redirect('/webDivs');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

controller.destroy = (req, res) => {
    WebDiv.destroy(req.params.id)
        .then(() => {
            res.redirect('/webDivs')
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

module.exports = controller;