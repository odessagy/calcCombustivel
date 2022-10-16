import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, Modal, TextInput, TouchableOpacity, Button} from 'react-native';

export default class Calcula extends Component {

  render(){

    return (

              <View style={styles.viewResultado}>
                
                    <Image
                    source={require('./img/gas.png')}
                    
                    />
                    <Text style={styles.textTitle}>
                    {this.props.result}
                    </Text>
                    <Text style={styles.textoInput}>Com os preços:</Text>
                    <Text style={styles.texto}>Etanol: {this.props.resultEtanol} </Text>
                    <Text style={styles.texto}>Gasolina: {this.props.resultGasolina} </Text>
                    <TouchableOpacity style={styles.button} onPress={this.props.fechar}>
                    <Text style={styles.txtButton}>Calcular novamente</Text>
                    </TouchableOpacity>

                
              </View>

    );
  }
}

const styles = StyleSheet.create({

  viewResultado: { 
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center'
  },

  textTitle: {
    color: '#4FFF33',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 20,
    marginBottom: 30
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textoInput: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15
  },
  button: {
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FF5733',
    marginTop: 15
  },
  txtButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  }
});
