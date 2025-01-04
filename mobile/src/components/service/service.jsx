import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./service.style.js";
import icon from "../../constants/icon";
import Button from "../button/button.jsx";

function Service(props) {
 
  return (
      <View style={styles.service} >
        <View style={styles.containerText}>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.price}>
          {props.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </Text>
        </View>
        <View style={styles.containerButton}>
          <Button text="Agendar" />
        </View>
      </View>
  )
}

export default Service;