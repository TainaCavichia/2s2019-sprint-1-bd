import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import Axios from 'axios';
import jokerposter from '../../assets/img/jokerposter.png'
import bola1 from '../../assets/img/png.png'
import bola2 from '../../assets/img/aa.png'
import bola3 from '../../assets/img/beyonce.png'
import bola4 from '../../assets/img/stranger.png'
import bola5 from '../../assets/img/mikey.png'
import icon1 from '../../assets/img/twitter-logo-1.png'
import icon2 from '../../assets/img/instagram-logo.png'
import icon3 from '../../assets/img/facebook-logo-2-1.png'
import '../../assets/css/stylesheet.css';
import { Link } from 'react-router-dom';

class Lancamentos extends Component {
    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://192.168.4.240:5000/api/lancamentos', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ lista: data.data });
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    render() {
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="aaa">
                        <div className="divdiv">
                            <div className="opop">
                                <img className="logo" src="https://fontmeme.com/permalink/191012/733b6dd4db71e3c5c747ba52909fde7d.png" alt="netflix-font" />
                            </div>
                            <nav className="menu">
                                <Link className="peppa" to="/plataformas">Plataformas</Link>
                                <Link className="peppa" to="/categorias">Categorias</Link>
                                <Link className="peppa" to="/cadastrolancamentos">Lançamentos</Link>
                                <Link className="peppa" to="/usuarios">Usuários</Link>
                                <Link className="peppa" to="/">Logout</Link>
                            </nav>
                        </div>
                        <img className="banner" src={jokerposter} />
                    </div>
                </header>
                <section id="imagens_bolinhas">
                    <div>
                        <img className="bolinhas" src={bola1} alt="rei leão" />
                        <img className="bolinhas" src={bola2} alt="homem de ferro" />
                        <img className="bolinhas" src={bola3} alt="beyonce" />
                        <img className="bolinhas" src={bola4} alt="stranger things" />
                        <img className="bolinhas" src={bola5} alt="mikey mouse" />
                    </div>
                </section>
                <Titulo titulo='l a n ç a m e n t o s' />
                <div id='divinha_lancamentos'>
                    {
                        this.state.lista.map(element => {
                            return (
                                <div id="infos">
                                    <ul>
                                        <li>Título: {element.titulo}</li>
                                        <li>Tipo da mídia: {(element.idTipoNavigation === undefined) ? '' : element.idTipoNavigation.nome}</li>
                                        <li>Sinopse: {element.sinopse}</li>
                                        <li>Tempo de duração: {element.tempoDuracao}</li>
                                        <li>Categoria: {(element.idCategoriaNavigation === undefined) ? '' : element.idCategoriaNavigation.nome}</li>
                                        <li>Data de lançamento: {element.dataLancamento}</li>
                                        <li>Plataforma: {(element.idPlataformaNavigation === undefined) ? '' : element.idPlataformaNavigation.nome}</li>
                                        <li>Descrição: {element.descricao}</li>
                                    </ul>
                                </div>
                            );
                        })}
                </div>
                <section id="conteudoPrincipal-contato">
                    <h2 id="conteudoPrincipal-contato-titulo">c o n t a t o s</h2>
                    <div >
                        <div className="conteudoimg">
                            <a href="https://twitter.com/login?lang=pt" ><img className="redes-sociais" src={icon1} /></a>
                            <a href="https://www.instagram.com/?hl=pt-br" ><img className="redes-sociais" src={icon2} /></a>
                            <a href="https://pt-br.facebook.com/" ><img className="redes-sociais" src={icon3} /></a>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Lancamentos;