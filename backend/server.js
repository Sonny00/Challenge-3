const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(
      `Serveur Fastify en cours d'exécution sur le port ${
        fastify.server.address().port
      }`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
