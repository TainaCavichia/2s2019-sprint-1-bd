import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';

//cadastrar usuários
class CriarConta extends Component{
    constructor() {
        super();
        this.state = {
            lista: [],
            nome:"",
            email:"",
            senha:"",
            dataNascimento:"",
            telefone:"",
            cpf:"",
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
        
        Axios.post('http://localhost:5000/api/usuarios', {
            nome: this.state.nome,
            email: this.state.email,
            dataNascimento: this.state.dataNascimento,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            senha: this.state.senha,
            idTipoUsuario: this.state.idTipoUsuario
        }, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
                }
            }
        )
            .then(response => { console.log(response) 
                this.props.history.push('/lancamentos')
            })
            .catch(erro => {
                this.setState({ erro: "Não foi possível cadastrar usuário" });
                console.log(erro);
            });
    }

render(){
    return(
        <div id='divona_cadastro'>
            <header>
    <div >
        <nav className="container_categorias">
            <div className="conteudo-imagem">
                <img className="logo" src="https://fontmeme.com/permalink/191012/f031c30da3e8b41e40dc9ad5f3a3559e.png"/>
            </div>
            <div className="menu">
                <Link to="/" className='link_nav_cat'>Home</Link>
                <Link to="/login" className='link_nav_cat'>Login</Link>
            </div>
        </nav>
    </div>
</header>
<body>
    <main>
        <section>
            <h2>c r i a r c o n t a</h2>
        <div>
            <form id='form_cadastro'>
                <div>
                    <input className="input_usuario"
                    onInput={this.atualizarNome}
                    placeholder="nome"
                    name="name"
                    type="text"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    onInput={this.atualizarEmail}
                    placeholder="email"
                    name="email"
                    type="email"/> 
                </div>
                <div>
                    <input className="input_usuario" className='data_cadastro'
                    onInput={this.atualizarDataNascimento}
                    placeholder="nascimento"
                    type="date"
                    name="date"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    onInput={this.atualizarCPF}
                    placeholder="cpf"
                    type="text"
                    name="cpf"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    onInput={this.atualizarTelefone}
                    placeholder="telefone"
                    type="tel"
                    name="telefone"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    onInput={this.atualizarSenha}
                    placeholder="senha"
                    type="password"
                    name="senha"/> 
                </div>
                <div>
                    <button onClick={this.adicionaItem} className="btn_categoria">Cadastrar</button>
                </div>
            </form>
        </div>
    </section>
    
</main>
</body>
<br/>
<br/>
<br/>
<Footer className='footer_cadastro'/>
        </div>
    );
}
}

export default CriarConta;