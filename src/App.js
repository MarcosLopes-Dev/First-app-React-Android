import React, {useState} from 'react';
import { 
    Text, 
    SafeAreaView , 
    TouchableOpacity,
    StyleSheet 
} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero () {
        const novo_numero = Math.floor(Math.random() * 60)
        setNumero(novo_numero)
    }

    return(
        <>
            <SafeAreaView style={style.container}>
                <Text style={style.numero}>{numero}</Text>
                <TouchableOpacity style={style.botao} onPress={handleNumero}>
                    <Text>Gerar novo número</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        fontSize: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numero: {
        fontSize: 32,
        color:'red',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#FFFFFF',
        width: '70%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 25
    }
})

export default App;