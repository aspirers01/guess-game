import { Alert, StyleSheet,TextInput,View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';

function StartGameScreen(prams) { 
 const [enteredValue, setEnteredValue] = useState('');
  function numberInputHandler(inputText) { 
  
    setEnteredValue(inputText); 
  }
 

  function resetInputHandler() { 
    setEnteredValue(''); 
  } 
  
  function confirmInputHandler() { 
    const chosenNumber = parseInt(enteredValue); 
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { 
      // show alert .... 
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
      return; 
    } 
      prams.onPicknumber(chosenNumber);
    // setEnteredValue(''); 
  }

  return <View style={styles.inputcontainer}>  
  <TextInput style={styles.input} 
   keyboardType= "numeric" maxLength={2}  
   autoCorrect={false}
    autoCapitalize="none"
    onChangeText={numberInputHandler}
    value= {enteredValue}
   /> 
   <View style={styles.buttonContainer}>
   <View style={styles.button}> 
      <PrimaryButton text="reset"  onPress={resetInputHandler} ></PrimaryButton>
      </View>
      <View style={styles.button}>
      <PrimaryButton text="Confirm" onPress ={confirmInputHandler}></PrimaryButton>
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