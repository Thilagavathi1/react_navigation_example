import React, { Component }  from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Screen3 extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>Screen3!!!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})