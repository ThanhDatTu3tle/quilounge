import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import GlobalStyles from './layouts/GlobalStyles/GlobalStyles.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
)
