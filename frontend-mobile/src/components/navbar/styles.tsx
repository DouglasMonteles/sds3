import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: getStatusBarHeight(),
  },

  navbarImg: {
    marginTop: 15,
  },
});