import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Nav';
import Background from './components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />
    <Nav />
    {/*Introduire routing ici, une route par catégorie puis une route par article*/}
  </React.StrictMode>
);
