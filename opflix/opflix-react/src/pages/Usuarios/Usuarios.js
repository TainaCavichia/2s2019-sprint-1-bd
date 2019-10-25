import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import Axios from 'axios';
import '../../assets/css/stylesheet.css';
import {Link} from 'react-router-dom';

//listar usuários do bd
class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/usuarios', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ lista: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    render() {
        return (
            <div>
                <header>
                    <div >
                        <nav className="container">
                            <div className="conteudo-imagem">
                                <img className="logo" src="https://fontmeme.com/permalink/191012/f031c30da3e8b41e40dc9ad5f3a3559e.png" />
                            </div>
                            <div className="admin">
                            <Link to="/criarcontaadm">Cadastrar usuários</Link>
                            </div>
                        </nav>
                    </div>
                </header>
                <body>
    <main>
        <section>
            <h2>u s u á r i o s</h2>
        <div>
            <table id="tabela-lista">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>nome</th>
                    <th>email</th>
                    <th>data</th>
                    <th>cpf</th>
                    <th>telefone</th>
                    <th>tipo</th>
                    </tr>
                </thead>
        
                <tbody id="tabela-lista-corpo">
            {
                this.state.lista.map(element =>{
                    return (
                        <tr>
                            <td>{element.idUsuario}</td>
                            <td>{element.nome}</td>
                            <td>{element.email}</td>
                            <td>{element.dataNascimento}</td>
                            <td>{element.cpf}</td>
                            <td>{element.telefone}</td>
                            <td>{element.idTipoUsuarioNavigation.tipoUsuario}</td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
        </div>
    </section>
    
</main>
</body>
<Footer/>
            </div>
        )
    }

}

export default Usuarios;