import { useContext, useState } from "react";
import { Image, Text,Alert, TextInput, View, TouchableOpacity } from "react-native";
import icon from "../../constants/icon.js"
import { styles } from "./login.style";
import Button from "../../components/button/button.jsx"
import api from "../../constants/api.js";
import { authContext } from "../../contexts/auth.js";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(authContext);

    async function handleLogin(props) {

        if (!email || !password) {
          Alert.alert("O campo usuário e senha tem que ser preenchido");
          return;
        }

        try {
          const response = await api.post('users/login', {
            email,
            password
          })
    
          if (response.data) {
            const { token } = response.data;
            api.defaults.headers.common['Authorization'] = "Bearer " + token;
            setUser(response.data);
            console.log(response.data)
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
    
    function handleRegister() {
      props.navigation.navigate("Account");
    }

    return <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View >
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
            
            <Button
              text="Acessar"
              onPress={handleLogin}
              disabled={!email || !password} // Botão desabilitado se e-mail ou senha estiverem vazios
            />

        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta. </Text>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.footerLink}> Criar conta agora.</Text>
            </TouchableOpacity>

        </View>

    </View>

}

export default Login;