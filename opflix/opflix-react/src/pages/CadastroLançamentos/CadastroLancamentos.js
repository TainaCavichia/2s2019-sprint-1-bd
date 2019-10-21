import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo';
import '../../assets/css/categorias.css';
import Axios from 'axios';

class CadastroLancamentos extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            sinopse: '',
            tempoDuracao: '',
            dataLancamento: '',
            descricao: '',
            tipoSelecionado: '',
            categoria: [],
            categoriaSelecionada: '',
            plataforma: [],
            plataformaSelecionada: ''
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/categorias', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ categoria: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        Axios.get('http://localhost:5000/api/plataformas', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ plataforma: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    adicionaItem = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:5000/api/lancamentos', {
            titulo: this.state.titulo,
            sinopse: this.state.sinopse,
            tempoDuracao: this.state.tempoDuracao,
            dataLancamento: this.state.dataLancamento,
            descricao: this.state.descricao,
            idTipo: this.state.tipoSelecionado,
            idCategoria: this.state.categoriaSelecionada,
            idPlataforma: this.state.plataformaSelecionada
        }, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
                }
            }
        )
            .then(response => { console.log(response) })
            .catch(erro => {
                this.setState({ erro: "Não foi possível cadastrar" });
                console.log(erro);
            });
    }

    atualizarTitulo = (event) => {
        this.setState({ titulo: event.target.value })
        console.log(this.state);
    }
    atualizarSinopse = (event) => {
        this.setState({ sinopse: event.target.value })
        console.log(this.state);
    }
    atualizarTempoDuração = (event) => {
        this.setState({ tempoDuracao: event.target.value })
        console.log(this.state);
    }
    atualizarDataLancamento = (event) => {
        this.setState({ dataLancamento: event.target.value })
        console.log(this.state);
    }
    atualizarDescricao = (event) => {
        this.setState({ descricao: event.target.value })
        console.log(this.state);
    }
    atualizarTipo = (event) => {
        this.setState({ tipoSelecionado: event.target.value })
        console.log(this.state);
    }
    atualizarCategoria = (event) => {
        this.setState({ categoriaSelecionada: event.target.value })
        console.log(this.state)
    }
    atualizarPlataforma = (event) => {
        this.setState({ plataformaSelecionada: event.target.value })
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <div className="container" id="conteudoPrincipal-cadastro">
                    <header>
                        <div >
                            <nav className="container">
                                <div className="conteudo-imagem">
                                    <img className="logo" src="https://fontmeme.com/permalink/191012/f031c30da3e8b41e40dc9ad5f3a3559e.png" />
                                </div>
                                <div className="admin">
                                    <li>Plataformas</li>
                                    <li>Categorias</li>
                                    <li>Lançamentos</li>
                                    <li>Usuários</li>
                                    <li>Logout</li>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <Titulo titulo="c a d a s t r a r  l a n ç a  m e n t o" />
                    <div className="container">

                        <input type="text" id="evento__titulo" placeholder="título" onInput={this.atualizarTitulo} />
                        <input type="text" id="evento__localizacao" placeholder="sinopse" onInput={this.atualizarSinopse} />
                        <input type="text" id="evento__data" placeholder="duração" onInput={this.atualizarTempoDuração} />
                        <input type="text" id="evento__data" placeholder="dd/MM/yyyy" onInput={this.atualizarDataLancamento} />
                        <input type="text" placeholder="descrição do evento" onInput={this.atualizarDescricao} id="evento__descricao" />
                        <select onInput={this.atualizarTipo} value={this.state.tipoSelecionado}>
                            //Tipo não tem listar, escreve na mão
                            <option selected>Tipo</option>
                            <option value='1'>Série</option>
                            <option value='2'>Filme</option>
                            <option value='3'>Anime</option>
                            <option value='4'>Desenho</option>
                        </select>
                        <select onInput={this.atualizarCategoria} value={this.state.categoriaSelecionada}>
                            <option selected>Categoria</option>
                            {this.state.categoria.map(element => {
                                return (
                                    <option value={element.idCategoria}>{element.nome}</option>
                                )
                            })}
                        </select>
                        <select onChange={this.atualizarPlataforma} value={this.state.plataformaSelecionada}>
                            <option selected>Plataforma</option>

                            {this.state.plataforma.map(element => {
                                return (
                                    <option value={element.idPlataforma}>{element.nome}</option>
                                )
                            })}
                        </select>

                    </div>
                    <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" onClick={this.adicionaItem}>Cadastrar</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CadastroLancamentos;