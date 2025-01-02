import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: "space-between",
        padding: 12
    },

    text: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        marginLeft: 10,
        marginBottom: 15
    }
}