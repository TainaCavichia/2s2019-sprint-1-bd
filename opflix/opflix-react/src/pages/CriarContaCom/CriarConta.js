import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Titulo from '../../components/Titulo/Titulo'
import '../../assets/css/categorias.css';

//cadastrar usuários
class CriarConta extends Component{
render(){
    return(
        <div>
            <header>
    <div >
        <nav className="container">
        <div className="conteudo-imagem">
            <img className="logo" src="https://fontmeme.com/permalink/191012/f031c30da3e8b41e40dc9ad5f3a3559e.png"/>
        </div>
        <div className="menu">
            <li>Home</li>
            <li>Login</li>
        </div>
        </nav>
    </div>
</header>
<body>
    <main>
        <section>
            <h2>c r i a r  c o n t a</h2>
        <div>
            <form>
                <div>
                    <input className="input_usuario"
                    placeholder="nome"
                    name="name"
                    type="text"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    placeholder="email"
                    name="email"
                    type="email"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    placeholder="nascimento"
                    type="date"
                    name="date"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    placeholder="cpf"
                    type="text"
                    name="cpf"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    placeholder="telefone"
                    type="tel"
                    name="telefone"/> 
                </div>
                <div>
                    <input className="input_usuario"
                    placeholder="senha"
                    type="password"
                    name="senha"/> 
                </div>
                <div>
                    <button className="btn_categoria">Cadastrar</button>
                </div>
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

export default CriarConta;