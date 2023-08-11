import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StricMode do React ajuda a gente a previnir erro ao escrever codigo, com codigo de warning se tiver criando possiveis estrutura de repeticao infinita etc

  // ele faz um rerender por debaixo dos panos só para ter ctz que tudo esta certo. mas só em ambiente de dev
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
