import React from 'react'
import App from './app';
import {createRoot} from "react-dom";
import './styles/_index.scss'

const root = createRoot(document.getElementById('root'));
root.render(<App />);