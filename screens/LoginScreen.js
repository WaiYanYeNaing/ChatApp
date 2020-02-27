import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class LoginScreen extends Component {
  state = {
    name: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
