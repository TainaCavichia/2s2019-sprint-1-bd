import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import Axios from 'axios';
import '../../assets/css/stylesheet.css';

class Lancamentos extends Component {
    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/lancamentos', {
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
                    <div className="container">
                        <div className="divdiv">
                            <img className="logo" src="https://fontmeme.com/permalink/191012/733b6dd4db71e3c5c747ba52909fde7d.png" alt="netflix-font" />
                            <nav className="cabecalhoPrincipal-nav">
                                <a>Plataformas</a>
                                <a>Categorias</a>
                                <a>Cadastrar lançamentos</a>
                                <a>Usuários</a>
                                <a href="login.html" >Logout</a>
                            </nav>
                        </div>
                        <img className="banner" src="img/jokerposter.jpg" />
                    </div>
                </header>
                <section id="imagens_bolinhas">
                    <div>
                        <img src="" alt="rei leão" />
                        <img src="" alt="homem de ferro" />
                        <img src="" alt="beyonce" />
                        <img src="" alt="stranger things" />
                        <img src="" alt="mikey mouse" />
                    </div>
                </section>
                <Titulo titulo='l a n ç a m e n t o s' />
                <table id="tabela-lista">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Sinopse</th>
                            <th>Categoria</th>
                            <th>Tipo</th>
                            <th>Duração</th>
                            <th>Data</th>
                            <th>Plataforma</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>

                    <tbody id="tabela-lista-corpo">
                        {this.state.lista.map(element => {
                            return (
                                <tr key={element.idLancamento}>
                                    <tr>{element.idLancamento}</tr>
                                    <td>{element.titulo}</td>
                                    <td>{element.sinopse}</td>
                                    <td>{element.idCategoriaNavigation.nome}</td>
                                    <td>{element.idTipoNavigation.nome}</td>
                                    <td>{element.tempoDuracao}</td>
                                    <td>{element.dataLancamento}</td>
                                    <td>{element.idPlataformaNavigation.nome}</td>
                                    <td>{element.descricao}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
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
                <Footer />
            </div>
        )
    }
}

export default Lancamentos;