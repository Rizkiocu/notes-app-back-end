const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
  } = require("./handler");
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
      method: 'GET', // Metode request yang digunakan (POST)
      path: '/notes', // URL yang digunakan (/notes)
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
   },
    
  ];
   
  module.exports = routes;