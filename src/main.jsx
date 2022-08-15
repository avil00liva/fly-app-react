import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {DataContext} from "./context/Context"
import "./style.css";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <DataContext>
    <App />
  </DataContext>
);
