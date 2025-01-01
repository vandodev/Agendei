import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Button from './src/components/button/button.jsx'

export const styles = {
    container: {
      backgroundColor: "withe",
      flex: 1,
      padding: 50,
      justifyContent: "space-between"
  },
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="Acessar"/>
    </View>
  );
}

