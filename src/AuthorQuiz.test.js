import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const state = {
    turnData: {
        books: ['The Shining', 'It', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet'],
        author: {
            name: 'Charles Dickens',
            imageUrl: 'charlesdickens.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Copperfield', 'A Tale of Two Cities']
        }
    },
    highlight: 'none'
};

describe('Author Quiz', function () {
    it('should render without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>, div);
    });

    describe('When no answer has been selected', function () {
        let wrapper;
        beforeAll(() => {
            wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>)
        });

        it('should have no background color', function () {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('');
        });
    });

    describe('When the incorrect answer has been selected', function () {
        let wrapper;

        beforeAll(() => {
            wrapper = mount(<AuthorQuiz {...(Object.assign({}, state, {highlight: 'incorrect'}))} onAnswerSelected={()=>{}}/>)
        });

        it('should have a red background color', function () {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('#FF5252');
        });
    });

    describe('When the correct answer has been selected', function () {
        let wrapper;

        beforeAll(() => {
            wrapper = mount(<AuthorQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={()=>{}}/>)
        });

        it('should have a green background color', function () {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('#388E3C');
        });
    });

    describe('When the first answer is selected', function () {
        let wrapper;
        const handleAnswerSelected = jest.fn();
        beforeAll(() => {
            wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected}/>);
            wrapper.find('.answer').first().simulate('click');
        });

        it('should call onAnswerSelected', function () {
            expect(handleAnswerSelected).toHaveBeenCalled();
        });

        it('should receive The Shining', function () {
            expect(handleAnswerSelected).toHaveBeenCalledWith('The Shining');
        });
    });
});