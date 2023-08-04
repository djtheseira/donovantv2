import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const rootContainer = document.getElementById("root");
  const root = createRoot(rootContainer);
  root.unmount();
});