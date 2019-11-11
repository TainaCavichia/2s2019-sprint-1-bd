import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            lancamentos: [],
        };
    }

    componentDidMount() {
        this._carregarLancamentos();
    }

    _carregarLancamentos = async () => {
        try {
            let token = await AsyncStorage.getItem('@opflix:token');
            await fetch('http://192.168.4.240:5000/api/lancamentos', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token
                },
            })
                .then(resposta => resposta.json())
                .then(data => this.setState({ lancamentos: data }))
        } catch (error) {

        }
    };

    render() {
        return (
        <View>
            <Image source={require('../assets/img/logovermelho.png')}/>
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

export default Main;