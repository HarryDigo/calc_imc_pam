import React from "react";
import { Text, StyleSheet } from 'react-native';

const IdealWeight = ({ height }) => {
    const new_height = height.replace(/,/g, '.'); //troca , por . para conversão

    const min_weight = (18.5 * Math.pow(new_height / 100, 2)).toFixed(2); //calcula os pesos e fixa em 2 casas decimais
    const max_weight = (24.9 * Math.pow(new_height / 100, 2)).toFixed(2);

    return (
        <>
            <Text style={styles.title}>Peso Ideal</Text>
            <Text style={styles.text}>
                Entre {min_weight} kg e {max_weight} kg
            </Text>
        </>
    );
};

const styles = StyleSheet.create({
    title: { //estilo do titulo
        marginTop: 6,
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
    },
    text: { //estilo do textinho
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
});

export default IdealWeight;