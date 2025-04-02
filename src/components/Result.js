import React from "react"; //Comentar!!!
import { Text, StyleSheet } from 'react-native';

const Result = ({ bmi }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {bmi}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result;