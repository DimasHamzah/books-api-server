const { getALlBooksHandler, addBooksHandler } = require('./handler');
const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getALlBooksHandler
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler
  },
];

module.exports = routes;