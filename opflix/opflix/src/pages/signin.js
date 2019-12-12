import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native';

class SignIn extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            email: "t@ata.com",
            senha: "123123",
        };
    }
    componentDidMount() {
        this._verificacao();
        console.disableYellowBox = true;

    }

    _verificacao = async () => {
        if (await AsyncStorage.getItem('@opflix:token') != null) {
            this.props.navigation.navigate('MainNavigator')
        }
    }

    _realizarLogin = async () => {
        fetch('http://192.168.4.240:5001/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
            .then(resposta => resposta.json())
            .then(data => this._irParaHome(data.token))
            .catch(erro => console.warn('caiu no catch bb' + erro));
    };

    _irParaHome = async (tokenRecebido) => {
        if (tokenRecebido != null) {
            try {
                await AsyncStorage.setItem('@opflix:token', tokenRecebido);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {

            }
        }
    };

    render() {
        return (
            <View style= {styles.background}>
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
                <Image source={require('../assets/img/logovermelho.png')}/>
                <TextInput style= {styles.white} value={this.state.email} placeholder='email' placeholderTextColor="#aaa" onChangeText={email => this.setState({ email })}></TextInput>
                <TextInput style= {styles.white} value={this.state.senha} placeholder='senha' secureTextEntry={true} placeholderTextColor="#aaa" onChangeText={senha => this.setState({ senha })}></TextInput>
                <TouchableOpacity onPress={this._realizarLogin} style={styles.button}>
                    <Text style= {styles.letraButton} >Login</Text>
                </TouchableOpacity>
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
      borderBottomColor: '#670309',
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: "90%",
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

export default SignIn;