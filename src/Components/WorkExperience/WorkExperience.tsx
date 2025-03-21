import Job from "@components/icons/job";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const WorkExperience = ({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <View style={styles.wrapper} wrap={false}>
      <View style={styles.title}>
        <Job size={16} color="brown" />
        <Text style={styles.titleText}>
          {title} - {date}
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default WorkExperience;

const styles = StyleSheet.create({
  wrapper: {
    gap: 5,
  },
  title: { flexDirection: "row", gap: 5, alignItems: "center" },
  titleText: { fontSize: 14 },
  description: { fontSize: 12 },
});
