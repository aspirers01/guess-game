
import{View, Text, StyleSheet} from 'react-native';
function NumberContainer(params) { 
    return <View style={styles.container}>
        <Text style={styles.number}>{params.text}</Text>
    </View>
    
} 

export default NumberContainer; 

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#F93827',
        margin:24,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: '#F93827',
        fontSize: 22, 
        fontWeight: 'bold',
    }
});