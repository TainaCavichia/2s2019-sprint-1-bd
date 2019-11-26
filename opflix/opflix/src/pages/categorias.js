import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, SafeAreaView, Picker, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            lancamentos: [],
            categorias: [],
            categoriaSelecionada: "0",
        };
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/categoria.png')}
                style={{ width: 25, height: 25, tintColor: '#fff' }}
            />
        )
    }

    _listaVazia = () => {
        let teste = this.state.categoriaSelecionada;
    
        if(teste == "0"){
            return (
                <View>
                <Text style={{ textAlign: 'center' }}></Text>
            </View>
            );
        }else{
            return (
                <View>
                <Text style={{ textAlign: 'center',color: "white" }}>Nenhum filme encontrado nessa categoria.</Text>
            </View>
        );
    }
    };

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
                <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
                    <View style={styles.background}>
                        <Image style={styles.icone} source={require('../assets/img/logovermelho.png')} />
                        <Text style={styles.title}>l a n ç a m e n t o s</Text>
                        <View style={{ borderWidth: 0.5, width: "80%", marginTop: 20, borderColor: "#670309" }}>
                            <Picker
                                selectedValue={this.state.categoriaSelecionada}
                                style={{ height: 50, width: "100%", color: "#fff", backgroundColor: "black", fontSize: 18 }}
                                onValueChange={(itemValue , itemIndex) => {
                                    this.setState({ categoriaSelecionada: itemValue })
                                }}>
                                <Picker.item label="Categoria" value="0" selectedValue />
                                {this.state.categorias.map(element => {
                                    return (
                                        <Picker.Item label={element.nome} value={element.nome} />
                                    )
                                })}
                            </Picker>
                        </View>
                        <TouchableOpacity onPress={this._carregarLancamentos} style={styles.button}>
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
        paddingLeft: 10,
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
        padding: 25,
    },
    box: {
        marginTop: 20,
        width: 320,
    },
    icone: {
        marginTop: "10%"
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
    button: {
        backgroundColor: '#670309',
        borderRadius: 10,
        width: '30%',
        height: 30,
        marginTop: 50,
        marginBottom: 30,
    },
    container: {
        backgroundColor: "black",
        flex: 1,
    },
});
export default Categorias;