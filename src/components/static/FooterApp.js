import React from 'react'; // acá se usa sintaxis "nueva" de javascript para importación de módulos
import 'bootstrap/dist/css/bootstrap.min.css'; // acá se usa sintaxis "nueva" de javascript para importación de paquetes instalador por npm

//esto es exportacion de componentes mediante clases
//debido a que son componentes estaticos no se maneja ningún Hook o UseState
class FooterApp extends React.Component {
    render() {
      return (
        <footer className='App-footer d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <h4>Company name</h4>
            <h4>2022</h4>
            </div>
        </footer>
      );
    }
}

export default FooterApp;