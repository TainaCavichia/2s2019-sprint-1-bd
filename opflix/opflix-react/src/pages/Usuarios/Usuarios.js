import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import Axios from 'axios';

//listar usuários do bd
class Usuarios extends Component{
    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/usuarios')
            .then(data => {
                this.setState({lista: data.data});
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    render()
    {
        return(
            <div>
                
            </div>
        )
    }

}

export default Usuarios;