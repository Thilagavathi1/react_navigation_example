import React, { Component }  from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component{
	render(){
		return(
			<View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() =>this.navigationFunction()}>
					<Text >Login!!!</Text>
				</TouchableOpacity>
			</View>
		)
	}
  navigationFunction(){
		this.props.navigation.navigate('Home')
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
    padding:10
  }
})


