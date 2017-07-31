import React, { Component }  from 'react';
import {addNavigationHelpers} from 'react-navigation';

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
		console.log(this.props,"route");
		console.log(this.props.navigation,"route");
    BackHandler.addEventListener('backPress', () => {
      const { dispatch, nav } = this.props
      if (this.props.navigation.state.routeName = 'Home') {
      	return true;
    	} 
      this.props.navigation.goBack()
      return false
    })
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('backPress')
  }
	render(){
		const { dispatch, nav } = this.props;
		const navigation = addNavigationHelpers({dispatch, state: nav});
		console.log(nav.index ,"nav")

		return(
			<View style={styles.container}>
				<TouchableOpacity style={styles.box1} onPress={() => this.props.navigation.navigate('Screen1')}>
					<Text >screen1</Text>
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
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
    padding:10,
    alignItems: 'center',
  },
  box2: {
  	flex:0.5,
    backgroundColor: 'pink',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
    padding:10,
    alignItems: 'center',
  },

})