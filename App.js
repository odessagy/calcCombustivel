import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, Modal, TextInput, TouchableOpacity} from 'react-native';
import Calcula from './src/Calcula'

export default class App extends Component {

  constructor(props){
    super (props)
    this.state ={
      etanol: 0,
      gasolina: 0,
      resposta: '',
      modalVisible: false
    }

    this.valueEtanol = this.valueEtanol.bind(this)
    this.valueGasolina = this.valueGasolina.bind(this)
    this.calcula = this.calcula.bind(this)
    this.retornar = this.retornar.bind(this)
  }

  valueEtanol(valor){
    this.setState({etanol: valor})
  }

  valueGasolina(valor){
    this.setState({gasolina: valor})
  }

  calcula(){
    let resultado
    if(this.state.etanol === 0 || this.state.gasolina === 0){
      alert('Preencha todos os campos')
      return
    }
    resultado = this.state.etanol / this.state.gasolina
    if(resultado<=0.7){
      this.setState({resposta: 'Compensa usar Etanol'})
    }else{
      this.setState({resposta: 'Compensa usar Gasolina'})
    }
    this.setState({modalVisible: true})
  }

  retornar(visible){
    this.setState({modalVisible: visible})
  }

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.body}>

          <View style={styles.viewLogo}>
            <Image
              source={require('./src/img/logo.png')}
            />
            <Text style={styles.textTitle}>Qual melhor opção?</Text>
          </View>

          <View style={styles.viewinputs}>
            <Text style={styles.textoInput}>Etanol (preço por litro):</Text>
            <TextInput 
              style={styles.input}
              keyboardType='numeric'
              onChangeText={this.valueEtanol}
            />

            <Text style={styles.textoInput}>Gasolina (preço por litro):</Text>
            <TextInput 
              style={styles.input}
              keyboardType='numeric'
              onChangeText={this.valueGasolina}
            />

            <TouchableOpacity style={styles.button} onPress={this.calcula}>
              <Text style={styles.txtButton}>Calcular</Text>
            </TouchableOpacity>

            <Modal animationType='slide' visible={this.state.modalVisible}>
              <View style={styles.modal}>
                <Calcula 
                fechar={ ()=> this.retornar(false)} 
                result={this.state.resposta}
                resultEtanol={this.state.etanol}
                resultGasolina={this.state.gasolina} 
                />
              </View>
            </Modal>

            
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17202A',
    justifyContent: 'center',
  },
  body: { 
    marginLeft: 20,
    marginRight: 20
  },
  viewLogo: {
    alignItems: 'center'
  },
  textTitle: {
    color: '#fff',
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
  modal: {
    justifyContent: 'center', 
    backgroundColor: '#17202A', 
    flex: 1
  }
});
