import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({  
  container: {
    // flex: 1,    
    height: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 16,
  },
  theme: {
    todayTextColor: COLORS.blue,
    // todayBackgroundColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  },
  horario: {
    fontSize: FONT_SIZE.lg,
    fontWeight:  "bold",
    color: COLORS.gray2,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray5,
    marginTop: 18,
    paddingTop: 20,

  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
    paddingHorizontal: 8
  }
})