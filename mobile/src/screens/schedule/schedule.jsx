import { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./schedule.style.js";
import { ptBR } from "../../constants/calendar";
import Button from "../../components/button/button.jsx";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

function Schedule(props) {
  const [data, setData] = useState();

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
  
      <View style={styles.btnContainer}>
        <Button text="Confirmar Agendamento" />
      </View>
    </View>
  )
}

export default  Schedule;