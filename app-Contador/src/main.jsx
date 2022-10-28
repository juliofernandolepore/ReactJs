import react from 'react';
import ReactDOM  from 'react-dom/client';
import  {App} from './Componente1';


ReactDOM.createRoot(document.getElementById('root')).render(
    /* con el metodo getElement busco el id root o el que sea, y a ese lo renderizo
    a react, y le paso la funcionn al cuerpo del render */
        <reactStrictMode>
            <App />        
        </reactStrictMode>
    );