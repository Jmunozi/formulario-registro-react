// Importa los componentes necesarios en App.js
import React, { useState } from 'react';
import Registro from './Registro';  // Asegúrate de que la ruta sea correcta

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleFormSubmit = ({ nombre, email, password, confirmPassword }) => {
    // Lógica para validar y procesar el formulario
    if (email && password && password === confirmPassword) {
      setAlertMessage('Registro exitoso');
      setAlertType('success');
    } else {
      setAlertMessage('Error: Campos vacíos o contraseñas no coinciden');
      setAlertType('danger');
    }
  };

  return (
    <div className="container justify-content-center mt-5">
      <div class="d-flex">
      <Registro
        onFormSubmit={handleFormSubmit}
        alertMessage={alertMessage}
        alertType={alertType}
      />
    </div>
    </div>
  );
};

export default App;
