import classes from './AvailableBooks.module.css';

const DUMMY_BOOKS = [
    {
        id: 'b1',
        name: 'The Great Gatsby',
        description: 'A classic novel set in the Roaring Twenties.',
        price: 14.99,
    },
    {
        id: 'b2',
        name: 'To Kill a Mockingbird',
        description: 'A deeply moving story about justice and morality.',
        price: 12.50,
    },
    {
        id: 'b3',
        name: '1984',
        description: 'A compelling dystopian masterpiece.',
        price: 10.99,
    },
    {
        id: 'b4',
        name: 'Pride and Prejudice',
        description: 'A timeless romantic comedy of manners.',
        price: 15.99,
    },
];

const AvailableBooks = () => {
    const booksList = DUMMY_BOOKS.map((book) => (
        <li key={book.id}>{book.name}</li>
    ));

    return (
        <section className={classes.books}>
            <ul>{booksList}</ul>
        </section>
    );
};

export default AvailableBooks;