import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, Picker, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            lancamentos: [],
            categorias: [],
            categoriaSelecionada: null,
        };
    }

    componentDidMount() {
        this._carregarCategorias();
        this._carregarLancamentos();
    }
    _carregarCategorias = async () => {
        await fetch('http://192.168.4.240:5000/api/categorias', {
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + await AsyncStorage.getItem('@opflix:token')
            },
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ categorias: data }))
            .catch(erro => console.warn(erro));
    }
    _carregarLancamentos = async () => {
            await fetch('http://192.168.4.240:5000/api/lancamentos/filtrarporcategoria/' + this.state.categoriaSelecionada, {
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
                <Picker
                    selectedValue={this.state.categoriaSelecionada}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue) =>
                        this.setState({ categoriaSelecionada: itemValue })
                    }>
                        <Picker.item label="Categoria" value="0" selectedValue/>
                    {this.state.categorias.map(element => {
                        return (
                            <Picker.Item label={element.nome} value={element.nome} />
                        )
                    })}
                </Picker>
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
                        <Text>{item.idCategoriaNavigation.nome}</Text>
                        <Text>{item.idTipoNavigation.nome}</Text>
                        <Text>{item.tempoDuracao}</Text>
                        <Text>{item.dataLancamento}</Text>
                        <Text>{item.idPlataformaNavigation.nome}</Text>
                        <Text>{item.descricao}</Text>
                    </View>
                )}
                />
            </View>
        );
    }
}

export default Categorias;