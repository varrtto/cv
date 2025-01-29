import { Text, View, Link, StyleSheet } from "@react-pdf/renderer";

import Linkedin from "@components/icons/linkedin";
import Github from "@components/icons/github";
import LinkIcon from "@components/icons/link-icon";

export const Links = () => {
  return (
    <View style={styles.links}>
      <Text style={styles.title}>LINKS</Text>
      <View style={styles.link}>
        <Linkedin size={12} />
        <Link
          style={styles.linkText}
          href="https://www.linkedin.com/in/alfredo-gore"
        >
          Linkedin
        </Link>
        <LinkIcon size={12} />
      </View>
      <View style={styles.link}>
        <Github size={12} />
        <Link style={styles.linkText} href="https://github.com/varrtto">
          Github
        </Link>
        <LinkIcon size={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  links: {
    gap: 5,
  },
  title: {
    fontSize: 14,
  },
  link: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    textDecoration: "none",
    color: "inherit",
  },
});
