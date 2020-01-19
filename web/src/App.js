//  Componente = função que retorna algum conteudo - bloco html, css, js, que nao interfere na aplicação
//  Propriedade = Informações que um componente PAI passa para os filhos
//  Estado =  informações mantidas pelo componente(imutabilidade)
import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {

     const response = await api.post('/devs', data);


     setDevs([...devs, response.data]);
  }

  return (
    // box cadastro
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />


      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev.id} dev={dev} />
          ))}

        </ul>
      </main>
    </div>

  );
}
export default App;
