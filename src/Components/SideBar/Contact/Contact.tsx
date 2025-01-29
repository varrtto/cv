import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";

import Mail from "@components/icons/mail";
import Whatsapp from "@components/icons/whatsapp";
import MapPin from "@components/icons/map-pin";
import LinkIcon from "@components/icons/link-icon";

export const Contact = () => {
  return (
    <View style={styles.contact}>
      <Text style={styles.title}>CONTACT</Text>
      <View style={styles.contactInfo}>
        <Mail size={12} />
        <Text style={styles.contactInfo}>alfredo.gore@gmail.com</Text>
        <LinkIcon size={12} />
      </View>
      <View style={styles.contactInfo}>
        <Whatsapp size={12} />
        <Link style={styles.contactInfo} src="https://wa.me/+5492996223031">
          +54 9 299 6223031
        </Link>
        <LinkIcon size={12} />
      </View>
      <View style={styles.contactInfo}>
        <MapPin size={12} />
        <Text style={styles.contactInfo}>Neuquén, Argentina</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    gap: 5,
  },
  contactInfo: {
    fontSize: 12,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
  title: {
    fontSize: 14,
  },
});
