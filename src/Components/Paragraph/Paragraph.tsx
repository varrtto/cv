import { StyleSheet, Text, View } from "@react-pdf/renderer";

type ParagraphType = {
  title: string;
  text: string;
};

export const Paragraph = ({ title, text }: ParagraphType) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  text: {
    fontSize: 14,
  },
});
