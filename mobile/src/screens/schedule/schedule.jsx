import { useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./schedule.style.js";
import { ptBR } from "../../constants/calendar";
import Button from "../../components/button/button.jsx";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

function Schedule(props) {
  const { id_doctor, id_service } = props.route.params;
  const [data, setData] = useState(new Date().toISOString().slice(0,10));
  const [horario, setHorario] = useState("9:00");
   
  return (
    <View  style={styles.container}>
      <Calendar 
        theme={styles.theme} 
        onDayPress={(day) => setData(day.dateString)}
        markedDates={{
          [data]: { selected: true },
        }}
        minDate={new Date().toDateString()}
      />

      <Text style={styles.horario}>Horário</Text>

      <Picker 
        selectedValue={horario} 
        onValueChange={(itemValue, itemIndex) => {
          setHorario(itemValue);
      }}>
        <Picker.Item label="09:00" value="09:00" />
        <Picker.Item label="09:30" value="09:30" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="13:00" value="13:00" />
        <Picker.Item label="14:00" value="14:00" />
        <Picker.Item label="15:00" value="15:00" />
        <Picker.Item label="16:00" value="16:00" />
        <Picker.Item label="17:00" value="17:00" />
      </Picker>
  
      <View style={styles.btnContainer}>
        <Button text="Confirmar Agendamento" />
      </View>
    </View>
  )
}

export default  Schedule;