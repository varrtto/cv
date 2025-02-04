import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Sidebar from "@components/SideBar";
import Paragraph from "@components/Paragraph";
import Certificates from "@components/Certificates";
import WorkExperience from "@components/WorkExperience";
import Line from "@components/Line";
import References from "@components/References";

import { text } from "../translations/spanish";

import RobotoRegular from "../fonts/Roboto-VariableFont_wdth,wght.ttf";

Font.register({
  family: "Roboto",
  src: RobotoRegular,
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <View style={styles.titleWrapper}>
          <Text style={styles.name}>{text.name}</Text>
          <Text style={styles.title}>{text.title}</Text>
        </View>
        <Line />
        <Paragraph title={text.about} text={text.aboutText} />
        <Paragraph title={text.relevantWorkExperience} text="" />
        <WorkExperience
          title={text.workExperience.dialpad.title}
          description={text.workExperience.dialpad.description}
        />
        <WorkExperience
          title={text.workExperience.ranker.title}
          description={text.workExperience.ranker.description}
        />
        <WorkExperience
          title={text.workExperience.mural.title}
          description={text.workExperience.mural.description}
        />
      </View>
      <Sidebar showAll />
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <WorkExperience
          title={text.workExperience.patagonian.title}
          description={text.workExperience.patagonian.description}
        />
        <Paragraph title={text.education.title} text={text.education.text} />
        <Certificates />
        <References />
      </View>
      <Sidebar showAll={false} />
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    fontFamily: "Roboto",
  },
  main: {
    flexDirection: "column",
    margin: 10,
    padding: 10,
    width: "66.6%",
    justifyContent: "flex-start",
    gap: 20,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
  },
  titleWrapper: {
    gap: 5,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default MyDocument;
