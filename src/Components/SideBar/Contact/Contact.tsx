import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";

import Mail from "@components/icons/mail";
import Whatsapp from "@components/icons/whatsapp";
import MapPin from "@components/icons/map-pin";
import LinkIcon from "@components/icons/link-icon";

import { text } from "../../../translations/spanish";

export const Contact = () => {
  return (
    <View style={styles.contact}>
      <Text style={styles.title}>CONTACT</Text>
      <View style={styles.contactInfo}>
        <Mail size={12} />
        <Text style={styles.contactInfo}>{text.sidebar.contact.email}</Text>
        <LinkIcon size={12} />
      </View>
      <View style={styles.contactInfo}>
        <Whatsapp size={12} />
        <Link style={styles.contactInfo} src="https://wa.me/+5492996223031">
          {text.sidebar.contact.phone}
        </Link>
        <LinkIcon size={12} />
      </View>
      <View style={styles.contactInfo}>
        <MapPin size={12} />
        <Text style={styles.contactInfo}>{text.sidebar.contact.location}</Text>
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
