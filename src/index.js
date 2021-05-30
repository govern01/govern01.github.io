import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// https://web.dev/prerender-with-react-snap/
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<StrictApp />, rootElement);
} else {
  ReactDOM.render(<StrictApp />, rootElement);
}