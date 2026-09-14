import { View, Text } from "react-native";
import { Card } from "@rneui/themed";
import styles from "./AppStyle.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Image source={require("./assets/beef-burguer.png")} />
        <Card.Title style={styles.itemInfo}>Beef Burguer</Card.Title>
        <Text style={styles.caloriesInfo}>🔥70 Calories</Text>
        <Text style={styles.priceInfo}>$12.00</Text>
      </Card>
      <Card>
        <Card.Image source={require("./assets/pancakes.png")} />
        <Card.Title style={styles.itemInfo}>Pancakes</Card.Title>
        <Text style={styles.caloriesInfo}>🔥60 Calories</Text>
        <Text style={styles.priceInfo}>$15.00</Text>
      </Card>
    </View>
  );
}
