const { getALlBooksHandler } = require('./handler');
const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getALlBooksHandler
  }
];

module.exports = routes;