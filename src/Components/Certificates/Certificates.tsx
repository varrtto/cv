import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Certificate from "./Certificate";
import { Translation } from "../../types";

const Certificates = ({ language }: { language: Translation }) => {
  const t = language;
  return (
    <View style={styles.wrapper}>
      <Text>{t.certificates.title}</Text>
      <View style={styles.certificatesList}>
        {t.certificates.list.map((text) => (
          <Certificate text={text} />
        ))}
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
