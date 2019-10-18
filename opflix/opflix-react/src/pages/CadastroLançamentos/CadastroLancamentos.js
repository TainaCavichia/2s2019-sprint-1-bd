import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'

class CadastroLancamentos extends Component{
    constructor() {
        super();
        this.state = {
            lista: []
            ,titulo=""
            ,sinopse=""
            ,tempoDuracao=""
            ,dataLancamento=""
            ,descricao=""
            ,idTipoNavigation=""
            ,idCategoriaNavigation=""
            ,idPlataformaNavigation="",
            categoria:[],
            categoriaSelecionada="",
            plataforma:[],
            plataformaSelecionada=""
        };
    }

    listaAtualizada = () => {
        fetch('http://localhost:5000/api/lancamentos', { headers: {

            'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
        },})
            .then(response => response.json())
            .then(data => this.setState({ lista: data }))
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.li);
        Axios.post('http://localhost:5000/api/usuarios', {
            titulo: this.state.titulo, 
            sinopse: this.state.sinopse,
            tempoDuracao: this.state.tempoDuracao,
            dataLancamento: this.state.dataLancamento,
            descricao: this.state.descricao,
            idTipoNavigation: this.state.idTipoNavigation,
            idCategoriaNavigation: this.state.idCategoriaNavigation,
            idPlataformaNavigation: this.state.idPlataformaNavigation
        })
        .then(response =>{console.log(response)})
        .catch(erro => { 
            this.setState({ erro: "Não foi possível cadastrar"});
            console.log(erro);
        });
    }

    atualizaInput = (event)=>{
        this.setState({titulo: event.target.value},
                      {sinopse: event.target.value},
                      {tempoDuracao: event.target.value},
                      {dataLancamento : event.target.value},              
                      {descricao : event.target.value},              
                      {idTipoNavigation: event.target.value},            
                      {idCategoriaNavigation: event.target.value},            
                      {idPlataformaNavigation: event.target.value}              
        )
      }

    render(){
        return(
            <div>
                 <div className="container" id="conteudoPrincipal-cadastro">
                            <Titulo titulo="Cadastrar Lançamento"/>
                            <div className="container">

                                <input type="text" id="evento__titulo" placeholder="título"  value={this.state.titulo} onChange={this.atualizaInput}/>
                                <input type="text" id="evento__localizacao" placeholder="sinopse" value={this.state.sinopse} onChange={this.atualizaInput}/>
                                <input type="text" id="evento__data" placeholder="duração" value={this.state.tempoDuracao} onChange={this.atualizaInput}/>
                                <input type="text" id="evento__data" placeholder="dd/MM/yyyy" value={this.state.dataLancamento} onChange={this.atualizaInput}/>
                                <textarea rows="3" cols="50" placeholder="descrição do evento"  value={this.state.descricao} onChange={this.atualizaInput} id="evento__descricao"></textarea>
                                <select onInput={this.atualizaInput}>
                                //Tipo não tem listar, escreve na mão
                                <option selected>Tipo</option>
                                <option value='1'>Série</option>
                                <option value='2'>Filme</option>
                                <option value='3'>Anime</option>
                                <option value='4'>Desenho</option>
                            </select>
                            <select onInput={this.atualizaInput} value={this.state.categoriaSelecionada}>
                                <option selected>Categoria...</option>
                                {this.state.categoria.map(element => {
                                    return (
                                        <option value={element.idCategoria}>{element.nome}</option>
                                    )
                                })}
                            </select>
                            <select onChange={this.atualizaInput} value={this.state.plataformaSelecionada}>
                                <option selected>Plataforma</option>

                                {this.state.plataforma.map(element => {
                                    return (
                                        <option value={element.idPlataforma}>{element.nome}</option>
                                    )
                                })}
                            </select>

                            </div>
                            <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" onClick={this.adcionaItem}>Cadastrar</button>
                        </div>
                        <Footer/>
            </div>
        )
    }
}

export default CadastroLancamentos;