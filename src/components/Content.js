import React, {Component} from 'React';
import {Text , View , StyleSheet , ImageBackground , Linking , Image }  from 'react-native';



class Content extends Component{
   fbButtonCall() {
        
      }
    render () {
     
        return (
  <ImageBackground
        source={require('../components/images/bg.png')} style={styles.bg}>
       
          <View style ={styles.container} >
         
          <Text style = {styles.experties}>
          
Webdesigner | Videoeditor | Virtual assistant           
          </Text>
         
          <View style = {styles.container1}>
          
          <Text style = {styles.aboutme}> My name is Saad Abdeen & i am passionate webdesigner </Text> 
          <Text style = {styles.aboutme}>  video editor & virtual assistant  my aim is to become a </Text> 

          <Text style= {styles.aboutme}> full stack developer & want share my technical </Text>

          <Text style = {styles.aboutme}>knowledge with others currently i am freelance video  </Text>
          <Text style = {styles.aboutme}>editor on Fiverr  </Text>
          
          
          
          <Text style = {styles.eduhead}>  ──────── EDUCATION ──────── </Text>
          <Text style = {styles.edusub}> Matriculation From NASRA SCHOOL </Text>
          <Text style = {styles.edusub}> Intermediate From Govt.Islamia Science College </Text>
          <Text style = {styles.edusub}> Bachelor In Computer Science(BCS) From UOK  </Text>
         
         <Text style = {styles.eduhead}>  ────── SOFTWARE SKILLS ────── </Text>
         <Text style = {styles.edusub}> JavaScript </Text>
         <Text style = {styles.edusub}> GIT </Text>
         <Text style = {styles.edusub}> HTML 5 </Text>
         <Text style = {styles.edusub}> CSS</Text>
         <Text style = {styles.edusub}> C language </Text>
         <Text style = {styles.edusub}> C # </Text>
         <Text style = {styles.edusub}> Adobe AfterEffects</Text>
         <Text style = {styles.edusub}> Adobe Premiere Pro </Text>
         <Text style = {styles.edusub}> Adobe Flash </Text>
         <Text style = {styles.edusub}> Inpage </Text>
         <Text style = {styles.edusub}> MS Office </Text>
         
         <Text style = {styles.eduhead}>  ────── Technical Skills ────── </Text>
         <Text style = {styles.edusub}> Computer / Laptop Troubleshoot  </Text>
         <Text style = {styles.edusub}> Hardware & Software wise </Text>
         
         <Text style = {styles.eduhead}>  ──────── Contact  ──────── </Text>
        
         <Text onPress={() => Linking.openURL('http://facebook.com/saad.abdeen.1')} style = {{color : '#fff',  fontSize: 20, marginLeft: 25 ,}}>Facebook  |
         <Text onPress={() => Linking.openURL('http://github.com/saadabdeen')} > Github  | </Text> 
         <Text onPress={() => Linking.openURL('http://linkedin.com/in/saad-abdeen-7b7a85138/')} >LinkedIn </Text>
         </Text>
         
        
         
       
          </View>
             
          </View>
           </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
    
    bg: {
      flex: 1 ,
      width : '100%',
      height : '100%',
    },
    container: {
      
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',

    },
    
    container1: {
      
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,    
    },
    
    experties:{
      
      marginTop: 5,  
      fontSize: 15,
      fontStyle: 'italic',
      fontWeight:'bold',
      color: "#fff",  
    },
    aboutme:{
      
      fontSize: 15,
      justifyContent: 'center',
      alignItems: 'center', 
      fontStyle: 'italic',
       color: "#fff",  
    },
    
      eduhead : {
      marginTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
      color: "#FFFF00",
    },
    
      edusub : {
       marginTop: 10,
       fontSize: 15,
       color: "#fff",
    },
    
    icons : {
      width : 50,
      height : 50,
    },
    
    links : {
       marginTop: 15,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      color : '#fff',        
    },
      
 
});
  

export default Content;