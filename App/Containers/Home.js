import React, { Component }  from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from 'react-native';

export default class Home extends Component{
	componentDidMount() {
    BackHandler.addEventListener('backPress', () => {
      if (this.props.navigation.state.routeName = 'Home') {
      	return true;
    	} 
      return false
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress')
  }

	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity style={styles.box1} onPress={() => this.props.navigation.navigate('Screen1')}>
					<Text >Screen1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.box2} onPress={() => this.props.navigation.navigate('Screen2')}>
					<Text >screen2</Text>
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
    flexDirection:'row'
  },
  box1: {
  	flex:0.5,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding:10,
    alignItems: 'center',
  },
  box2: {
  	flex:0.5,
    backgroundColor: 'pink',
    borderRadius: 20,
    padding:10,
    alignItems: 'center',
  },

})