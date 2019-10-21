import React from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="divdiv">
                <img className="logo" src="https://fontmeme.com/permalink/191012/733b6dd4db71e3c5c747ba52909fde7d.png" alt="netflix-font" />
                <nav className="cabecalhoPrincipal-nav">
                    <a>Funcionalidades</a>
                    <a>Contato</a>
                    <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
                </nav>
            </div>
            <img className="banner" src="img/jokerposter.jpg"/>
        </div>

      <main className="conteudoPrincipal">
        <section id="conteudoPrincipal-eventos">
          <h2 id="conteudoPrincipal-eventos-titulo">f u n c i o n a l i d a d e s</h2>
          <div className="container">
                <div className="conteudoPrincipal-funcionalidades">
                  <p>
                    Aproveite nossos lançamentos com filmes <br/>que acabaram de chegar nos cinemas
                  </p>
                  <img className="imagem" src="./img/1561651783-5d14ea765d6a8_va_guia_dc_-_toy_story_4.jpg" />
                </div>

                <div className="conteudoPrincipal-funcionalidades">
                    <img className="imagem" src="./img/1570655422993.jpg" />
                    <p>
                       As séries e filmes originais da OpFlix <br/>para você acompanhar onde e quando quiser
                    </p>  
                </div>

                <div className="conteudoPrincipal-funcionalidades">
                    <p>
                        Experimente com até 30 dias grátis<br/> a melhor plataforma do Brasil
                    </p>
                    <img className="imagem" src="./img/apps.16830.69687203861936499.ac8bf93d-eb40-42c1-9b16-d386bf72c612.12d49530-4240-47d7-8253-795c6d566b96.jpg" />
                </div>
          </div>
        </section>


        <section id="conteudoPrincipal-contato">
          <h2 id="conteudoPrincipal-contato-titulo">c o n t a t o s</h2>
          <div >
            <div className="conteudoimg">
                <img className="redes-sociais" src="img/twitter-logo-1.png" />
                <img className="redes-sociais" src="img/instagram-logo.png" />
                <img className="redes-sociais" src="img/facebook-logo-2-1.png" />
            </div>
            <div className="conteudo-contato-endereco">
              Alameda Barão de Limeira, 539 São Paulo - SP
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
