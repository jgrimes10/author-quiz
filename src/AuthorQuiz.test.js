import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

function Hello(props) {
    return <h1>Hello at {props.now}</h1>
}

const moment = new Date();

describe('When testing directly', function () {
    let result;
    beforeAll(() => {
        result = Hello({now: moment.toISOString()})
    });

    it('should return a value', function () {
        expect(result).not.toBeNull();
    });

    it('should be an h1', function () {
        expect(result.type).toBe('h1');
    });

    it('should have children', function () {
        expect(result.props.children).toBeTruthy();
    });
});

describe('When testing with ReactDOM', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AuthorQuiz/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});