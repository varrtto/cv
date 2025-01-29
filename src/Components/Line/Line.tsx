import { View, StyleSheet } from "@react-pdf/renderer";

export const Line = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 5,
  },
});
