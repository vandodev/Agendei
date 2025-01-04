import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  service: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray4,
    padding: 16,
  },
  containerText: {
    flex: 1,
  },
  price: {
    color: COLORS.blue,
    fontSize: FONT_SIZE.sm,
  },
  description: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.gray3,
  },
  containerButton:{
    marginTop:5,
    width:150
  }

})