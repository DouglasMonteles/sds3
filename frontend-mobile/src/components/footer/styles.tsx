import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.body_light,
  },

  footerText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.text_regular,
  },
});