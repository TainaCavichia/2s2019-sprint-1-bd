import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import Login from './pages/Login/Login';
import Lancamentos from './pages/Lançamentos/Lancamentos';
import Usuarios from './pages/Usuarios/Usuarios';
import Categorias from './pages/Categorias/Categorias';
import Plataformas from './pages/Plataformas/Plataformas';
import CadastroLancamentos from './pages/CadastroLançamentos/CadastroLancamentos';
import CriarConta from './pages/CriarContaCom/CriarConta';
import CriarContaAdm from './pages/CriarContaAdm/CriarContaAdm';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

const RotaPrivada = ({component: Component}) =>(
    <Route 
    render = {props => 
        localStorage.getItem("usuario-opflix") !== null ? 
            <Component {...props}/> : <Redirect to={{ pathname: "/login", state: {from: props.location} }}/>
            }
    >        
    </Route>
)
const routing = (
    <Router>
        <div>
            <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/lancamentos' component={Lancamentos}/>
            <RotaPrivada path='/categorias' component={Categorias}/>
            <RotaPrivada path='/plataformas' component={Plataformas}/>
            <RotaPrivada path='/cadastrolancamentos' component={CadastroLancamentos}/>
            <RotaPrivada path='/criarcontaadm' component={CriarContaAdm}/>
            <RotaPrivada path='/usuarios' component={Usuarios}/>
            <Route path='/criarconta' component={CriarConta}/>
            <Route path='/login' component={Login}/>
            </Switch>
        </div>
    </Router>

)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
