import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import Login from './pages/Login/Login';
import Lancamentos from './pages/Lançamentos/Lancamentos';
import LancametosAdmin from './pages/LançamentosAdmin/LancamentosAdmin';
import Usuarios from './pages/Usuarios/Usuarios';
import Categorias from './pages/Categorias/Categorias';
import Plataformas from './pages/Plataformas/Plataformas';
import CadastroLancamentos from './pages/CadastroLançamentos/CadastroLancamentos';
import CriarConta from './pages/CriarContaCom/CriarConta';
import CriarContaAdm from './pages/CriarContaAdm/CriarContaAdm';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { parseJwt } from '../src/services/auth';

const RotaPrivada = ({ component: Component}) => (
    <Route 
        render={
            props =>
                parseJwt().Permissao === '2' ? (
                    <Lancamentos {...props} />
                ) : (
                    <LancametosAdmin {...props} />
                )
        }
    />
);

const PermissaoADM = ({ component: Component }) => (
    <Route
        render={
            props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                parseJwt().Permissao === "1" ? (
                    <Component {...props} />
                ) : (
                    //fazer pagina nao encontrado
                        // <NaoEncontrado/>
                        <Redirect 
                        to={{ pathname: "/login", state: {from: props.location}}}
                    />
                    )
            )
                    : (
                        <Redirect 
                            to={{ pathname: "/login", state: {from: props.location}}}
                        />
                    )
        }
    />
);



const routing = (
    <Router>
        <div>
            <Switch>
            <Route exact path='/' component={App}/>
            <RotaPrivada path='/lancamentos' component={Lancamentos}/>
            <PermissaoADM path='/lancamentosadmin' component={LancametosAdmin}/>
            <PermissaoADM  path='/categorias' component={Categorias}/>
            <PermissaoADM  path='/plataformas' component={Plataformas}/>
            <PermissaoADM  path='/cadastrolancamentos' component={CadastroLancamentos}/>
            <PermissaoADM  path='/criarcontaadm' component={CriarContaAdm}/>
            <PermissaoADM  path='/usuarios' component={Usuarios}/>
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
