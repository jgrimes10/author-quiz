import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './components/AddAuthorForm';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'The Adventures of Huckleberry Finn',
            'Life on the Mississippi',
            'Roughing It'
        ]
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'A Christmas Carol',
            'Oliver Twist',
            'David Copperfield',
            'Bleak House'
        ]
    },
    {
        name: 'George R. R. Martin',
        imageUrl: 'georgerrmartin.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'A Song of Ice and Fire',
            'A Game of Thrones',
            'A Dance with Dragons',
            'A Clash of Kings',
            'A Storm of Swords',
            'A Feast for Crows'
        ]
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Fantastic Beasts and Where to Find Them',
            'Harry Potter and the Prizoner of Azkaban',
            'Harry Potter and the Sorcerer\'s Stone'
        ]
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Victory',
            'Nostromo',
            'Heart of Darkness',
            'The Secret Agent'
        ]
    },
    {
        name: 'Stephen King',
        imageUrl: 'stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'The Stand',
            'It',
            'The Shining',
            'Salem\'s Lot',
            '11/22/63',
            'The Green Mile'
        ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            'Hamlet',
            'Romeo and Juliet',
            'Macbeth',
            'Julius Caesar',
            'Much Ado About Nothing'
        ]
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer))
    }
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'incorrect';
    render();
}

const state = {
    turnData: getTurnData(authors),
    highlight: ''
};

function App() {
    return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>;
}

function AuthorWrapper() {
    return <AddAuthorForm onAddAuthor={console.log}/>;
}

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path='/' component={App}/>
                <Route path='/add' component={AuthorWrapper}/>
            </React.Fragment>
        </BrowserRouter>, document.getElementById('root'));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();