const express = require("express");
const mongoose = require("require");
const dotenv = require("dotenv");

if (fs.existsSync('.env')) {
    require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const connections = {}

const models = {}

const bankUserSchema = new mongoose.Schema({});

const getConnection = async (dbName) => { 
    console.log('getConnection called with dbName');
    
    if (!connections[dbName] = await mongoose.create
}

