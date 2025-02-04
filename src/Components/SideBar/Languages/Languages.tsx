import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Language from "@components/icons/language";

import { text } from "../../../translations/spanish";

export const Languages = () => {
  return (
    <View style={styles.languages}>
      <Text style={styles.title}>{text.sidebar.languages.title}</Text>
      <View style={styles.language}>
        <Language size={12} />
        <Text style={styles.languageText}>English - C2</Text>
      </View>
      <View style={styles.language}>
        <Language size={12} />
        <Text style={styles.languageText}>Spanish - Native</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  languages: {
    gap: 5,
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  languageText: {
    fontSize: 12,
  },
});
