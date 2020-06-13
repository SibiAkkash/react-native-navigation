import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class ContactScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Contact',
		drawerIcon: () => <Image source={require('./google.jpg')} style={{width: 20, height: 20}}/>,
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>This is the Contact Screen</Text>
			</View>	
		);
	}
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
	width: 20,
	height: 20,
  }
});
