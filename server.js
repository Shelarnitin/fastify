require("dotenv").config();
import path from "path";
const fastify = require("fastify")({logger: true})
import fastifyEnv from "@fastify/env";
import { type } from "os";


// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
});


const start = async () => {
    try {
        await fastify.listen({port: process.env.PORT})
        fastify.log.info(
            `Server is Running at http://localhost:${process.env.PORT}`
        )
    } catch (error) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();