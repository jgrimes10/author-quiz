import React from 'react';
import '../styling/AddAuthorForm.css';
import '../bootstrap.min.css';
import { Link } from 'react-router-dom';

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAddBook() {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit} className='book-from'>
            <div className='AddAuthorForm__input'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='form-control' value={this.state.name} onChange={this.onFieldChange}/>
            </div>
            <div className='AddAuthorForm__input'>
                <label htmlFor='imageUrl'>Image URL</label>
                <input type='text' name='imageUrl' className='form-control' value={this.state.imageUrl} onChange={this.onFieldChange}/>
            </div>
            <div className='AddAuthorForm__input'>
                <label htmlFor='bookTemp'>Books</label>
                {this.state.books.map((book) => <p key={book}>{book}</p>)}
                <div className='input-group'>
                    <input type='text' name='bookTemp' className='form-control' value={this.state.bookTemp} onChange={this.onFieldChange}/>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button' onClick={this.handleAddBook}>Add Book</button>
                    </div>
                </div>
            </div>
            <input type='submit' value='Add' className='btn btn-primary'/>
            <Link to='/'>
                <button className='btn btn-outline-danger ml-4'>Cancel</button>
            </Link>
        </form>;
    }
}

const AddAuthorForm = ({match, onAddAuthor}) => {
    return (
        <div className='AddAuthorForm'>
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor}/>
        </div>
    );
};

export default AddAuthorForm;