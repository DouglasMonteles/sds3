import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  content: {
    alignItems: 'center',
    width: '100%',
    marginTop: getStatusBarHeight(),
  },

  navbarImg: {
    marginTop: 15,
  },
});