import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Reference from "./Reference";
import { Translation } from "../../types";

const References = ({ language }: { language: Translation }) => {
  const t = language;
  return (
    <View style={styles.wrapper}>
      <Text>{t.references.title}</Text>
      <View style={styles.referencesList}>
        <Reference
          contact={t.references.list[0].contact}
          phone={t.references.list[0].phone}
        />
        <Reference
          contact={t.references.list[1].contact}
          phone={t.references.list[1].phone}
        />
        <Reference
          contact={t.references.list[2].contact}
          phone={t.references.list[2].phone}
        />
      </View>
    </View>
  );
};

export default References;

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  referencesList: {
    marginLeft: 10,
    gap: 5,
  },
});
