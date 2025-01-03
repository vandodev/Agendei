
import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,    
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 16,
  },
  banner: {
    // height: 240,
    padding: 36,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center"
  },
  doctor: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    marginTop: 4
  },
  specialty: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm
  },
  image: {
    width: 80,
    height: 80
  }
})
