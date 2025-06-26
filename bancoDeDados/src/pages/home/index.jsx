import './style.css'
import t

function Home() {


  return (
    <>
     <div className='container'>
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input name='nome' type="text" />
        <input name='idade' type="number" />
        <input name='email' type="email" />
        <button type="button">Cadastrar</button>
      </form>

      <div>
        <div>
          <p>nome:</p>
          <p>idade:</p>
          <p>email:</p>

          <button type="button">
            <img src="" alt="" />            
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Home
