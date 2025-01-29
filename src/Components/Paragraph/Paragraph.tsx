import { StyleSheet, Text, View, Font } from "@react-pdf/renderer";

type ParagraphType = {
  title: string;
  text: string;
};

Font.registerHyphenationCallback((word) => [word]);

export const Paragraph = ({ title, text }: ParagraphType) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  title: {
    fontSize: 18,
  },
  text: {
    fontSize: 13,
    textAlign: "justify",
  },
});
