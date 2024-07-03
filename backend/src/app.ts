import articleRoutes from "./Articles/routes/articleRoutes";

const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();
const port = process.env.PORT || 8000

require('dotenv').config()

app.use(express.json());
app.use(cors(corsOptions));

app.use("/articles", articleRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected'))
    .catch((error: any) => console.error(error)) 

app.listen(port, () => {
    console.log("server started on port 8000");
});
