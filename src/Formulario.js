import React, { useState } from 'react';

const Formulario = ({ onSubmit, onValidationError }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!nombre.trim() || !email.trim()) {

      onValidationError('Por favor, completa los campos de nombre y correo.');
      return;
    }


    if (password !== confirmPassword) {

      onValidationError('Las contraseñas no coinciden.');
      return;
    }

    onSubmit({ nombre, email, password, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Registrarse
      </button>
    </form>
  );
};

export default Formulario;
