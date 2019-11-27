import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native';
import JwtDecode from 'jwt-decode';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
        };
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/profile.png')}
                style={{ width: 25, height: 25, tintColor: '#fff' }}
            />
        )
    }

    componentDidMount() {
        this._buscarDadosDoStorage();
    }

    _buscarDadosDoStorage = async () => {
        this.setState({ nome: JwtDecode(await AsyncStorage.getItem('@opflix:token')).Nome });
        this.setState({ email: JwtDecode(await AsyncStorage.getItem('@opflix:token')).Email });
    }

    _Logout = async (event) => {
        AsyncStorage.removeItem('@opflix:token');
        this.props.navigation.navigate('AuthStack')
    }

    render() {
        return (
            <View style={styles.background}>
                <Image source={require('../assets/img/logovermelho.png')}/>
                <Image style={{ width: 80, height: 80, tintColor: '#fff', margin: 30}} source={require('../assets/img/64572.png')}/>
                <Text style={{color: "white", fontSize: 20}}>Bem vindo(a) {this.state.nome}</Text>
                <Text style={{color: "white", fontSize: 20}}>Email: {this.state.email}</Text>
            <TouchableOpacity onPress={this._Logout}><Text style={{ fontSize: 25, color: "#aaa", fontWeight: "bold", marginTop: 15 }}>Sair</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        height: '100%',
        alignItems: 'center',
        justifyContent: "center",
    },
});
export default Profile;