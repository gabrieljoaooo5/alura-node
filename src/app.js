import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js"

db.on("error", console.log.bind(console, 'connection error'))
db.once("open", () => {
  console.log('database connection successful')
})

const app = express();

app.use(express.json())

// const books = [
//   {id: 1, "title": "Harry Potter 1"},
//   {id: 2, "title": "Harry Potter 2"}
// ]

app.get('/', (req, res) => {
    res.status(200).send('Node course');
})

app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books)
    })
})  

app.get('/books/:id', (req, res) => {
  let index = searchBook(req.params.id);
  res.json(books[index]);
})

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Book was registered successfully')
})

app.put('/books/:id', (req, res) => {
  let index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
})

app.delete('/books/:id', (req, res) => {
  let {id} = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  res.send(`Book ${id} removed successfully`);
})


function searchBook(id) {
  return books.findIndex(book => book.id == id)
}

export default app