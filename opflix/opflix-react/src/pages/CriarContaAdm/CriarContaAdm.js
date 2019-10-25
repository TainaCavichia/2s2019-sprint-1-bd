import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class CriarContaAdm extends Component{
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
            idTipoUsuario:""
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
    atualizarTipoUsuario = (event) => {
        this.setState({ idTipoUsuario: event.target.value })
        console.log(this.state);
    }

    adicionaItem = (event) => {
        console.log();
        event.preventDefault();
        
        Axios.post('http://localhost:5000/api/usuarios', {
            nome: this.state.nome,
            email: this.state.email,
            dataNascimento: this.state.dataNascimento,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            senha: this.state.senha,
            idTipoUsuario: Number(this.state.idTipoUsuario)
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
        <div>
            <header>
    <div >
        <nav className="container">
        <div className="conteudo-imagem">
            <img className="logo" src="https://fontmeme.com/permalink/191012/f031c30da3e8b41e40dc9ad5f3a3559e.png" />
        </div>
        <div className="admin">
            <Link to="/plataformas">Plataformas</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/lancamentosadmin">Lançamentos</Link>
            <Link to="/usuarios">Usuários</Link>
            <Link to="/">Logout</Link>
        </div>
        </nav>
    </div>
</header>
<body>
    <main>
        <section>
            <h2>c r i a r  c o n t a</h2>
        <div>
            
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
                    <input className="input_usuario"
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
                <select className="input_usuario"
                    id="option__acessolivre" 
                    onInput={this.atualizarTipoUsuario}>
                    <option selected>Tipo usuário</option>
                    <option value="1">Administrador</option>
                    <option value="2">Comum</option>
                </select>
    
                </div>
                <div>
                    <button onClick={this.adicionaItem} className="btn_categoria">Cadastrar</button>
                </div>
            
        </div>
    </section>
    
</main>
</body>
<Footer/>
        </div>
    );
}
}

export default CriarContaAdm;