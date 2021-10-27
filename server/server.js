const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
const knex = require('./knex');
require("dotenv").config();
const path = require("path");

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
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

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

app.get("/api/milestones", async (req, res) => {
    const data =  await knex.select("*").from("Milestones");
    res.json(data);
});

app.get("/api/usermilestones/:id", async (req, res) => {
    const userId = req.params.id;
    const data = await knex("MilestoneUsers").where('UserId', userId)
    res.json(data);
});

app.post("/api/usermilestones", async (req, res) => {
    const userMilestone = req.body; // Needs to provide milestone Id and user Id 
    const data = await knex('MilestoneUsers').insert(userMilestone);
    res.json(data);
})

module.exports = app;