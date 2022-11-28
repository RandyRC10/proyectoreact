import datos from './assets/datos.svg';  //importa como variable el contenido de las imagenes con su respectiva ruta
import logo from  './assets/logo.png';  //importa como variable el contenido de las imagenes con su respectiva ruta
import facebook from './assets/facebook.svg';  //importa como variable el contenido de las imagenes con su respectiva ruta
import historial from './assets/historial.svg';  //importa como variable el contenido de las imagenes con su respectiva ruta
import instagram from './assets/instagram.svg';  //importa como variable el contenido de las imagenes con su respectiva ruta
import reconocimiento from './assets/reconocimiento.svg';  //importa como variable el contenido de las imagenes con su respectiva ruta
import FormApp from './components/func/FormApp'; //importa el componente funcional FormApp desde su respectiva ruta
import HeaderApp from './components/static/HeaderApp'; //importa el componente estatico FormApp desde su respectiva ruta
import FooterApp from './components/static/FooterApp'; //importa el componente estatico FormApp desde su respectiva ruta
import 'bootstrap/dist/css/bootstrap.min.css'; //importa los estilos de bootstrap
import './style/App.css';

//la funcion que renderiza todo el proyecto
function App() {
  return (
    <div>
      {/* se coloca el componnte HeaderApp y se le pasa logo como propiedad */}
      <HeaderApp logo={logo}/>
      <div className='App-body'>
        <div className='App-titulo pt-5 d-flex justify-content-center align-items-center'>
          <div style={{width: '70%', fontSize: 'bold', textAlign: 'center'}}>
            <span className='h2'> ¿Nemo enim ipsam voluptatem quia <br /> <span className='h1'><span className='h1' style={{color: '#ed253d'}}>75,000 voluptas</span> sit aspernatur?</span> </span>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row gap-5'>
            <div className='col-12 d-flex justify-content-evenly flex-wrap gap-5'>
              <div className='img-container'>
                <figure>
                  <img className='icon-main-page' src={datos} alt="datos"/>
                  <figcaption>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit, sed do eiusmod</strong></figcaption>
                </figure>
              </div>
              <div className='img-container'>
              <figure>
                  <img className='icon-main-page' src={historial} alt="historial"/>
                  <figcaption>Duis aute irure dolor in reprehendieri <strong>14,230</strong></figcaption>
                </figure>
              </div>
              <div className='img-container'>
              <figure>
                  <img className='icon-main-page' src={reconocimiento} alt="reconocimiento"/>
                  <figcaption>Sed ut perspiciatis unde omnis iste natus error sit voluptetem accusantium <strong>"doloremque laudamtium, totam rem aperiam"</strong></figcaption>
                </figure>
              </div>
            </div>
            <div className='col-12 d-flex justify-content-evenly flex-wrap gap-5'>
              <div className='img-container'>
                <figure>
                  <img className='icon-main-page' src={facebook} alt="facebook"/>
                  <figcaption><strong>Lorem 185,000</strong> ipsum dolor sit amet, consectetur</figcaption>
                </figure>
              </div>
              <div className='img-container'>
                <figure>
                  <img className='icon-main-page' src={instagram} alt="instagram"/>
                  <figcaption><strong>Sed ut 30,000</strong> perspicaciatis unde omnis</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* se coloca el componnte FormApp funcional */}
        <FormApp/>
      </div>
      {/* se coloca el componnte FooterApp estatico */}
      <FooterApp/>
    </div>
  );
}

export default App;
