/*eslint-disable*/
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    bottom: 0,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#00000099',
  },
  popupContainer: {
    backgroundColor: 'black',
    height: 250,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minutes: {
    color: 'lightgrey',
    fontSize: 36,
  },
  distance: {
    color: 'lightgrey',
    fontSize: 26,
  },
  taxiType: {
    color: 'lightgrey',
    fontSize: 20,
    marginHorizontal: 10,
  },
  userBg: {
    backgroundColor: '#008bff',
    width: 56,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  declineButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
  },
  declineText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
