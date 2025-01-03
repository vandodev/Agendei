import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // width: '100%',
    // height: '100%',
    borderTopWidth: 1,
    borderTopColor: COLORS.gray4,
    marginTop: 12
  },
  item: {
    padding: 20,
    rowGap: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray4,
  },
  title: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3
  },
  text: {
    // backgroundColor: COLORS.gray5,
    // padding: 10,
    // borderRadius: 6
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
  }
});