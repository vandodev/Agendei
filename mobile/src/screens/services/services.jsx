import { useEffect, useState } from "react";
import { FlatList, Alert, Image, Text, View } from "react-native";
import { styles } from "./services.style.js";
import icon from "../../constants/icon";
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";


export default function Services(props) {
  const { id_doctor, name, specialty, icon: iconDoctor } = props.route.params;
  const [docServices, setDocServices] = useState([]);

    function handleClick(id_service) {
      props.navigation.navigate("schedule", {
        id_doctor,
        id_service
      });
    }

    async function loadServices() {
      try {
        const response = await api.get(`doctors/${id_doctor}/services`);
        setDocServices(response.data);
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
      loadServices();
    }, [])
  
  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={iconDoctor === "F" ? icon.female : icon.male} style={styles.image} />
        <Text style={styles.doctor}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList 
         data={docServices}
         keyExtractor={(item) => item.id_service}
         showsVerticalScrollIndicator={false}
         renderItem={({ item }) => (
           <Service 
            description={item.description} 
            price={item.price}
            id_service={item.id_service}
            onPress={handleClick}
          />
         )}
        
      />
    </View>
  )
}