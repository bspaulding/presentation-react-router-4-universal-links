import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const H2 = Text;
const Code = Text;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1
	},
	header: {
		backgroundColor: '#222',
		flex: 1,
		height: '150px',
		padding: '20px',
	},
	headerText: {
		color: 'white',
	},
	intro: {
		fontSize: 'large'
	}
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <H2 style={styles.headerText}>Welcome to React</H2>
        </View>
        <Text style={styles.intro}>
          To get started, edit <Code>src/App.js</Code> and save to reload.
        </Text>
      </View>
    );
  }
}

export default App;
