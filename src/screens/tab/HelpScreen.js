import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HelpScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the Help Screen !!</Text>
            </View>
        );
    }
}

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
