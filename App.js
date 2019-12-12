import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ParksScreen from './ParksScreen'

class HomeScreen extends React.Component {
  render() {
    return (
        <ImageBackground source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/6126449759_970e106a5e_o.jpg"}}
        style={styles.container}>
      <Button
          title="See polish parks"
          onPress={() => this.props.navigation.navigate('Parks')}
        />

        </ImageBackground>

    )}
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inner: {
      width: '80%',
      height: '80%',
      backgroundColor: 'rgba(255, 255, 255, .7)'
    }
})



const RootStack = createStackNavigator({
  Home: HomeScreen,
  Parks: ParksScreen,
});

export default createAppContainer(RootStack);