import {TouchableOpacity, View, Image, Text} from "react-native";
import {styles} from "./appointment.style.js";
import Button from "../button/button.jsx";
import icon from "../../constants/icon.js"

function Appointment(props) {
    // 2024-11-15T08:30:00
    const dt = new Date(props.bookingDate + "T" + props.bookingHour)

    return <View style={styles.appointment}>

        <Text style={styles.title}> {props.service} - {props.doctor}</Text>

        <Text style={styles.text}>{props.specialty}</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDate}>
                        {dt.toLocaleDateString()}
                    </Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock}/>
                    <Text style={styles.bookingDate}>{props.bookingHour}h</Text>
                </View>
            </View>

            <View style={styles.containerButton}>
            <Button
                    text="Cancelar Reserva"
                    theme="danger"
                    onPress={() => props.onPress(props.id_appointment)}
                />
            </View>
        </View>

    </View>
}

export default Appointment;