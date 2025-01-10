import { StyleSheet,TextInput,View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return <View style={styles.inputcontainer}>  
  <TextInput style={styles.input} 
   keyboardType= "numeric" maxLength={2}> </TextInput>  
   <View style={styles.buttonContainer}>
   <View style={styles.button}> 
      <PrimaryButton text="reset"></PrimaryButton>
      </View>
      <View style={styles.button}>
      <PrimaryButton text="Confirm"></PrimaryButton>
      </View>
      </View>
  </View>
}


const styles = StyleSheet.create({
  inputcontainer: {  
  
   alignItems: 'center', 
    justifyContent: 'center',
   marginHorizontal:24,
    padding: 16, 
    marginTop: 100,
    backgroundColor: '#72063c', 
    borderRadius: 10,
    elevation: 4,
    shadowColor:'Black' ,
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 6,
    shadowOpacity: 0.26,
  }
  , 
  input: { 
   
    
    margin: 10, 
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',  


  }, 
  buttonContainer: {  
     flexDirection: 'row', 
     justifyContent: 'space-between', 
      width: '100%',
       
  },
  button: { 
    flex: 1,
  }

});
export default StartGameScreen;