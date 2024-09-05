const express = require('express');
const app = express();
const PORT = 3000;

// In-memory database of books
const books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publication_year: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', publication_year: 1949 },
  { id: 3, title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', publication_year: 1945 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction', publication_year: 1813 },
  { id: 5, title: 'Green Eggs and Ham', author: 'Dr. Seuss', genre: "Children's literature", publication_year: 1960 },
];

// Function to fetch all books
const fetchAllBooks = () => books;

// Function to fetch books by a specific author
const fetchBooksByAuthor = (author) => books.filter(book => book.author.toLowerCase() === author.toLowerCase());

// Function to fetch books by a specific genre
const fetchBooksByGenre = (genre) => books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());

// Function to fetch books by a specific publication year
const fetchBooksByPublicationYear = (year) => books.filter(book => book.publication_year === year);

// Endpoint to fetch all books
app.get('/books', (req, res) => {
  res.json({ books: fetchAllBooks() });
});

// Endpoint to fetch books by author
app.get('/books/author/:author', (req, res) => {
  const author = req.params.author;
  const result = fetchBooksByAuthor(author);
  res.json({ books: result });
});

// Endpoint to fetch books by genre
app.get('/books/genre/:genre', (req, res) => {
  const genre = req.params.genre;
  const result = fetchBooksByGenre(genre);
  res.json({ books: result });
});

// Endpoint to fetch books by publication year
app.get('/books/publication_year/:year', (req, res) => {
  const year = parseInt(req.params.year);
  const result = fetchBooksByPublicationYear(year);
  res.json({ books: result });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});