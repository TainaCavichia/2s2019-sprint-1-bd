import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, SafeAreaView, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

class Main extends Component {
    constructor() {
        super();
        this.state = {
            lancamentos: [],
            screenHeight: 0,
        };
    }
    onContentSizeChange = ( contentWidth, contentHeight ) => {
        this.setState({screenHeight: contentHeight});
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
        const scrollEnabled = this.state.screenHeight > height
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView 
                    style={{flex: 1}}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                >
                    <View style={styles.background}>
                        <Image source={require('../assets/img/logovermelho.png')} />
                        <Text style={styles.title}>l a n ç a m e n t o s</Text>
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
    title: {
        color: 'white',
        fontSize: 22,
        textAlign: "center",
        padding: 50,
    },
    box: {
        backgroundColor: '#670309',
        borderRadius: 10,
        width: '90%',
        height: '12%',
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
});
export default Main;