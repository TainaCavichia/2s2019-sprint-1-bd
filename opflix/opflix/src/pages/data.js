import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, AsyncStorage, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Data extends Component {
  constructor() {
    super();
    this.state = {
      lancamentos: [],
      Data: null,
    };
  }

  componentDidMount() {
    this._carregarLancamentos();
  }

  _carregarLancamentos = async () => {
    await fetch('http://192.168.4.240:5000/api/lancamentos/filtrarpordata/' + this.state.Data, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + await AsyncStorage.getItem('@opflix:token')
      },
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({ lancamentos: data }))
      .catch(erro => console.warn(erro));
  };

    render() {
      return (
      <View>
        <Image source={require('../assets/img/logovermelho.png')}/>
        <TextInput placeholder='data lançamento' onChangeText={Data => this.setState({ Data })}></TextInput>
        <TouchableOpacity onPress={this._carregarLancamentos}>
            <Text>Filtrar</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.lancamentos}
          keyExtractor={item => item.idLancamento}
          renderItem={({ item }) => (
            <View>
              <Text>{item.titulo}</Text>
              <Text>{item.sinopse}</Text>
              <Text>{item.idCategoria}</Text>
              <Text>{item.idTipo}</Text>
              <Text>{item.tempoDuracao}</Text>
              <Text>{item.dataLancamento}</Text>
              <Text>{item.idPlataforma}</Text>
              <Text>{item.descricao}</Text>
            </View>
          )}
          />
        </View>
      );
    }
  }

export default Data;