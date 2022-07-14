const express = require ("express");

const mongoose = require("mongoose")



const app = express()



// MONGOOSE

mongoose.connect("mongodb://localhost:27017/genshinDB")

const userSchema = new mongoose.Schema({
    username: String,
    password:String,
})
const daysScehma = new mongoose.Schema ({
  day: String
})

const characterSchema = new mongoose.Schema({
  name: String,
  vision:String,
  talentBooks: String,
  image: String
})

const talentbookSchema = new mongoose.Schema({
    name: String,
    characters: [characterSchema],
    talent_book_image: String,
    days_active: [String]
})






const User = mongoose.model("User", userSchema)
const Character = mongoose.model("Character", characterSchema)
const Book = mongoose.model("Book", talentbookSchema)
const Day = mongoose.model("Day", daysScehma)



app.set("view engine", "ejs")
app.use(express.static("public"))


app.get("/",(req,res) => {
    res.send("hi")
})


app.listen(process.env.PORT||3000,(req,res) => {
    console.log("Server is running!");
})