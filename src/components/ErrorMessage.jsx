import React from "react"; //Comentar!!!
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({ error }) => {
    return (
        <Text style={styles.error}>{error}</Text>
    );
};

const styles = StyleSheet.create({
    error: { //estilo do texto
        marginTop: 15,
        fontSize: 14,
        textAlign: 'center',
        color: '#ff4477',
    },
});

export default ErrorMessage;