const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });


  server.route(routes);
  await server.start();
  console.log(`Server started at ${server.info.uri}`);
};

init();