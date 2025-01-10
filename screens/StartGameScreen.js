import { StyleSheet,View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return <View> 
      <PrimaryButton text="reset"></PrimaryButton>
      <PrimaryButton text="Confirm"></PrimaryButton>
       
  </View>
}




export default StartGameScreen;

const styles = StyleSheet.create({
  inputcontainer: { 
    flex : 1,
    padding: 16,
  }


});