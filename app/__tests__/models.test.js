const { getAllBooks } = require('../graphql/models')

test('it returns correct books', () => {
    expect(getAllBooks()).toMatchSnapshot()
})