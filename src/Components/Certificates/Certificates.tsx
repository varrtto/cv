import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Certificate from "./Certificate";

import { text } from "../../translations/spanish";

const Certificates = () => {
  return (
    <View style={styles.wrapper}>
      <Text>{text.certificates.title}</Text>
      <View style={styles.certificatesList}>
        <Certificate text={text.certificates.list[0]} />
        <Certificate text={text.certificates.list[1]} />
        <Certificate text={text.certificates.list[2]} />
        <Certificate text={text.certificates.list[3]} />
      </View>
    </View>
  );
};

export default Certificates;

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  certificatesList: {
    marginLeft: 10,
    lineHeight: 1,
  },
});
