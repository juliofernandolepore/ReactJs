/* *****************************      PRIMER COMPONENTE DE REACT JS    ****************************************  */
import PropTypes from 'prop-types';

/*  mi primer componente esta compuesto de funciones, en este caso una Funcion flecha dentro de una constante.
dentro del return (en vez de usar div (para encerrar h1 y p como un nodo padre), uso la sintaxis  <> </> que equivale al fragment ) */
let nuevoMensaje = "me llamo fernando, y soy una constante en {} dentro del h2";
let numero = 123;
let miArreglo = [1,2,3,4,5,6,7,8];
let nuevoObjeto = { mensaje: "hola desde objeto.atributo ", titulo: "soy otro objeto.atributo "};
let sumaSimple = (a,b) => { return a + b } /* FUNCIONES ASINCRONAS NO PERMITIDAS */

export const MiApp = ( {titulo, altura} /* aqui se produce una desestructuracion del objeto */ ) => { 
    /* es necesario export para que la funcion pueda ser importado en main.jsx */
    /*  IMPORTANTE: La primera letra del componente funcional o functional component va en MAYUSCULA (Pascal Case) */     
    return (
        <>
        <h1>{ 1 + 5 /* aqui puedo pasar una expresion de js entre llaves */}</h1> ,
        <h2>{nuevoMensaje}</h2>
        <p>{titulo}</p>
        <p>{altura}</p>        
        <p>{numero}</p>
        <p>{miArreglo}</p>
        <p>{nuevoObjeto.mensaje /* ACA SOLO SE RENDERIZAN ARREGLOS U objetos.atributo */}</p>
        <p>{nuevoObjeto.titulo /* la sintaxis permite el paso de objeto.atributo */}</p>
        <p>{ JSON.stringify(nuevoObjeto) /* en este caso le paso un metodo que me transforma el objeto a json */}</p>
        <p>{`soy una funcion de suma = ${sumaSimple(10,1)} `/* la sintaxis permite el paso de funciones y string interpolacion */}</p>
        </>
        )        
}

MiApp.proptypes = {
    titulo : PropTypes.string,
    altura : PropTypes.number.isRequired, /* esto ultimo isRequired vuelve OBLIGATORIO el uso de este tipo de dato */
}
