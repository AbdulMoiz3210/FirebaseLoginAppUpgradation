import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}>Abdul Moiz</Text>
        </View> 
      );           
    } 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(211, 100%, 50%, 0.5)',
    
  },
  name: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    
  }
});
export default Header;