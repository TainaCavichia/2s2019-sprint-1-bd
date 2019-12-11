import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import logo from '../../assets/img/logovermelho.png';
import { Link } from 'react-router-dom';

class Mapa extends Component {

  constructor() {
    super();
    this.state = {
      Localizacoes: []
    }
  }

  carregar = () => {
    fetch("http://192.168.4.240:5001/api/localizacoes", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ Localizacoes: data }), console.log(this.state.Localizacoes))
      .catch(error => console.log(error));
  }

  marcadores = () => {
    let marcador = [];
    this.state.Localizacoes.forEach(element => {
      marcador.push(
        <Marker title={element.lancamento.titulo} position={{ lat: element.latitude, lng: element.longitude }} />
      )
    })
    return marcador;
  }

  componentWillMount() {
    this.carregar();
  }

  render() {
    return (
      <body style={{ width: '100%', height: '100vh' }}>
        <nav className="mennnu">
          <ul>
            <img src={logo} alt="" />
            <li><Link to='/lancamentos'>Lançamentos</Link></li>
            <li><Link onClick={this.Logout} to='/'>Logout</Link></li>
          </ul>
        </nav>
        <Map google={this.props.google}
          className={'map'}
          zoom={11}
          initialCenter={{
            lat: -23.5299047,
            lng: -46.753078
          }}
        >
        {this.marcadores()}
                </Map>
            </body >
        )
  }
}

export default GoogleApiWrapper({
  apiKey: ("")
})(Mapa)

