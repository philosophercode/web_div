console.log('~main.js connected~~')


import {Urlbox} from 'urlbox';
// const urlbox = require('urlbox');

// Get your API key and secret from urlbox.io
const urlbox = Urlbox('', '');

// See all urlbox screenshot options at urlbox.io/docs
const options = {
  url: urlWebDiv,
  thumb_width: 450,
  format: 'png',
  full_page: true
}

const imgUrl = urlbox.buildUrl(options);
// https://api.urlbox.io/v1/5KDUGdjzRzTPdtOD/TOKEN/jpg?url=github.com&thumb_width=600&quality=80


console.log('options: ', options);

console.log('imgUrl: ', imgUrl);
