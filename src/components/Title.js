import { Text, StyleSheet, useColorScheme } from 'react-native'; //Comentar!!!

const Title = () => {
    const theme = useColorScheme();

    return (
        <Text style={[styles.title, theme === 'light' ? styles.title_light : styles.title_dark]}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        opacity: 0.87,
    },
    title_light: {color: '#000'},
    title_dark: {color: '#fff'},
});

export default Title;