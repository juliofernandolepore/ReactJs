import React from 'react';
import ReactDOM  from 'react-dom/client';
import  {MiApp} from './PrimerComponente';

/* IMPORTO MI ARCHIVOS CSS */
import './estilos.css';


/* con el metodo getElement busco el id root o el que sea, y a ese lo renderizo a react, y le paso la funcionn al cuerpo del render */
ReactDOM.createRoot(document.getElementById('root')).render(
    /* este dom hace lo que un document.createElement.... */
        <reactStrictMode>
            <MiApp />        
        </reactStrictMode>
    );