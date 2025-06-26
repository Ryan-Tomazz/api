import './style.css';
import Trash from "../../assets/Trash.png";
import api from '../../services/api';
import { useEffect } from "react";

function Home() {

  let users = []

  async function getUsers() {
    users = await api.get('/usuarios')
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>
      <div className='container'>
        <form action="">
          <h1>Cadastro de usuários</h1>
          <input placeholder="nome" name='nome' type="text" />
          <input placeholder="idade" name='idade' type="number" />
          <input placeholder="email" name='email' type="email" />
          <button type="button">Cadastrar</button>
        </form>

        {
          users.map((user) => (
            <div key={user.id} className="card">
              <div>
                <p>nome: <span>{user.name}</span></p>
                <p>idade: <span>{user.age}</span></p>
                <p>email: <span>{user.email}</span></p>
              </div>
              <button type="button">
                <img src={Trash} alt="Excluir" />
              </button>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Home
