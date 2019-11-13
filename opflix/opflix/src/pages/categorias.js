import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage,SafeAreaView, Picker, TouchableOpacity, ScrollView } from 'react-native';
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
            <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1, backgroundColor:"black"}}>
                <View style={styles.background}>
                    <Image source={require('../assets/img/logovermelho.png')} />
                    <Text style={styles.title}>l a n ç a m e n t o s</Text>
                    <Picker
                        selectedValue={this.state.categoriaSelecionada}
                        style={{ height: 50, width: "80%",backgroundColor: "white", fontSize: 18,}}
                        onValueChange={(itemValue) =>
                            this.setState({ categoriaSelecionada: itemValue })
                        }>
                        <Picker.item label="Categoria" value="0" selectedValue />
                        {this.state.categorias.map(element => {
                            return (
                                <Picker.Item label={element.nome} value={element.nome} />
                            )
                        })}
                    </Picker>
                    <TouchableOpacity onPress={this._carregarLancamentos} style={styles.button}>
                        <Text style= {styles.letraButton}>Filtrar</Text>
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
            </ScrollView>
            </SafeAreaView>
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
    letraButton: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 20,
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
        maxWidth: "100%",
        width: '90%',
        height: '12%',
        marginTop: 100,
    },
    filme: {
        color: 'black',
        fontWeight: "bold",
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
      container: {
        backgroundColor: "black",
        flex: 1,
    },
});
export default Categorias;