const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
require("dotenv").config();

const token = process.env.API_KEY

const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    origin: '*'
}));

app.get("/api/me", async (req, res, next) => {
    try {
        let rawdata = await axios.get("https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/me", config)
        res.json(rawdata.data);
    }
    catch (err) {
        res.sendStatus(404);
        console.error("Failed to connect to mymizu api", err)
    }
})

//Endpoints go here

module.exports = app;