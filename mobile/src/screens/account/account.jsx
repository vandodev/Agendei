import { useState, useContext } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import icon from "../../constants/icon.js"
import { styles } from "./account.style";
import Button from "../../components/button/button.jsx"
import api from "../../constants/api.js";
import { authContext } from "../../contexts/auth.js";


function Account(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(authContext);

    async function handleRegister() {
        try {
          const response = await api.post('users/register', {
            name,
            email,
            password
          })
    
          setUser(response.data);
        }
        catch (error) {
          if (error.response?.data.error)
            Alert.alert(error.response.data.error);
          else
            Alert.alert("Ocorreu um erro, tente novamente mais tarde");
          console.log(error);
        }
    }

    function handleLogin() {
        props.navigation.goBack();
    }
    

    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View >
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome" 
                    onChangeText={setName} 
                />
            </View>

            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="E-mail" 
                    keyboardType="email-address" 
                    onChangeText={setEmail} 
                />
            </View>

            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Senha" 
                    secureTextEntry 
                    onChangeText={setPassword} 
                />
            </View>
            <Button text="Criar Conta" onPress={handleRegister} />
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta. </Text>
            <TouchableOpacity onPress={handleLogin} >
                <Text style={styles.footerLink}>Fazer login</Text>
            </TouchableOpacity>

        </View>

    </View>

}

export default Account;