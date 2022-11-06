import React from 'react';
import ReactDOM  from 'react-dom/client';
import  {MiApp} from './PrimerComponente';

/* IMPORTO MI ARCHIVOS CSS */
import './estilos.css';


/* con el metodo getElement busco el id base o el que sea (root), y a ese lo renderizo a react, y le paso la funcionn al cuerpo del render */
ReactDOM.createRoot(document.getElementById('Base')).render(
    /* este dom hace lo que un document.createElement.... */
    /* este es el padre que le mande las props a los hijos (funcional components) */
        <reactStrictMode>
            <MiApp titulo= "bienvenido a mi componente"  
                altura ={183} 
    /* si aqui uso llaves puedo pasarle numeros aunque me pida string el proptype */ 
                />        
        </reactStrictMode>
    );