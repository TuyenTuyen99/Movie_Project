import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import TopNavigation from './components/TopNavigation/TopNavigation';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNavigation />
    <App />
  </React.StrictMode>
);
