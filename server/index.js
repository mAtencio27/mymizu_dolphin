require("dotenv").config();
const app = require('./server');
const db = require("./knex");

const PORT = process.env.API_PORT || 3000;

(async () => {
    try {
        console.log("Running migrations");
        await db.migrate.latest();

        console.log("Starting express");
        app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
    }
    catch (err) {
        console.error("Error starting app!", err);
        process.exit(-1);
    }
})()