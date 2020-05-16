import React,{useState} from 'react';
import api from '../../services/api';
import Logo from '../../assets/logo_branca.png';

export default function Login({history}){

const [usuario,setUsuario] = useState('');
const [senha,setSenha] = useState('');

async function handleSubmit(event){
  event.preventDefault();

  const response = await api.post('/usuarios',{usuario,senha}); 
   
   handleBuscaListaClientes();
} 
  async function handleBuscaListaClientes(){
    let arrayClientes = await api.get('/usuarios');
    console.log(arrayClientes);

    history.push('/dasboard');
  }
    return (
    <div> 
      <div className="container">
        <img src={Logo} alt="SaibWeb"/>
        <div className="content">   
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">Usuário</label>
            <input 
              id="user" 
              type="text"          
              placeholder="Digite seu Login" 
              value={usuario}
              onChange={event =>setUsuario(event.target.value)}/>
         
             <label htmlFor="senha">Senha</label>
             <input 
             id="senha" 
             type="password"          
             placeholder="Digite sua Senha" 
             value={senha}
             onChange={event =>setSenha(event.target.value)}/>

             <button className="btn" type="submit">Entrar</button>
          </form>      
        </div> 
      </div>
    </div>
  );
}