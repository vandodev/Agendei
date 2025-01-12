import {TouchableOpacity, View, Image, Text} from "react-native";
import {styles} from "./appointment.style.js";
import Button from "../button/button.jsx";
import icon from "../../constants/icon.js"

function Appointment({ service, doctor, specialty, booking_date, booking_hour }) {
    
    const formatDate = (vdata, vhora) => new Date(`${vdata}T${vhora}`).toLocaleDateString('pt-BR');

    return <View style={styles.appointment}>

        <Text style={styles.title}>{service} - {doctor}</Text>

        <Text style={styles.text}>{specialty}</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDate}>
                        {formatDate(booking_date, booking_hour)}
                    </Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock}/>
                    <Text style={styles.bookingDate}>{booking_hour}</Text>
                </View>
            </View>

            <View style={styles.containerButton}>
                <Button text="Cancelar Reserva" theme="danger"/>
            </View>
        </View>

    </View>
}

export default Appointment;