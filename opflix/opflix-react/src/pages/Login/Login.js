import React, {Component} from 'react';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }
    atualizaEstadoEmail = (event) =>{
        this.setState({email: event.target.value});
    }
 
    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value});
    }
    efetuarLogin = (event) =>{
        event.preventDefault();
        
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email, 
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix",response.data.token); 
                    this.props.history.push('/lancamentos');
                }else{
                    console.log('eitaa');
                }
            })
            .catch(erro => { 
                this.setState({ erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default Login;