const express = require("express");
const expressConfig = require("./config/express");
const routesConfig = require('./config/routes');

async function start() {
    const app = express();
    const port = 3000;
    
    expressConfig(app);
    routesConfig(app);
    app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });
}

start();

