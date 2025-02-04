import { Text, StyleSheet } from "@react-pdf/renderer";

const Certificate = ({ text }: { text: string }) => {
  return <Text style={styles.certificate}>{text}</Text>;
};

export default Certificate;

const styles = StyleSheet.create({
  certificate: {
    fontSize: 12,
  },
});
