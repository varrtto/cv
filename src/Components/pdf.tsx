import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Sidebar from "./SideBar";
import Paragraph from "./Paragraph";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  main: {
    flexDirection: "column",
    margin: 10,
    padding: 10,
    width: "66.6%",
    justifyContent: "flex-start",
    gap: 20,
  },
  skill: {
    fontSize: 14,
  },
  certificatesList: {
    marginLeft: 10,
    lineHeight: 1,
  },
  certificate: {
    fontSize: 12,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <Text>Alfredo Gore</Text>
        <Paragraph title="About me" text="Developer" />
        <Paragraph title="Work Experience" text="Developer " />
        <View>
          <Text>Education</Text>
          <Text style={styles.skill}>
            Bachelor of Science in Computer Science (Expected 2025)
          </Text>
        </View>
        <View>
          <Text>Certificates</Text>
          <View style={styles.certificatesList}>
            <Text style={styles.certificate}>
              • English TOEFL Certificate (2002)
            </Text>
            <Text style={styles.certificate}>
              • React - The complete guide (Udemy)
            </Text>
            <Text style={styles.certificate}>
              • The Complete React Native + Hooks Course (Udemy)
            </Text>
            <Text style={styles.certificate}>
              • React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
            </Text>
          </View>
        </View>
        <View>
          <Text>References</Text>
          <Text style={styles.skill}>Developer</Text>
        </View>
      </View>
      <Sidebar />
    </Page>
  </Document>
);

export default MyDocument;
