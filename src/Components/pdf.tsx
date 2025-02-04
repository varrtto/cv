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

import { text } from "@translations/english";

import RobotoRegular from "../fonts/Roboto-VariableFont_wdth,wght.ttf";

Font.register({
  family: "Roboto",
  src: RobotoRegular,
});

const MyDocument = () => {
  const t = text;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.main}>
          <View style={styles.titleWrapper}>
            <Text style={styles.name}>{t.name}</Text>
            <Text style={styles.title}>{t.title}</Text>
          </View>
          <Line />
          <Paragraph title={t.about} text={t.aboutText} />
          <Paragraph title={t.relevantWorkExperience} text="" />
          <WorkExperience
            title={t.workExperience[0].title}
            description={t.workExperience[0].description}
          />
          <WorkExperience
            title={t.workExperience[1].title}
            description={t.workExperience[1].description}
          />
          <WorkExperience
            title={t.workExperience[2].title}
            description={t.workExperience[2].description}
          />
        </View>
        <Sidebar showAll language={t} />
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.main}>
          <WorkExperience
            title={t.workExperience[3].title}
            description={t.workExperience[3].description}
          />
          <Paragraph title={t.education.title} text={t.education.text} />
          <Certificates language={t} />
          <References language={t} />
        </View>
        <Sidebar showAll={false} language={t} />
      </Page>
    </Document>
  );
};

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
