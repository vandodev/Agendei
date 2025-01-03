import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        borderRadius: 10,
        marginTop: 10,
    },

    title: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 3
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4
    },
    
    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },

    bookingDate:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop:3 
    },
    bookingHour:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop: 5 
    },

    booking: {
        flexDirection: "row",
        marginBottom: 2

    },

    containerBooking: {
        flex: 1
    },

    container:{
        flexDirection: "row"
    },

    containerButton: {
        marginTop: 5,
        flex:1
    }
}