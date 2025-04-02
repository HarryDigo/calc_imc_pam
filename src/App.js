import { useState } from 'react';
import { Appearance, StyleSheet, View } from 'react-native';

import FloatingButton from './components/FloatingButton';
import FormBMI from './components/FormBMI';
import Title from './components/Title';

export default function App() {
    const [theme, set_theme] = useState(Appearance.getColorScheme() || 'dark'); //tema local, escuro se não definido
    Appearance.setColorScheme(theme); //inicializa o tema do app

    return (
        <View style={[
            styles.container, 
            theme === 'light' ?  //seleciona o estilo de acordo com o tema
            styles.container_light : 
            styles.container_dark
        ]}>
            <Title />
            <FormBMI />
            <FloatingButton onPress={() => { //inverte o tema (local) quando pressionado
                set_theme(theme === 'light' ? 'dark' : 'light'); 
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { //estilo da view principaç
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container_light: { //estilo da view de acordo com o tema
        backgroundColor: '#fff',
        color: '#000',
    },
    container_dark: {
        backgroundColor: '#212529',
        color: '#fff',
    },
});
