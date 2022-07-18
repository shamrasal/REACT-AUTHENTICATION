import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthContexProvider from './components/Store/AuthContex-provider';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContexProvider>
);
