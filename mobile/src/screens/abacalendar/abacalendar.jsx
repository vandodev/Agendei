import React, { useEffect, useState } from "react";
import {Alert, FlatList, View, Text} from 'react-native';
import {styles} from "./abacalendar.style.js";
import Appointment from '../../components/appointment/appointment.jsx';
import api from '../../constants/api.js';
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../../components/loading/loading.jsx";

function AbaCalendar() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadAppointments() {
        try {
          setLoading(true);
          const response = await api.get("appointments");
    
          if (response.data) {
            setAppointments(response.data);
          }
          // console.log(response.data.appointments)
        }
        catch (error) {
          if (error.response?.data.error)
            Alert.alert(error.response.data.error);
          else
            Alert.alert("Ocorreu um erro, tente novamente mais tarde");
          console.log(error);
        }finally {
          setLoading(false); // Finaliza o carregamento
        }
    }

    function confirmDeleteAppointment(id_appointment) {
      Alert.alert(
        "Cancelar Agendamento", // Título do alerta
        "Tem certeza que deseja cancelar este agendamento?", // Mensagem
        [
          { text: "Não", style: "cancel" }, // Botão de cancelamento
          { text: "Sim", onPress: () => deleteAppointment(id_appointment) }, // Botão de confirmação
        ]
      );
    }

    async function deleteAppointment(id_appointment) {
      try {
        const response = await api.delete(`/appointments/${id_appointment}`);
  
        if (response.data?.id_appointment) {
          loadAppointments();
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
      
    useFocusEffect(
      React.useCallback(() => {
        loadAppointments();
      }, [])
    );
    
    if (loading) {
      return <Loading />;
    }

    return <View style={styles.container}>      
         <FlatList
            data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointment
                    id_appointment={item.id_appointment}
                    doctor={item.doctor}
                    service={item.service}
                    specialty={item.specialty}
                    bookingDate={item.booking_date}
                    bookingHour={item.booking_hour}                   
                    onPress={confirmDeleteAppointment}
                />
            }}
        />
    </View>
}

export default AbaCalendar;