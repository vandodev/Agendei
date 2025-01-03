import { Alert, Text, View } from "react-native"
import { styles } from "./abaprofile.style";
import Button from "../../components/button/button.jsx";

function AbaProfile() {
 
  return  <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Evandro Aparecido de Oliveira</Text>  
      </View>
      
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>vandoaparecido@hotmail.com</Text>
      </View>

      <View style={styles.item}>
        <Button 
          text="Desconectar" 
        />
      </View>
    </View>  
}

export default  AbaProfile;