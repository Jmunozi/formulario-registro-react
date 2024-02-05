import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = ({ onFormSubmit }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSocialButtonClick = (provider) => {

    console.log('Registro rápido con ' + provider);
  };

  const handleFormSubmit = ({ nombre, email, password, confirmPassword }) => {

    if (email && password && password === confirmPassword) {
      setAlertMessage('Registro exitoso');
      setAlertType('success');
    } else {
      setAlertMessage('Error: Campos vacíos o contraseñas no coinciden');
      setAlertType('danger');
    }
  };

  const handleValidationError = (message) => {

    setAlertMessage(message);
    setAlertType('danger');
  };

  return (
    <div className='cajaregistro'>
      <h1>Crea una cuenta</h1>
      <div className='d-flex justify-content-center align-items-center'>
      <SocialButton image="/images/facebook.png" onClick={() => handleSocialButtonClick('Facebook')} />
      <SocialButton image="/images/github.png" onClick={() => handleSocialButtonClick('GitHub')} />
      <SocialButton image="/images/linkedin.png" onClick={() => handleSocialButtonClick('LinkedIn')} />
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario onSubmit={handleFormSubmit} onValidationError={handleValidationError} />
      <Alert message={alertMessage} type={alertType} />
    </div>
  );
};

export default Registro;
