import React from 'react'; // Usamos todo el paquete de React
import { render } from 'react-dom'; // Usamos solo el metodo de render
import StorePicker from './components/StorePicker';
import App from './components/App';
import Router from './components/Router';
import "./css/style.css";

render(<Router />, document.querySelector('#main')); // Usar <Algo /> es como abrir y cerrar <Algo></Algo>
