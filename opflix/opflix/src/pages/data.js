import React, { Component } from 'react';
import { Text, View,FlatList, TextInput, StyleSheet, AsyncStorage, Image, TouchableOpacity } from 'react-native';

class Data extends Component {
  constructor() {
    super();
    this.state = {
      lancamentos: [],
      Data: null,
    };
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
      <View style={styles.background}>
        <Image source={require('../assets/img/logovermelho.png')} />
        <TextInput style={styles.input} placeholder='data lançamento' onChangeText={Data => this.setState({ Data })}></TextInput>
        <TouchableOpacity style={styles.button} onPress={this._carregarLancamentos}>
          <Text style={styles.letraButton}>Filtrar</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.lancamentos}
          keyExtractor={item => item.idLancamento}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text style={styles.filme}>{item.titulo}</Text>
              <Text style={styles.white}>{item.sinopse}</Text>
              <Text style={styles.white}>{item.idCategoriaNavigation.nome}</Text>
              <Text style={styles.white}>{item.idTipoNavigation.nome}</Text>
              <Text style={styles.white}>{item.tempoDuracao}</Text>
              <Text style={styles.white}>{item.dataLancamento}</Text>
              <Text style={styles.white}>{item.idPlataformaNavigation.nome}</Text>
              <Text style={styles.white}>{item.descricao}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
  },
  white: {
    color: 'white',
    fontSize: 17,
    textAlign: "left",
  },
  input: {
    color: 'white',
    fontSize: 17,
    borderBottomColor: '#670309',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "90%",
  },
  title: {
    color: 'white',
    fontSize: 22,
    textAlign: "center",
    padding: 50,
  },
  box: {
    backgroundColor: '#670309',
    borderRadius: 10,
    width: '100%',
    height: '34%',
    marginTop: 10,
  },
  filme: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  letraButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: '#670309',
    color: 'white',
    borderRadius: 10,
    width: '30%',
    height: 30,
    marginTop: 50,
  },
});
export default Data;