 import{View, Text, StyleSheet} from 'react-native';

function Title({prams}){ 
    return <Text style={styles.title}>{prams}</Text>
        
} 
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        color: '#A31D1D',
        borderWidth: 2,
        borderColor: '#A31D1D',
    },
});

export default Title;