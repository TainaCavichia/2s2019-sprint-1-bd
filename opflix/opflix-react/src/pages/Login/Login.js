import React, { Component } from 'react';
import Axios from 'axios';
import '../../assets/css/login.css';
import logo from '../../assets/img/download.jpg'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }
    atualizaEstadoEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    atualizaEstadoSenha = (event) => {
        this.setState({ senha: event.target.value });
    }
    efetuarLogin = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push('/lancamentos');
                } else {
                    console.log('eitaa');
                }
            })
            .catch(erro => {
                this.setState({ erro: "Usuário ou senha inválidos" });
                console.log(erro);
            });
    }

    render() {
        return (
            <div>
                <main className="conteudoPrincipal">
                    <section id="conteudoPrincipal-eventos">
                        <div className="container">
                            <div className="imagem-Iti">
                                <img className="iti" src={logo} />
                            </div>
                            <div className="conteudoPrincipal-funcionalidades">
                                <img className="opflix" src="https://fontmeme.com/permalink/191012/733b6dd4db71e3c5c747ba52909fde7d.png" />
                                <form onSubmit={this.efetuarLogin}>
                                    <div className="item">
                                        <input className="input__login"
                                            placeholder="username"
                                            onInput={this.atualizaEstadoEmail}
                                            type="text"
                                            name="username"
                                            type="text" />
                                    </div>
                                    <div className="item">
                                        <input className="input__login"
                                            onInput={this.atualizaEstadoSenha}
                                            placeholder="password"
                                            type="password"
                                            name="password" />
                                    </div>
                                    <div className="item">
                                        <button className="btn btn__login" id="btn__login">
                                            Login
                                </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Login;