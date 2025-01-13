import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
function PrimaryButton( prams) {
    return (
    <View style={styles.buttonContainer}>
        <Pressable onPress={
            prams.onPress
             
        
        } android_ripple={{ color: 'red' }}
            style={styles.button
            }
        >
            <Text style={styles.buttonText} >
                {prams.text}
            </Text>

        </Pressable>
    </View>
   );

}

const styles = StyleSheet.create({
    buttonContainer: {  
        
        borderRadius: 25,
        margin: 5,
        elevation: 4,
        shadowColor: 'Black',
        overflow: 'hidden',
    },
    button: {
        backgroundColor: colors.primary500,
        paddingVertical: 12,
        paddingHorizontal: 30,

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
});
export default PrimaryButton;