import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native"
import { styles } from "./abaprofile.style";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api";

function AbaProfile() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  async function loadProfile() {
    try {
      const response = await api.get("users/profile");

      if (response.data) {
        setNome(response.data?.name);
        setEmail(response.data?.email);
      }
    }
    catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro, tente novamente mais tarde");
      console.log(error);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);
 
  return  <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>{nome}</Text>  
      </View>
      
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={styles.item}>
        <Button 
          text="Desconectar" 
        />
      </View>
    </View>  
}

export default  AbaProfile;