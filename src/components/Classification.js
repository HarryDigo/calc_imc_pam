import React from "react"; //Comentar!!!
import { Text, StyleSheet } from 'react-native';

const Classification = ({ bmi }) => {
    let classification = '';
    if (bmi < 18.5) {
        classification = 'Abaixo do peso';
    } else if (bmi < 25) {
        classification = 'Peso normal';
    } else if (bmi < 30) {
        classification = 'Sobrepeso';
    } else if (bmi < 35) {
        classification = 'Obesidade grau 1';
    } else if (bmi < 40) {
        classification = 'Obesidade grau 2';
    } else {
        classification = 'Obesidade mórbida';
    }

    return (
        <Text style={styles.class}>Classe: {classification}</Text>
    );
};

const styles = StyleSheet.create({
    class: {
        marginTop: 6,
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;