import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'

class Plataformas extends Component{
    constructor(){
        super();
        this.state = {
            lista: [],
            nome: ''
        };
    }

    componentDidMount(){
       this.listaAtualizada();
    }

    listaAtualizada = () =>{
        fetch('http://localhost:5000/api/plataformas', { headers: {

            'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
        },})
            .then(response => response.json())
            .then(data => this.setState({ lista: data}));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://localhost:5000/api/plataformas',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix'),
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
        
    }

    atualizarNome = (event) =>{
        this.setState({nome: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
            <div>
                  <header className="cabecalhoPrincipal">
                    <div className="container">
                        <img src="" />

                        <nav className="cabecalhoPrincipal-nav">
                            Administrador
          </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <Titulo titulo='Cadastrar Plataforma' />
                        <div className="container" id="conteudoPrincipal-lista">
                            <div id="conteudoPrincipal-cadastro">
                                <form>
                                    <div className="container">
                                        <input
                                            type="text"
                                            className="className__categoria"
                                            id="input__categoria"
                                            placeholder="tipo do evento"
                                            value={this.state.nome}
                                            onChange={this.atualizarNome}
                                        />
                                        <button
                                            onClick={this.adicionaItem}
                                            id="btn__cadastrar"
                                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                        >
                                            Cadastrar
                </button>
                                    </div>
                                </form>
                            </div>
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {this.state.lista.map(element => {
                                        return (
                                            <tr key={element.idPlataforma}>
                                                <tr>{element.idPlataforma}</tr>
                                                <td>{element.nome}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                <Footer />

            </div>
        );
    }
}

export default Plataformas; 