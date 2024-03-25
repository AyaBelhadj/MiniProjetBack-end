const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = { swaggerDefinition: 
    { openapi: '3.0.0',
     info: { version: "1.0.0", title: "ISSAT ++ project", description: "Réaliser par Aya - Amal - Majdi - Amir", 
     contact: { name: "Aya - Amal - Majdi - AMir" }, 
     servers: ["http://localhost:3000"] }, 
     components: { securitySchemes: 
        { auth: { type: "http", name: 'Authorization', scheme: "bearer", in: "header", }, } },
         security: [ { auth: [] } ] }, 
         apis: ["./src/swagger/**/*.js",] };
          const swaggerDocs = swaggerJsDoc(swaggerOptions);
           module.exports = swaggerDocs
