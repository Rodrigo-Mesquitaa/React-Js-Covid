import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se quiser que seu aplicativo funcione offline e carregue mais rápido, você pode alterar
// cancele o registro () para registrar () abaixo. Observe que isso vem com algumas armadilhas.
// Saiba mais sobre service workers: https://bit.ly/CRA-PWA.
serviceWorker.register();