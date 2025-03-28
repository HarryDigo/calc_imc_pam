import { StyleSheet, View } from 'react-native';
import FormBMI from './components/FormBMI';
import Title from './components/Title';

export default function App() {
    return (
        <View>
            <Title />
            <FormBMI />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
