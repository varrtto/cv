import { Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "@components/icons/react";
import Nextjs from "@components/icons/nextjs";
import ReactNative from "@components/icons/react-native";
import Tailwind from "@components/icons/tailwind";

import { text } from "../../../translations/spanish";

export const Skills = () => {
  return (
    <View style={styles.skills}>
      <Text style={styles.title}>{text.sidebar.skills.title}</Text>
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
  );
};

const styles = StyleSheet.create({
  skills: {
    gap: 5,
  },
  skill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  skillName: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
});
