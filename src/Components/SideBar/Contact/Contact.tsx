import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import Mail from "@Components/icons/mail";
import Whatsapp from "@Components/icons/whatsapp";
import MapPin from "@Components/icons/map-pin";

const styles = StyleSheet.create({
  contact: {
    gap: 5,
  },
  contactInfo: {
    fontSize: 12,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});

export const Contact = () => {
  return (
    <View style={styles.contact}>
      <Text>CONTACT</Text>
      <View style={styles.contactInfo}>
        <Mail size={12} />
        <Text style={styles.contactInfo}>alfredo.gore@gmail.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <Whatsapp size={12} />
        <Link style={styles.contactInfo} src="https://wa.me/+5492996223031">
          +54 9 299 6223031
        </Link>
      </View>
      <View style={styles.contactInfo}>
        <MapPin size={12} />
        <Text style={styles.contactInfo}>
          Rufino Ortega 48, Neuquén, Neuquén, Argentina
        </Text>
      </View>
    </View>
  );
};
