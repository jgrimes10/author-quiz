import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import Continue from './components/Continue';
import Turn from './components/Turn';
import Hero from './components/Hero';
import Footer from './components/Footer';

const AuthorQuiz = ({turnData, highlight, onAnswerSelected, onContinue}) => {
    return (
      <div className="container-fluid">
          <Hero/>
          <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
          <Continue show={highlight === 'correct'} onContinue={onContinue}/>
          <p><Link to='/add'>Add an Author</Link></p>
          <Footer/>
      </div>
    );
};

export default AuthorQuiz;
