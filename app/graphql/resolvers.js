// Import data sources
const { getAllBooks } = require('./models')

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: getAllBooks,
  },
};

module.exports = {
  resolvers
}