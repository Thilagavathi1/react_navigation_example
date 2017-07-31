import React, { Component }  from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Screen1 extends Component{
	render(){
		return(
			<View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() =>this.props.navigation.navigate('Screen3')}>
					<Text>Click here to navigate Screen3</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
    padding:10,
  }
})