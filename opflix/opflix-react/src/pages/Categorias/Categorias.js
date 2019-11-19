import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import logo from '../../assets/img/logobranco.png'
import {Link} from 'react-router-dom';

class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            nome: ''
        };
    }

    componentDidMount() {
        this.listaAtualizada();
    }

    listaAtualizada = () => {
        fetch('http://192.168.4.240:5000/api/categorias', {
            headers: {

                'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data }))
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://192.168.4.240:5000/api/categorias', {
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix'),
                "Content-Type": "application/json"
            }
        })
            .then(this.listaAtualizada)
            .catch(error => console.log(error))

    }

    atualizarNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <header>
                    <div >
                        <nav className="container">
                            <div className="conteudo-imagem">
                                <img className="logo" src={logo} />
                            </div>
                            <div className="admin">
                                <Link className="abacaxi" to="/plataformas">Plataformas</Link>
                                <Link className="abacaxi" to="/categorias">Categorias</Link>
                                <Link className="abacaxi" to="/lancamentosadmin">Lançamentos</Link>
                                <Link className="abacaxi" to="/usuarios">Usuários</Link>
                                <Link className="abacaxi" to="/">Logout</Link>
                            </div>
                        </nav>
                    </div>
                </header>
                <body>
                    <main>
                        <section>
                            <Titulo titulo='c a d a s t r a r - c a t e g o r i a' />
                            <div>
                                <form className="irra">
                                    <div>
                                        <input className="input_categoria"
                                            placeholder="nome"
                                            name="name"
                                            value={this.state.nome}
                                            onChange={this.atualizarNome}
                                            type="text" />
                                    </div>
                                    <div>
                                        <button onClick={this.adicionaItem} className="btn_categoria">Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <table id="tabela-lista">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>categoria</th>
                                        </tr>
                                    </thead>

                                    <tbody id="tabela-lista-corpo">
                                        {this.state.lista.map(element => {
                                            return (
                                                <tr key={element.idCategoria}>
                                                    <tr>{element.idCategoria}</tr>
                                                    <td>{element.nome}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                    </main>
                </body>

                <Footer />

            </div>
        );
    }
}
export default Categorias;

