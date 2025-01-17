  import{View, Text, StyleSheet} from 'react-native'; 
    import Title from "../components/ui/Title";
    import NumberContainer from "../components/game/NumberContainer";
    import PrimaryButton from "../components/ui/PrimaryButton";

 function GameOver(params) {
     return (
         <View style={styles.screen}>
             <Title prams={"The Game is Over"} ></Title>
             <NumberContainer text={params.currentGuess}></NumberContainer>
          <View>
                  <Text>Number of Rounds: {params.roundsNumber}</Text>  
                  <Text>Number was: {params.currentGuess}</Text>  
          </View> 
          <View > 
             
          </View> 
           < PrimaryButton text="New Game" onPress={params.onrestart}/>
         </View> 
     );
 } 
 
export default GameOver;

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
       padding: 20,  
       marginTop: 20,

        
    } , 
    
   
});