const { getALlBooksHandler, addBooksHandler, getBookByIdHandler, deleteBookByIdHandler, editBookByIdHandler } = require('./handler');
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
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  },
  {
    method: 'UPDATE',
    path: '/books/{id}',
    handler: editBookByIdHandler
  }
];

module.exports = routes;