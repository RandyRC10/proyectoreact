import React, {useState} from 'react'; // acá se usa sintaxis "nueva" de javascript para importación de módulos
import 'bootstrap/dist/css/bootstrap.min.css'; // acá se usa sintaxis "nueva" de javascript para importación de paquetes instalador por npm
 

//esto es exportacion de componentes mediante funciones
export default function FormApp() {
  //Se crea una variable constante de useState que recibe como parametro un objeto vacío.
  //form es la constante a acceder y setForm es la funcion para alterar el estado de la variable
  const [form, setForm] = useState({});
  
  //Se crea una funcion constante de tipo arrow function que recive el evento del cambio del input
  //toma la variable formulario y para cada input optiene su etiqueta name y le asigna su valor correspondiente
  //en el objeto
  const handleChange = (e) => {
    setForm(
          {
            ...form,
            [e.target.name]: e.target.value,
          }
      );
  };

  //Se crea una funcion para manejar el envió del formulario, recibe el evento del formulario
  // y obtiene toda la data,  
  const handleSubmit = (e) => {
    //obtiene el evento submit y lo cancela
    e.preventDefault();
    // crea una variable tipo FormData con los valores del formulario
    var data = new FormData(e.target);
    //Por cada indice de data imprime en consola el elemento due contiene el indice con una arrow func
    data.forEach(e => console.log(e));
  }
  //retorna el elemento renderizado, en este caso el formulario
  return (
    <div className='container d-flex justify-content-center pt-5 pb-5'>
      <div className='form-datos'>
        <div className='text-center'>
          <h1 className='fw-bold text-custom'>Déjanos tus datos</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-form-text mb-3">
            <label className='text-custom' htmlFor='nombre'>Nombre</label>
            <input type="text" value={form.name} className="form-control" name='nombre' id='nombre' onChange={handleChange}/>
          </div>
          <div className="input-form-text mb-3">
            <label className='text-custom' htmlFor='telefono'>Télefono</label>
            <input type="text" value={form.name}  className="form-control" name='telefono' id='telefono' onChange={handleChange}/>
          </div>
          <div className="input-form-text mb-3">
            <label className='text-custom' htmlFor='email'> Correo electrónico</label>
            <input type="text" value={form.name} className="form-control" name='email' id='email' onChange={handleChange} />
          </div>
          <div className="input-form-text mb-3">
            <button type="submit" className="form-control button-primary-custom">ENVIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
  }
