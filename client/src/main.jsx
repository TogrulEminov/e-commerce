import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import AppContext from './utils/context.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
);
