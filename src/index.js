import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { EventProvider } from './context/EventContext';

ReactDOM.render(
   <EventProvider>
      <App />
   </EventProvider>,
   document.getElementById('root')
);
