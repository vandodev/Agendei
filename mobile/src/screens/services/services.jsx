import { FlatList, Image, Text, View } from "react-native";
import { doctors_services } from "../../constants/data.js";
import { styles } from "./services.style.js";
import icon from "../../constants/icon";
import Service from "../../components/service/service.jsx";

export default function Services(props) {
  const { id_doctor, name, specialty, icon: iconDoctor } = props.route.params;

    function handleClick(id_service) {
      props.navigation.navigate("schedule", {
        id_doctor,
        id_service
      });
    }
  
  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={iconDoctor === "F" ? icon.female : icon.male} style={styles.image} />
        <Text style={styles.doctor}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList 
        data={doctors_services}
       
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Service 
            description={item.description} 
            price={item.price}
            id_service={item.id_service}
            onPress={handleClick}
          />
        }}
      />
    </View>
  )
}