  import{View, Text, StyleSheet} from 'react-native'; 
    import Title from "../components/ui/Title";
    import NumberContainer from "../components/game/NumberContainer";

 function GameOver(params) {
     return (
         <View style={styles.screen}>
             <Title prams={"The Game is Over"} ></Title>
             <NumberContainer text={params.currentGuess}></NumberContainer>
          <View>
                  {/* <Text>Number of Rounds: {props.roundsNumber}</Text>  
                  <Text>Number was: {props.userNumber}</Text>   */}
          </View> 
          <View>
             {/* log Rounds  */}
          </View>
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