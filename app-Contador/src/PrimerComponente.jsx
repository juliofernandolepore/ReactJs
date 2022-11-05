/* *****************************      PRIMER COMPONENTE DE REACT JS    ****************************************  */


/*  mi primer componente esta compuesto de funciones, en este caso una Funcion flecha dentro de una constante.
dentro del return (en vez de usar div (para encerrar h1 y p como un nodo padre), uso la sintaxis  <> </> que equivale al fragment ) */
const nuevoMensaje = " me llamo fernando, y soy una constante en {} dentro del h2";
let numero = 123;
let miArreglo = [1,2,3,4,5,6,7,8];
let nuevoObjeto = {
    mensaje: "hola desde objeto.atributo ",
    titulo: "soy otro objeto.atributo "
};

export const MiApp = () => { 
    /* es necesario export para que la funcion pueda ser importado en main.jsx */
    /*  IMPORTANTE: La primera letra del componente funcional o functional component va en MAYUSCULA (Pascal Case) */     
    return (
        <>
        <h1>{ 1 + 5 /* aqui puedo pasar una expresion de js entre llaves */}</h1> ,
        <h2>{nuevoMensaje}</h2>
        <p>{numero}</p>
        <p>{miArreglo}</p>
        <p>{nuevoObjeto.mensaje /* ACA SOLO SE RENDERIZAN ARREGLOS U objetos.atributo */}</p>
        <p>{nuevoObjeto.titulo}</p>
        <p>{ JSON.stringify(nuevoObjeto) /* en este caso le paso un metodo que me transforma el objeto a json */}</p>
        </>
        )        
}
