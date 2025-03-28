import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

function FloatingButton({ onPress }) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            style={styles.button}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => {
                setIsPressed(false);
                onPress();
            }}
            android_ripple={{ color: "rgb(132, 64, 195)", radius: 40 }}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgb(172, 104, 235)",
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
});

export default FloatingButton;