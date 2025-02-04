import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import Whatsapp from "@components/icons/whatsapp";

const Reference = ({ contact, phone }: { contact: string; phone: string }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{contact}</Text>
      <View style={styles.contactInfoWrapper}>
        <Whatsapp size={12} />
        <Link style={styles.contactInfo} src={`https://wa.me/${phone}`}>
          {phone}
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 12,
    gap: 3,
  },
  contactInfoWrapper: {
    flexDirection: "row",
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
});

export default Reference;
