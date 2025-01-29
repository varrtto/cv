import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import Sidebar from "./SideBar";
import Paragraph from "./Paragraph";

import RobotoRegular from "../fonts/Roboto-VariableFont_wdth,wght.ttf";
import Line from "./Line";
import Job from "./icons/job";
import Whatsapp from "./icons/whatsapp";

Font.register({
  family: "Roboto",
  src: RobotoRegular,
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <View style={{ gap: 5 }}>
          <Text style={styles.name}>Alfredo Gore</Text>
          <Text style={styles.title}>Software Engineer</Text>
        </View>

        <Line />
        <Paragraph
          title="About me"
          text="I'm a developer who loves building things that work smoothly and look great. I have experience with modern web technologies like React and Next.js, and I enjoy tackling complex problems, optimizing performance, and making sure everything runs seamlessly. I thrive in collaborative environments, always looking to learn new things and improve my craft. Whether it's frontend, backend, or somewhere in between, I’m excited about creating impactful and well-crafted solutions."
        />
        <Paragraph title="Relevant Work Experience" text="" />
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Job size={16} color="brown" />
            <Text style={{ fontSize: 14 }}>Dialpad - Web Developer</Text>
          </View>
          <Text style={{ fontSize: 12 }}>
            As a Web Developer at Dialpad, where I worked primarily with Next.js
            and React to build and optimize our web applications. My focus was
            on improving the frontend experience, ensuring seamless navigation,
            performance, and accessibility across our platforms. worked with App
            Router in Next.js, handling dynamic query parameters for cleaner,
            more scalable routing. I also troubleshooted Browser-specific UI
            issues, optimized CSS behaviors and integrated tools.
          </Text>
        </View>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Job size={16} color="brown" />
            <Text style={{ fontSize: 14 }}>
              Ranker - Senior Software Engineer
            </Text>
          </View>
          <Text style={{ fontSize: 12 }}>
            At Ranker, I worked as a Senior Software Engineer, developing and
            optimizing interactive UI components using React within the Next.js
            framework. I contributed to the scalability and maintainability of
            Ranker’s platform by building a structured component library, fully
            documented in Storybook for seamless integration across the site. To
            ensure a high level of reliability, I wrote and maintained
            comprehensive unit and integration tests using Jest, focusing on
            performance and UI consistency. Given Ranker’s data-driven approach,
            I also worked on A/B testing implementations, helping the company
            refine its engagement strategies by testing different UI variations
            and improving user interaction based on analytics. Working closely
            with product managers, designers, and other engineers, I helped
            enhance Ranker’s voting-based platform, ensuring an intuitive and
            engaging user experience for millions of visitors.
          </Text>
        </View>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Job size={16} color="brown" />
            <Text style={{ fontSize: 14 }}>Mural - Software Engineer</Text>
          </View>
          <Text style={{ fontSize: 12 }}>
            Full Stack developer. My role was to write and style the front-end
            components that meet the requirements of our mocks and fulfil our
            user stories, write beautiful APIs and more! (Code reviews,
            bugfixing, you name it) Using: React, Node, CSS
          </Text>
        </View>
      </View>
      <Sidebar showAll />
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Job size={16} color="brown" />
            <Text style={{ fontSize: 14 }}>
              Patagonian Tech - Software Engineer
            </Text>
          </View>
          <Text style={{ fontSize: 12 }}>
            Main developer in a React Native app, building for iOS and Android,
            using expo. - Built dozens of Components in React Native, including
            headers, sliders, modals, widgets, filters, cards, forms, etc. -
            Worked side by side with designers, PMs and the customer to find the
            best solutions possible. - Estimated and helped PMs to plan ahead,
            created tickets, and documented processes, components and
            requirements.
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <Text>Education</Text>
          <Text style={styles.skill}>
            Bachelor of Science in Computer Science (Expected 2025)
          </Text>
        </View>
        <View style={{ gap: 10 }}>
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
        <View style={{ gap: 10 }}>
          <Text>References</Text>
          <View style={{ gap: 5 }}>
            <View style={{ fontSize: 12, gap: 3 }}>
              <Text>Rodrigo Falco / CTO and Co-founder @ Patagonian</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Whatsapp size={12} />
                <Link
                  style={styles.contactInfo}
                  src="https://wa.me/+5492984737502"
                >
                  +54 9 298 4737502
                </Link>
              </View>
            </View>

            <View style={{ fontSize: 12, gap: 5 }}>
              <Text>Ramiro Castro - Growth Product Manager @ Mural</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Whatsapp size={12} />
                <Link
                  style={styles.contactInfo}
                  src="https://wa.me/+5493515087395"
                >
                  +54 9 351 5087395
                </Link>
              </View>
            </View>
            <View style={{ fontSize: 12, gap: 5 }}>
              <Text>Matias Gea - Technical Lead @ Mural</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Whatsapp size={12} />
                <Link
                  style={styles.contactInfo}
                  src="https://wa.me/+5492234227478"
                >
                  +54 9 2234 22-7478
                </Link>
              </View>
            </View>
          </View>
        </View>
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
  title: {
    fontSize: 18,
    textAlign: "center",
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
  contactInfo: {
    fontSize: 12,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
});

export default MyDocument;
