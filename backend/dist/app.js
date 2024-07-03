"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const articleRoutes_1 = __importDefault(require("./Articles/routes/articleRoutes"));
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();
app.use(express.json());
app.use("/articles", articleRoutes_1.default);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected'))
    .catch((error) => console.error(error));
app.listen(port, () => {
    console.log("server started on port 8000");
});
