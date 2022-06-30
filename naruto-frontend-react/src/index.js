import React from 'react';
import ReactDOM from 'react-dom';
// GlobalStyle de styled components
import { GlobalStyle } from './components';
import { App } from './pages';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
