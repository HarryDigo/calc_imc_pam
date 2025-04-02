import { useState } from "react";
import { Appearance, Image, Pressable, StyleSheet } from "react-native";

function FloatingButton({ onPress }) {
    const [theme, set_theme] = useState(Appearance.getColorScheme() || 'dark'); //estado do tema, escuro se não definido
    const [isPressed, set_is_pressed] = useState(false); //estado do botão (usado para manter o estilo do botão pressionado)

    return ( //retorna o botão flutuante
        <Pressable
            style={[styles.button, isPressed ? styles.button_pressed : styles.button_unpressed]} //muda a cor e a escala de acordo com o estado
            
            onPressIn={() => set_is_pressed(true)}
            onPressOut={() => {
                set_theme(theme === 'light' ? 'dark' : 'light'); //inverte o tema
                Appearance.setColorScheme(theme); //altera o tema do app
                set_is_pressed(false);
                onPress(); //para atualizar o tema no App.js
            }}

            android_ripple={{ color: "rgba(0, 0, 0, 0.2)", radius: 40 }} //coisinho de onda de quando aperta o botão
        >
            <Image //icone do botão
                style={styles.icon}
                source={theme === 'dark' ? //seleciona a imagem de acordo com o tema
                    require('../../assets/dark_mode.png') :
                    require('../../assets/light_mode.png')
                }
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({ //estilo do botão
    button: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 30,
        right: 30,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    button_unpressed: { //estilo do botão de acordo com pressionado ou não
        backgroundColor: "rgb(172, 104, 235)",
    },
    button_pressed: { 
        backgroundColor: "rgb(142, 74, 205)",
        transform: "scale(0.95)", //sugestão do copilot, gostei de como ficou (muad tamanho quando pressionado)
    },
    icon: { //estilo do icone
        width: 50,
        height: 50,
    },
});

export default FloatingButton;