import { StatusBar } from 'expo-status-bar'; 
import { useState } from 'react';
import { StyleSheet, ImageBackground ,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'; 
import GameOver from './screens/GameOver';
export default function App() { 
   const [userNumber,SetuserNumber]= useState();  
   const [isgameOver, setGameOver] = useState(false); 
   const [roundsNumber, setRoundsNumber] = useState(0);
  
  function startGameHandler(selectedNumber) {
    SetuserNumber(selectedNumber);  
    setGameOver(false);
  }   
  function gameRoundHandler(numOfRounds){
    setRoundsNumber(numOfRounds);
  }
  function gameOverHandler(){
    setGameOver(true);
   } 
   function restartGame(){ 
     SetuserNumber(null);
      setRoundsNumber(0);
    setGameOver(false);
   }
  let content = < StartGameScreen onPicknumber={startGameHandler}  />;
  
  if (userNumber) {

    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}  gameRoundHandler={gameRoundHandler} />;
  } 
  if(isgameOver && userNumber){
    content = < GameOver currentGuess={userNumber} onrestart={restartGame} roundsNumber=
    {roundsNumber} />;

  }
   

  return (
   
    
    <LinearGradient colors={["#F5ECD5", "#ddb52f"]} style={styles.container}>
      <ImageBackground source={require('./assets/Image/background.png')} resizeMode='cover'
        style={styles.container}
        imageStyle={{ opacity: 0.35 }}> 
        <SafeAreaView style={styles.rootScreen}>

              {content}
              </SafeAreaView>
      </ImageBackground>

    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({ 
  rootScreen: {
    flex: 1,
  
},
  container: {
    flex: 1,
   

  },
});
