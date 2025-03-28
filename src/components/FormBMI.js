import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import Result from './Result';

const FormBMI = () => {
    const [weight, set_weight] = useState('');
    const [height, set_height] = useState('');
    const [bmi, set_bmi] = useState(null);

    const calc_bmi = () => {
        if (weight && height) {
            const height_metric = parseFloat(height) / 100;
            const bmi_result = (parseFloat(weight) / Math.pow(height_metric, 2)).toFixed(2);
            set_bmi(bmi_result);
        }
    }

    return (
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='Peso (kg)'
                keyboardType='numeric'
                value={weight}
                onChangeText={set_weight}
            />
            <TextInput
                style={StyleSheet.input}
                placeholder='Altura (cm)'
                keyboardType='numeric'
                value={height}
                onChangeText={set_height}
            />
            <Button title='Calcular IMC' onPress={calc_bmi} />
            {bmi && <Result bmi={bmi} />}
        </View>
    );
};

const styles = StyleSheet.create({
    form_container: {
        backgroundColor: '#eaeef3',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormBMI;