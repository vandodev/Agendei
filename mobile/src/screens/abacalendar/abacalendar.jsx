import {FlatList, Text, View} from 'react-native';
import {styles} from "./abacalendar.style.js";
import { appointments } from '../../constants/data.js';
import Appointment from '../../components/appointment/appointment.jsx';
import icon from "../../constants/icon.js"

function AbaCalendar() {
    return <View style={styles.container}>
        <FlatList data={appointments} 
            keyExtractor={(appoints)=> appoints.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointment service={item.service}
                            doctor={item.doctor}
                            specialty={item.specialty}/>
                            
                
            }}
        />
    </View>
}

export default AbaCalendar;