const express = require("express");
const mongoose = require("mongoose");
const logger = reuire("morgan");



const PORT = process.env.PORT || 3000;


const app = express();




app.use(logger("dev"));
app.use(express.urlencoded({ extened: true}));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONOGODB_URI || "mongodb://localhost/workout")



app.listen(PORT, () => {
    console.log("Now running on port 3000")
})