
 import { Text,StyleSheet,View ,Alert } from "react-native";
 import Title from "../components/ui/Title"; 
 import NumberContainer from "../components/game/NumberContainer";
 import{useState, useEffect} from 'react';
import PrimaryButton from "../components/ui/PrimaryButton";
 function generateRandomBetween(min,max,exclude){
       const rndNum = Math.floor(Math.random() * (max - min)) + min;
         if(rndNum === exclude){
              return generateRandomBetween(min,max,exclude);
         }else{
                return rndNum;
         }
 }
   let maxboundary = 100;
    let minboundary = 1;
function GameScreen(params) {  

    const initialGuess= generateRandomBetween(1,100,params.userChoice);
    const [currentGuess,setCurrentGuess]= useState(initialGuess);  
    useEffect(()=>{ 
        if(currentGuess === params.userChoice){
            params.onGameOver();
        }
    },[currentGuess,params.userChoice,params.onGameOver]);
 function nextGuessHandler(direction){ 
    if((direction ==='lower' && currentGuess < params.userChoice) || (direction ==='higher' && currentGuess > params.userChoice)){
        Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
        return;
    }
     if(direction ==='lower' ){
        maxboundary = currentGuess; 

        
     }else{
        minboundary = currentGuess+1;
     }
     const newRandnumber= generateRandomBetween(minboundary,maxboundary,currentGuess); 
        setCurrentGuess(newRandnumber);

}
    return (   
        
        <View style={styles.screen}>
            <Title prams={"Oppnent's Guess"} ></Title>
            <NumberContainer text={currentGuess}></NumberContainer>
         <View>
                 <Text>higer or lower</Text>  
                 <View>
               <PrimaryButton text="lower" onPress={nextGuessHandler.bind(this,"lower")}></PrimaryButton>
                <PrimaryButton text="Higer" onPress={nextGuessHandler.bind(this,"higher")}></PrimaryButton>
                 </View>
         </View> 
         <View>
            {/* log Rounds  */}
         </View>
        </View> 
       
    );
} 
 const styles = StyleSheet.create({
    screen: {
        flex: 1, 
       padding: 20,  
       marginTop: 20,

        
    } , 
    
   
 });

export default GameScreen;