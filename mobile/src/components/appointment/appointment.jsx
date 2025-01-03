import {TouchableOpacity, View, Image, Text} from "react-native";
import {styles} from "./appointment.style.js";
import Button from "../button/button.jsx";
import icon from "../../constants/icon.js"

function Appointment(props) {
    return <View style={styles.appointment}>

        <Text style={styles.title}>{props.service} - {props.doctor}</Text>

        <Text style={styles.specialty}>{props.specialty}</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDate}>15/01/2025</Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock}/>
                    <Text style={styles.bookingDate}>09h00</Text>
                </View>
            </View>

            <View style={styles.containerButton}>
                <Button text="Cancelar Reserva" theme="danger"/>
            </View>
        </View>

    </View>
}

export default Appointment;