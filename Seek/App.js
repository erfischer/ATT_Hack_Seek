import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} width = '100%'>
        <Button
        onPress = {console.log('aye stop it')}
        title = "Map"
        color = "#841584"
        accessibilityLabel = "Learn more about this purple button"
        width = '50%'
        />

        <Button
        onPress = {console.log('aye stop it')}
        title = "Map"
        color = "#841584"
        accessibilityLabel = "Learn more about this purple button"
        style = {styles.v1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },

  v1: {
    width: '50%',
    flex: 1,
    padding: 300
  }
});
