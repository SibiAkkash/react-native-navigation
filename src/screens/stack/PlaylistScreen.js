import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PlayListScreen extends React.Component {
  static navigationOptions = {
		drawerLabel: 'PlayLists',
		drawerIcon: () => <Image source={require('./playlist.png')} style={{width: 30, height: 30}}/>,
	};
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the PlayList Screen</Text>
            </View>
        );
    }
}

export default PlayListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
