import { Image, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import Contact from "./Contact";

const styles = StyleSheet.create({
  sideBar: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "20px",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "33.3%",
    backgroundColor: "#ece3d9",
  },
  skill: {
    fontSize: 14,
  },
  link: {
    fontSize: 14,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
    alignSelf: "center",
  },
});

export const Sidebar = () => {
  return (
    <View style={styles.sideBar}>
      <Image source={"/Foto.jpeg"} src={"/Foto.jpeg"} style={styles.foto} />
      <Contact />
      <View>
        <Text>SKILLS</Text>
        <Text style={styles.skill}>React</Text>
        <Text style={styles.skill}>Next.js</Text>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>Tailwind</Text>
      </View>
      <View>
        <Text>LANGUAGES</Text>
        <Text style={styles.skill}>English - C2</Text>
        <Text style={styles.skill}>Spanish - Native</Text>
      </View>
      <View>
        <Text>LINKS</Text>
        <Link
          style={styles.link}
          href="https://www.linkedin.com/in/alfredo-gore"
        >
          Linkedin
        </Link>
        <Link style={styles.link} href="https://github.com/varrtto">
          Github
        </Link>
      </View>
    </View>
  );
};
