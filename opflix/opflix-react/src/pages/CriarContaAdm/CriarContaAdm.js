import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/stylesheet.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logobranco.png'

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
        
        Axios.post('http://192.168.4.240:5001/api/usuarios', {
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
            <Titulo className="title" titulo="c r i a r - c o n t a" />
        <div>
        <form className='arrumarForm'>
                
                    <input 
                    onInput={this.atualizarNome}
                    placeholder="nome"
                    name="name"
                    type="text"/> <br/>
                
                    <input 
                    onInput={this.atualizarEmail}
                    placeholder="email"
                    name="email"
                    type="email"/> <br/>
              
                    <input 
                    onInput={this.atualizarDataNascimento}
                    placeholder="nascimento"
                    type="date"
                    name="date"/> <br/>
                
                    <input 
                    onInput={this.atualizarCPF}
                    placeholder="cpf"
                    type="text"
                    name="cpf"/> <br/>
                
                    <input
                    onInput={this.atualizarTelefone}
                    placeholder="telefone"
                    type="tel"
                    name="telefone"/> <br/>
                
                    <input 
                    onInput={this.atualizarSenha}
                    placeholder="senha"
                    type="password"
                    name="senha"/> <br/>
                
                <select 
                    id="option__acessolivre" 
                    onInput={this.atualizarTipoUsuario}><br/>
                    <option selected>Tipo usuário</option>
                    <option value="1">Administrador</option>
                    <option value="2">Comum</option>
                </select><br/>
                
                    <button onClick={this.adicionaItem} className="btn__conta">Cadastrar</button><br/>
                
                </form>
            
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