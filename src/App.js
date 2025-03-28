import { useState } from 'react';
import { Appearance, Button, StyleSheet, View } from 'react-native';

import FormBMI from './components/FormBMI';
import Title from './components/Title';
import FloatingButton from './components/FloatingButton';

export default function App() {
    const [theme, setTheme] = useState('dark');
    Appearance.setColorScheme(theme);

    return (
        <View style={[styles.container, theme === 'light' ? styles.container_light : styles.container_dark]}>
            <Title />
            <FormBMI />
            <FloatingButton onPress={() => {
                theme === 'light' ? setTheme('dark') : setTheme('light');
                Appearance.setColorScheme(theme);
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container_light: {
        backgroundColor: '#fff',
        color: '#000',
    },
    container_dark: {
        backgroundColor: '#212529',
        color: '#fff',
    },
});
