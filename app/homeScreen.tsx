import { Text, StyleSheet } from "react-native";

export default function HomeScreen() {

return (
  <Text style={styles.title}>
    Hello Noirshade! 
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 70, 
      fontWeight: 'bold', 
      marginLeft: 5
  }
})