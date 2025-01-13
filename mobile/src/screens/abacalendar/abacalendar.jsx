import { useEffect, useState } from "react";
import {Alert, FlatList, View, Text} from 'react-native';
import {styles} from "./abacalendar.style.js";
import Appointment from '../../components/appointment/appointment.jsx';
import api from '../../constants/api.js';

function AbaCalendar() {
    const [appointments, setAppointments] = useState([]);

    async function loadAppointments() {
        try {
          const response = await api.get("appointments");
    
          if (response.data && response.data.appointments) {
            setAppointments(response.data.appointments);
          }
          // console.log(response.data.appointments)
        }
        catch (error) {
          if (error.response?.data.error)
            Alert.alert(error.response.data.error);
          else
            Alert.alert("Ocorreu um erro, tente novamente mais tarde");
          console.log(error);
        }
    }

    async function deleteAppointment(id_appointment) {
      try {
        await api.delete(`appointments/${id_appointment}`);
  
        loadAppointments();
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
        loadAppointments();
      }, [appointments]);
    
    return <View style={styles.container}>      
        <FlatList 
            data={appointments}
            keyExtractor={(item) => item.id_appointment.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Appointment 
                  id_appointment ={item.id_appointment}
                  service={item.service}
                  doctor={item.doctor}
                  specialty={item.specialty}  
                  booking_date={item.booking_date}
                  booking_hour={item.booking_hour} 
                  onPress={deleteAppointment}                    
              />  
            )}
          />

    </View>
}

export default AbaCalendar;