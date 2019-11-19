import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo';
import '../../assets/css/stylesheet.css';
import Axios from 'axios';
import logo from '../../assets/img/logobranco.png'
import { Link } from 'react-router-dom';

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
        Axios.get('http://192.168.4.240:5000/api/categorias', {
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
        Axios.get('http://192.168.4.240:5000/api/plataformas', {
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
                <div className="" id="conteudoPrincipal-cadastro">
                    <header>
                        <div >
                            <nav className="bla">
                                <div className="conteudo-imagem">
                                    <img className="logo" src={logo} />
                                </div>
                                <div className="admin">
                                    <Link className="item" to="/plataformas">Plataformas</Link>
                                    <Link className="item" to="/categorias">Categorias</Link>
                                    <Link className="item" to="/lancamentosadmin">Lançamentos</Link>
                                    <Link className="item" to="/usuarios">Usuários</Link>
                                    <Link className="item" to="/">Logout</Link>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <Titulo titulo="c a d a s t r a r - l a n ç a  m e n t o" className="diminuirPadding"/>
                    <div className="arrumarForm">

                        <input type="text" id="evento__titulo" placeholder="Título" onInput={this.atualizarTitulo} /> <br/>
                        <input type="text" id="evento__localizacao" placeholder="Sinopse" onInput={this.atualizarSinopse} /><br/>
                        <input type="text" id="evento__data" placeholder="Duração" onInput={this.atualizarTempoDuração} /><br/>
                        <input type="date" id="evento__data" placeholder="dd/MM/yyyy" onInput={this.atualizarDataLancamento} /><br/>
                        <input type="text" placeholder="Descrição" onInput={this.atualizarDescricao} id="evento__descricao" /> <br/>
                        <select onInput={this.atualizarTipo} value={this.state.tipoSelecionado}><br/>
                            <option selected>Tipo</option>
                            <option value='1'>Série</option>
                            <option value='2'>Filme</option>
                            <option value='3'>Anime</option>
                            <option value='4'>Desenho</option>
                        </select><br/>
                        <select onInput={this.atualizarCategoria} value={this.state.categoriaSelecionada}> 
                            <option selected>Categoria</option>
                            {this.state.categoria.map(element => {
                                return (
                                    <option value={element.idCategoria}>{element.nome}</option>
                                )
                            })}
                        </select><br/>
                        <select onChange={this.atualizarPlataforma} value={this.state.plataformaSelecionada}>
                            <option selected>Plataforma</option>

                            {this.state.plataforma.map(element => {
                                return (
                                    <option value={element.idPlataforma}>{element.nome}</option>
                                )
                            })}
                        </select><br/>
                        <button className="" onClick={this.adicionaItem}>Cadastrar</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CadastroLancamentos;