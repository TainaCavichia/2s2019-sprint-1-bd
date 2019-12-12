import React, { Component } from 'react';
import Axios from 'axios';
import '../../assets/css/stylesheet.css';
import logo from '../../assets/img/logovermelho.png';
import iti from '../../assets/img/iti.jpg';
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

        Axios.post("http://192.168.4.240:5001/api/login", {
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
                <img className="iti" src={iti} />
                <main className="conteudoPrincipal">
                    <section id="conteudoPrincipal-eventos">
                        <div className="a">
                            <div className="imagem-Iti">
                            </div>
                            <div className="formularioo">
                                <form onSubmit={this.efetuarLogin}>
                                    <img className="opflix" src={logo} />
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
                                    <p style={{color:"red"}}>{this.state.erro}</p>
                                    <div className="item">
                                        <button className="btnbtn__login" id="btn__login"> Login </button>
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