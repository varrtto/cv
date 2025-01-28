import { Image, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import Contact from "./Contact";
import React from "../icons/react";
import Nextjs from "../icons/nextjs";
import ReactNative from "../icons/react-native";
import Tailwind from "../icons/tailwind";

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
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  skillName: {
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
        <View style={styles.skill}>
          <React size={12} />
          <Text style={styles.skillName}>React</Text>
        </View>
        <View style={styles.skill}>
          <Nextjs size={12} />
          <Text style={styles.skillName}>Next.js</Text>
        </View>
        <View style={styles.skill}>
          <ReactNative size={12} />
          <Text style={styles.skillName}>React Native</Text>
        </View>
        <View style={styles.skill}>
          <Tailwind size={12} />
          <Text style={styles.skillName}>Tailwind</Text>
        </View>
      </View>
      <View>
        <Text>LANGUAGES</Text>
        <Text style={styles.skillName}>English - C2</Text>
        <Text style={styles.skillName}>Spanish - Native</Text>
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
