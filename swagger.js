const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Shopping App api",
            description: "Shopping App api information",
            servers: ['http://localhost:3000']
        },
    },
    apis: ['./routes/**/*.js'],
};

module.exports = swaggerJsdoc(options);