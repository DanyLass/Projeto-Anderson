
import '../../Styles/text.scss';
import { FiUser } from 'react-icons/fi';


function Text() {

  return (

    <section className="container" >
      <div className='icon'>
        <h3>Usuário</h3>

        <FiUser name='FiUser' size={80} />
      </div>
      <strong className="header">
        <h1>Poesia de Programador</h1>

      </strong>
      <section className="text">
        <h2>E mais uma vez meu código não compila
          Começo a perder a inspiração<p>
            Será que está nessa ou em outra linha?</p>
          <p> Será que resolvo esse erro se eu reler a documentação?</p>
          Olho linha a linha, procurando de forma constante
          E cansado de tanto procurar
          <p> Percebo num instante</p>
          O erro no meu código era apenas uma vírgula que esqueci de colocar
        </h2>
        <img src="src/img/hd-wallpaper-7359471_640.jpg" height='500px' width='500px' />
      </section>
    </section>
  )
}

export default Text