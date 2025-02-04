import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Reference from "./Reference";

import { text } from "../../translations/spanish";

const References = () => {
  return (
    <View style={styles.wrapper}>
      <Text>{text.references.title}</Text>
      <View style={styles.referencesList}>
        <Reference
          contact={text.references.list[0].contact}
          phone={text.references.list[0].phone}
        />
        <Reference
          contact={text.references.list[1].contact}
          phone={text.references.list[1].phone}
        />
        <Reference
          contact={text.references.list[2].contact}
          phone={text.references.list[2].phone}
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
