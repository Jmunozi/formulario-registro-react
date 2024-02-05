import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = ({ onFormSubmit }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSocialButtonClick = (provider) => {
    // Lógica para el registro rápido con redes sociales
    console.log('Registro rápido con ' + provider);
  };

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

  const handleValidationError = (message) => {
    // Llama a esta función para manejar los mensajes de validación
    setAlertMessage(message);
    setAlertType('danger');
  };

  return (
    <div>
      <h1>Crea una cuenta</h1>
      <SocialButton image="/images/facebook.png" onClick={() => handleSocialButtonClick('Facebook')} />
      <SocialButton image="/images/github.png" onClick={() => handleSocialButtonClick('GitHub')} />
      <SocialButton image="/images/linkedin.png" onClick={() => handleSocialButtonClick('LinkedIn')} />
      <p>O usa tu email para registrarte</p>
      <Formulario onSubmit={handleFormSubmit} onValidationError={handleValidationError} />
      <Alert message={alertMessage} type={alertType} />
    </div>
  );
};

export default Registro;
