import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    doctor: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray4,
        borderRadius: 10,
        marginTop: 10,
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2
    },
    icon: {
        width:50,
        height: 50,
        marginRight: 8
    }


}