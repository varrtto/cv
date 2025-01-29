import { Image, View, StyleSheet } from "@react-pdf/renderer";
import Contact from "./Contact";
import Skills from "./Skills";
import Languages from "./Languages";
import Links from "./Links";

export const Sidebar = ({ showAll }: { showAll: boolean }) => {
  return (
    <View style={styles.sideBar}>
      {showAll && (
        <>
          <Image source={"/alfred.jpeg"} style={styles.foto} />
          <Contact />
          <Skills />
          <Languages />
          <Links />
        </>
      )}
    </View>
  );
};

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
  foto: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
    alignSelf: "center",
  },
});
