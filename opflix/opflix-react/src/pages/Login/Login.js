import React, { Component } from 'react';
import Axios from 'axios';
import '../../assets/css/stylesheet.css';
import logo from '../../assets/img/iti.jpg';
import { Link } from 'react-router-dom';

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
                        <div className="a">
                            <div className="imagem-Iti">
                                <img className="iti" src={logo} />
                            </div>
                            <div className="formularioo">
                                <form onSubmit={this.efetuarLogin}>
                                    <img className="opflix" src="https://fontmeme.com/permalink/191012/733b6dd4db71e3c5c747ba52909fde7d.png" />
                                    <div className="item">
                                        <input className="input__login"
                                            placeholder="username"
                                            onInput={this.atualizaEstadoEmail}
                                            type="text"
                                            name="username" />
                                    </div>
                                    <div className="item">
                                        <input className="input__login"
                                            onInput={this.atualizaEstadoSenha}
                                            placeholder="password"
                                            type="password"
                                            name="password" />
                                    </div>
                                    <div className="item">
                                        <button className="btnbtn__login" id="btn__login">
                                            Login
                                </button>
                                    </div>
                                        <Link to="/criarconta" className='criar_conta'>Criar conta!</Link>
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