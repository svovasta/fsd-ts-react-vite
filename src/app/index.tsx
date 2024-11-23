import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

const reactRoot = createRoot(document.getElementById('root')!);

reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
