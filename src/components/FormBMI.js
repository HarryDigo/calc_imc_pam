import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import Classification from './Classification';
import ErrorMessage from './ErrorMessage';
import Result from './Result';

const FormBMI = () => {
    const [weight, set_weight] = useState(''); //estados do peso, altura e imc
    const [height, set_height] = useState('');
    const [bmi, set_bmi] = useState(null);

    const [error, set_error] = useState(''); //estado do erro, se houver

    const calc_bmi = () => {
        if (weight && height) {
            if (isNaN(weight) || isNaN(height)) {
                set_bmi(null); //limpa o imc (igual no outros)
                set_error('Peso e altura devem ser números.'); //se não forem números, mostra mensagem de erro
                return;
            }
            if (parseFloat(weight) <= 0 || parseFloat(height) <= 0) {
                set_bmi(null);
                set_error('Peso e altura devem ser maiores que zero.'); //se forem menores ou iguais a zero, mostra mensagem de erro
                return;
            }
            //calcula e atualiza o imc
            const height_metric = parseFloat(height) / 100;
            const bmi_result = (parseFloat(weight) / Math.pow(height_metric, 2)).toFixed(2);
            set_bmi(bmi_result);
            set_error(''); //limpa a mensagem de erro
        } else {
            set_bmi(null);
            set_error('Peso e altura são obrigatórios.'); //se não forem preenchidos, mostra mensagem de erro
        }
    }

    return (
        <View style={styles.form_container}>
            <TextInput
                style={styles.input}
                placeholder='Peso (kg)'
                keyboardType='numeric'
                value={weight}
                onChangeText={set_weight}
            />
            <TextInput
                style={styles.input}
                placeholder='Altura (cm)'
                keyboardType='numeric'
                value={height}
                onChangeText={set_height}
            />
            <Button color={"rgb(172, 104, 235)"} title='Calcular IMC' onPress={calc_bmi} />

            {/*mostra resultado e classificação se o imc foi calculado*/}
            {bmi ? <Result bmi={bmi} /> : null}
            {bmi ? <Classification bmi={bmi} /> : null}
            {/*fazer tudo do peso ideal!!!*/}
            {error ? <ErrorMessage error={error} /> : null} {/*se houver erro, mostra mensagem de erro*/}
        </View>
    );
};

const styles = StyleSheet.create({
    form_container: { //estilo do form
        backgroundColor: '#cadef3', //definido meio arbitrariamente, mas gostei do resultado (#eaeef3 e ai tira 2 e 1 da casa das "dezenas" do vermelho e verde)
        padding: 16,
        borderRadius: 10,
        width: '80%',
    },
    input: { //estilo dos inputs
        backgroundColor: '#eaeeef',
        height: 40,
        borderColor: '#bbb',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormBMI;