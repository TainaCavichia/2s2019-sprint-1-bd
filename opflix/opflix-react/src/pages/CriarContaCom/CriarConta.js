import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

//cadastrar usuários
class CriarConta extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            nome: "",
            email: "",
            senha: "",
            dataNascimento: "",
            telefone: "",
            cpf: "",
            idTipoUsuario: 2
        };
    }
    atualizarNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state);
    }
    atualizarEmail = (event) => {
        this.setState({ email: event.target.value })
        console.log(this.state);
    }
    atualizarSenha = (event) => {
        this.setState({ senha: event.target.value })
        console.log(this.state);
    }
    atualizarCPF = (event) => {
        this.setState({ cpf: event.target.value })
        console.log(this.state);
    }
    atualizarTelefone = (event) => {
        this.setState({ telefone: event.target.value })
        console.log(this.state);
    }
    atualizarDataNascimento = (event) => {
        this.setState({ dataNascimento: event.target.value })
        console.log(this.state);
    }

    adicionaItem = (event) => {
        event.preventDefault();

        Axios.post('http://192.168.4.240:5000/api/usuarios', {
            nome: this.state.nome,
            email: this.state.email,
            dataNascimento: this.state.dataNascimento,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            senha: this.state.senha,
            idTipoUsuario: this.state.idTipoUsuario
        }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
                }
            }
        )
            .then(response => {
                console.log(response)
                this.props.history.push('/lancamentos')
            })
            .catch(erro => {
                this.setState({ erro: "Não foi possível cadastrar usuário" });
                console.log(erro);
            });
    }

    render() {
        return (
            <div id='divona_cadastro'>
                <header>
                    <div >
                        <nav className="container">
                            <div className="conteudo-imagem">
                                <img className="logo" src="https://fontmeme.com/permalink/191012/f031c30da3e8b41e40dc9ad5f3a3559e.png" />
                            </div>
                            <div className="admin">
                                <Link to="/" className="abacaxi">Home</Link>
                                <Link to="/login" className="abacaxi">Login</Link>
                            </div>
                        </nav>
                    </div>
                </header>
                <body>
                    <main>
                        <section>
                            <h2>c r i a r - c o n t a</h2>
                            <div>
                                <form className='arrumarForm'>
                                    
                                        <input 
                                            onInput={this.atualizarNome}
                                            placeholder="nome"
                                            name="name"
                                            type="text" /> <br/>
                                    
                                    
                                        <input 
                                            onInput={this.atualizarEmail}
                                            placeholder="email"
                                            name="email"
                                            type="email" /> <br/>
                                
                                
                                        <input 
                                            onInput={this.atualizarDataNascimento}
                                            placeholder="nascimento"
                                            type="date"
                                            name="date" /> <br/>
                                    
                                    
                                        <input 
                                            onInput={this.atualizarCPF}
                                            placeholder="cpf"
                                            type="text"
                                            name="cpf" /> <br/>
                                    
                                        <input 
                                            onInput={this.atualizarTelefone}
                                            placeholder="telefone"
                                            type="tel"
                                            name="telefone" /> <br/>
                                    
                                        <input 
                                            onInput={this.atualizarSenha}
                                            placeholder="senha"
                                            type="password"
                                            name="senha" /> <br/>
                                
                                        <button onClick={this.adicionaItem}>Cadastrar</button>
                                
                                </form>
                            </div>
                        </section>

                    </main>
                </body>
                <br />
                <br />
                <br />
                <Footer className='footer_cadastro' />
            </div>
        );
    }
}

export default CriarConta;