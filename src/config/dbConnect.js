import mongoose from "mongoose"

mongoose.connect("mongodb+srv://gabrieljoao5:123@alura.tevmcix.mongodb.net");

let db = mongoose.connection;

export default db;