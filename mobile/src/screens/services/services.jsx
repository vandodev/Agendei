import { FlatList, Image, Text, View } from "react-native";
import { doctors_services } from "../../constants/data.js";
import { styles } from "./services.style";
import icon from "../../constants/icon";

export default function Services() {
  
  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={icon.female } style={styles.image} />
        <Text style={styles.doctor}>Evandro</Text>
        <Text style={styles.specialty}>Droids</Text>
      </View>

      <FlatList 
        data={doctors_services}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Text>{item.description}</Text>
        )}
      />
    </View>
  )
}