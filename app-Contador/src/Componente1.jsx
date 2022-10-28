/*  mi primer componente que son funciones en realidad y necesito 
exportarlo (tengo que declarar el export adelante de la funcion) para 
que pueda ser importado en main.jsx */
import { Fragment } from "react";

export function App(){    
    return (
        <Fragment>
            <h1>hola mundo en primera linea</h1> ,
             <p>trabajando con un parrafo en segunda linea</p>
        </Fragment>);
        /* esta es la sintaxis equivalenter mas actual de fragment
         return (
        <>
            <h1>hola mundo en primera linea</h1> ,
            <p>trabajando con un parrafo en segunda linea</p>
        </>);
        */
}

export default App;


