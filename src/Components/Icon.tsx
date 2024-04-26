import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CustomIcon({name}){
    return (
        <>
  <Icon name={name} size={20} style={styles.icon} />
        
        </>
    )
}
const styles = StyleSheet.create({
  icon:{

  }
})
