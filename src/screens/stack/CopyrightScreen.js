import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CopyrightScreen extends React.Component {
  static navigationOptions = {
		drawerLabel: 'Copyright',
		drawerIcon: () => 
    <Image 
      source={require('./copyright.png')} 
      style={{width: 20, height: 20}}
    />,
	};
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the Copyright Screen !!</Text>
            </View>
        );
    }
}

export default CopyrightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
