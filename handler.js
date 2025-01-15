const { nanoid } = require('nanoid');
const books = require('./books');

const getALlBooksHandler = () => ({
  status: 'success',
  data: {
    "books": books
  }
});

/**
 *
 * @param request
 * @param h : object yang digunakan untuk menghandle response ke client
 * @returns {Promise<void>}
 */
const addBooksHandler = async (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (name === null || name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();

  books.push({
    id, name, year, author, summary, publisher, pageCount, reading, finished, insertedAt, updatedAt
  });

  const exist = books.filter((book) => book.id === id).length > 0;

  if (exist) {
    return h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        'bookId': id
      }
    }).status(200);
  }

  const response = h.response({
    status: 'fail',
    message: 'Error',
  });

  response.status(400);
  return response;
};

module.exports = { getALlBooksHandler, addBooksHandler };