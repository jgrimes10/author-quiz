import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Continue from './components/Continue';
import Turn from './components/Turn';
import Hero from './components/Hero';
import Footer from './components/Footer';

const AuthorQuiz = ({turnData, highlight, onAnswerSelected}) => {
    return (
      <div className="container-fluid">
          <Hero/>
          <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
          <Continue/>
          <Footer/>
      </div>
    );
};

export default AuthorQuiz;
