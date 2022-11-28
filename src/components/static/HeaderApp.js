import React from 'react'; // acá se usa sintaxis "nueva" de javascript para importación de módulos
import 'bootstrap/dist/css/bootstrap.min.css'; // acá se usa sintaxis "nueva" de javascript para importación de paquetes instalador por npm

//esto es exportacion de componentes mediante clases
//debido a que son componentes estaticos no se maneja ningún Hook o UseState
class FooterApp extends React.Component {
    render() {
      return (
        <header className="App-header">
        <div className='App-header-container mb-3 ms-sm-5 mt-5 d-flex justify-content-center aling-items-center justify-content-sm-start'>
          {/* Aca se coloca en src el logo que se pasa como propiedad en el App.js */}
          <img src={this.props.logo} className="App-logo" alt="logo" />
        </div>
      </header>
      );
    }
}

export default FooterApp;