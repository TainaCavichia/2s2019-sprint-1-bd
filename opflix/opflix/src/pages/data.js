import React, { Component } from 'react';
import { Text, View,FlatList, TextInput, StyleSheet, AsyncStorage, Image, TouchableOpacity, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'

class Data extends Component {
  constructor() {
    super();
    this.state = {
      lancamentos: [],
      Data: "0",
    };
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/data.png')}
        style={{ width: 25, height: 25, tintColor: '#fff' }}
      />
    )
  }

  componentDidMount(){
    console.disableYellowBox = true;

  }

  _listaVazia = () => {
    let teste = this.state.Data;

    if(teste == "0"){
        return (
            <View>
            <Text style={{ textAlign: 'center' }}></Text>
        </View>
        );
    }else{
        return (
            <View>
            <Text style={{ textAlign: 'center', color: "white" }}>Nenhum filme encontrado nessa data.</Text>
        </View>
    );
}
};

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
         <StatusBar
                barStyle="light-content"
                // dark-content, light-content and default
                hidden={false}
                //To hide statusBar
                backgroundColor="#000000"
                //Background color of statusBar only works for Android
                translucent={false}
                //allowing light, but not detailed shapes
                networkActivityIndicatorVisible={true}
            />
        <Image style={styles.icone} source={require('../assets/img/logovermelho.png')} />
        <Text style={styles.title}>l a n ç a m e n t o s</Text>
        <DatePicker
        style={{width: 200}}
        date={this.state.Data}
        mode="date"
        format="YYYY-MM-DD"
        minDate="1993-01-01"
        maxDate="2020-01-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={Data => this.setState({ Data })}
      /> 
        <TouchableOpacity style={styles.button} onPress={this._carregarLancamentos}>
          <Text style={styles.letraButton}>Filtrar</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.lancamentos}
          ListEmptyComponent={this._listaVazia}
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
        <Text></Text>
        <Text></Text>
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
  icone: {
    marginTop: "10%"
  },
  white: {
    color: 'white',
    fontSize: 17,
    textAlign: "left",
    paddingLeft: 10,
  },
  input: {
    color: 'white',
    fontSize: 17,
    borderBottomColor: '#670309',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "60%",
  },
  title: {
    color: 'white',
    fontSize: 22,
    textAlign: "center",
    padding: 25,
  },
  box: {
    marginTop: 20,
    width: 320,
},
filme: {
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#670309',
    borderRadius: 10,
    color: 'white',
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
    marginBottom: 30,
  },
});
export default Data;