import React, {Component} from 'react';
import {Image , View ,StyleSheet , ImageBackground} from 'react-native';


class Profilepic extends Component {
    render(){
  
     return (
           
        <View style={styles.container}>
    
         <Image source = {require('../components/images/AbdulMoiz.png')} style={styles.mypic} />
     
        </View>
         
     );        
    }
}

const styles = StyleSheet.create ({
        
    mypic : {
        marginTop: 5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "black",
        width: 100,
        height: 100,
        
        
    },
    container : {
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor: 'hsla(177, 100%, 50%, 0.43)',
   
    },
})

export default Profilepic;