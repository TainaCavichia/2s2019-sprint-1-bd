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
        fetch('http://localhost:5000/api/plataformas')
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
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
        
    }

    adicionaPlataformas = () =>{
        let valores_lista = this.state.lista;
        let plataforma = {nome: this.state.nome}

        valores_lista.push(plataforma);

        this.setState({lista: valores_lista});
    }

    atualizarNome = (event) =>{
        this.setState({nome: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default Plataformas; 