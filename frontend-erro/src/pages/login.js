import React from 'react';
import logo from '../assets/logo.svg';
import './login.css';

export default function Login(){
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="TinDev" />
        <input 
          placeholder="Digite seu usuário do GitHub"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}