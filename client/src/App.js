import React, { Fragment } from 'react';
import './App.css';
import Rotas from './routes';
import {AuthProvider} from '../src/context/auth'

function App() {
  return (
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
  );
}

export default App;
