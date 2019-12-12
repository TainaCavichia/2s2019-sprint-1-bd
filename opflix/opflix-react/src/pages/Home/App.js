import React from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logovermelho.png';
import jokerposter from '../../assets/img/jokerposter.png'
import toystory from '../../assets/img/Toy-Story-4.jpg'
import casa from '../../assets/img/lacasadepapel.jpg'
import vingadores from '../../assets/img/vingadores.jpg'
import icon1 from '../../assets/img/twitter-logo-1.png'
import icon2 from '../../assets/img/instagram-logo.png'
import icon3 from '../../assets/img/facebook-logo-2-1.png'

function App() {
  return (
    <div className="App">
        <div className="aaa">
            <div className="divdiv">
              <div className="opop">
                <img className="logo" src={logo} alt="netflix-font" />
              </div>      
                <nav className="menuzinho">
                    <a href="#conteudoPrincipal-eventos">Funcionalidades</a>
                    <a href="#meno">Contatos</a>
                    <Link className="lolo" to="/login">Login</Link>
                </nav>
            </div>
            <img className="banner" src={jokerposter}/>
        </div>

      <main className="conteudoPrincipal">
        <section id="conteudoPrincipal-eventos">
        <Titulo className="titulo" titulo='f u n c i o n a l i d a d e s' />
          <div className="abacate">
                <div className="conteudoPrincipal-funcionalidades">
                  <p>
                    Aproveite nossos lançamentos com filmes <br/>que acabaram de chegar nos cinemas
                  </p>
                  <img className="imagem" src={toystory} />
                </div>

                <div className="conteudoPrincipal-funcionalidades">
                    <img className="imagem" src={casa} />
                    <p>
                       As séries e filmes originais da OpFlix <br/>para você acompanhar onde e quando quiser
                    </p>  
                </div>

                <div className="conteudoPrincipal-funcionalidades">
                    <p>
                        Experimente com até 30 dias grátis<br/> a melhor plataforma do Brasil
                    </p>
                    <img className="imagem" src={vingadores} />
                </div>
          </div>
        </section>


        <section id="conteudoPrincipal-contato">
          <h2 id="meno">c o n t a t o s</h2>
          <div >
            <div className="conteudoimg">
                <a href="https://twitter.com/login?lang=pt" ><img className="redes-sociais" src={icon1} /></a>
                <a href="https://www.instagram.com/?hl=pt-br" ><img className="redes-sociais" src={icon2} /></a>
                <a href="https://pt-br.facebook.com/" ><img className="redes-sociais" src={icon3} /></a>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
