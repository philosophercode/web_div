const db = require('../db/config');
require('isomorphic-fetch');
const Urlbox = require("urlbox");

const WebDiv = {};

WebDiv.findAll = () => {
    
    // webDivUrls = () => {
    //     db.query(`SELECT array_agg(urls) FROM webdivs;`)
    //         .then(console.log(res)
    // }

    // console.log('webDivUrls', webDivUrls);
    // for (let i = 0; i < webDivUrls.length; i++) {
    //     let urlIndex = webDiv[i];
        
    //     const urlbox = Urlbox('5KDUGdjzRzTPdtOD', 'a6cd29146b5c430eb7c8c06ecf316b67');
        
    //     const options = {
    //         url: webDiv.urls,
    //         thumb_width: 700,
    //         format: 'png',
    //         full_page: true
    //     }

    //     const imgUrl = urlbox.buildUrl(options);
        
    //     db.none(
    //         `
    //             UPDATE webdivs SET
    //             urlphoto = $1
    //             WHERE id = $2
    //         `,
    //         [imgUrl, id]
    //     );
    // }

    return db.query(`SELECT * FROM webdivs ORDER BY id ASC`);
};

WebDiv.findById = id => {
    return db.oneOrNone(`SELECT * FROM webdivs WHERE id = $1`, [id])
};

WebDiv.findByCategory = category => {
    return db.query(`SELECT * FROM webdivs WHERE category = Reference`, [category])
};

WebDiv.create = webDiv => {
    
    // https://urlbox.io/docs
    
    // const urlbox = require('urlbox');

    // Get your API key and secret from urlbox.io
    const urlbox = Urlbox('5KDUGdjzRzTPdtOD', 'a6cd29146b5c430eb7c8c06ecf316b67');

    // See all urlbox screenshot options at urlbox.io/docs
    const options = {
        url: webDiv.urls,
        thumb_width: 700,
        format: 'png',
        full_page: true
    }

    const imgUrl = urlbox.buildUrl(options);

    return db.one(
        `
            INSERT INTO webdivs
            (websitetitle, urls, categories_id, descriptiontext, urlphoto)
            VALUES ($1, $2, $3, $4, $5) RETURNING *
        `,
        [webDiv.websitetitle, webDiv.urls, webDiv.categories_id, webDiv.descriptiontext, imgUrl]
    );
};

WebDiv.update = (webDiv, id) => {
    return db.none(
        `
            UPDATE webdivs SET
            websitetitle = $1,
            urls = $2,
            categories_id = $3,
            descriptiontext = $4
            WHERE id = $5
        `,
        [webDiv.websitetitle, webDiv.urls, webDiv.categories_id, webDiv.descriptiontext, id]
    )
};

WebDiv.destroy = id => {
    return db.none(
        `
        DELETE FROM webdivs
        WHERE id = $1
        `,
        [id]
    );
};


function creatScreenshots(webDiv) {
    // https://urlbox.io/docs
    const urlbox = Urlbox('5KDUGdjzRzTPdtOD', 'a6cd29146b5c430eb7c8c06ecf316b67');

    // See all urlbox screenshot options at urlbox.io/docs
    const options = {
        url: webDiv.urls,
        thumb_width: 700,
        format: 'png',
        full_page: true
    }

    const imgUrl = urlbox.buildUrl(options);

    return db.one(
        `
            INSERT INTO webdivs
            (urlphoto)
            VALUES ($1) RETURNING *
        `,
        [imgUrl]);

};

module.exports = WebDiv;