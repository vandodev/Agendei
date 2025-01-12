import { useEffect, useState } from "react";
import {FlatList, Alert, Text, View} from 'react-native';
import {styles} from "./abahome.style.js";
import Doctor from '../../components/doctor/doctor.jsx';
import api from "../../constants/api.js";

function AbaHome(props) {

    const [doctors, setDoctors] = useState([]);

    function handleClick(id_doctor, name, specialty, icon) {
        props.navigation.navigate("services",{
            id_doctor, name, specialty, icon: icon
        });
    }

    async function loadDoctors() {
        try {
          const response = await api.get("doctors");
          setDoctors(response.data);
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
        loadDoctors();
      }, []);

    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços médicos!</Text>

        <FlatList data={doctors} 
            keyExtractor={(doc)=> doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <Doctor 
                        id_doctor={item.id_doctor}
                        name={item.name}
                        icon={item.icon}
                        specialty={item.specialty} 
                        onPress={handleClick}               
                    /> 
                )  
            }}
         />

    </View>
}

export default AbaHome;