import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import Axios from 'axios';

class Lancamentos extends Component{
    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/lancamentos',{
            headers: {
                Authorization: 'Bearer '+localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({lista: data.data});
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    render()
    {
        return(
            <div>
            <Titulo titulo='Lançamentos' />
               <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Titulo</th>
                                        <th>Sinopse</th>
                                        <th>Categoria</th>
                                        <th>Tipo</th>
                                        <th>Duração</th>
                                        <th>Data</th>
                                        <th>Plataforma</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {this.state.lista.map(element => {
                                        return (
                                            <tr key={element.idLancamento}>
                                                <tr>{element.idLancamento}</tr>
                                                <td>{element.titulo}</td>
                                                <td>{element.sinopse}</td>
                                                <td>{element.idCategoriaNavigation.nome}</td>
                                                <td>{element.idTipoNavigation.nome}</td>
                                                <td>{element.tempoDuracao}</td>
                                                <td>{element.dataLancamento}</td>
                                                <td>{element.idPlataformaNavigation.nome}</td>
                                                <td>{element.descricao}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <Footer/> 
            </div>
        )
    }
}

export default Lancamentos;