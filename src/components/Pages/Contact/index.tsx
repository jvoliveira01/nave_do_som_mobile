import { View, ScrollView, Linking } from "react-native";
import Typography from "../../shared/Typography";
import { styles } from "../../../styles";
import Image from "../../shared/Image";
import ContactInfo from "../../shared/ContactInfo";
import { router } from "expo-router";

const ContactScreen = () => {
  const whatsapp = require("../../../../assets/images/icons/whatsappPB.png");
  const fone = require("../../../../assets/images/icons/phone.png");

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <Typography text="Contato" type="h" style={styles.contactTypography} />
      <View style={styles.contactMainContainer}>
        <Typography
          text="Solicite um orçamento, tire suas dúvidas! Entre em contato com a gente para dar o play no seu evento."
          style={{ textAlign: "justify" }}
        />
        <View style={styles.contactContent}>
          <ContactInfo
            image={
              <Image src={whatsapp} alt="Whatsapp" style={styles.contactIcon} />
            }
            text="(37)99988-1788"
            onPress={() =>
              router.push("https://api.whatsapp.com/send?phone=5537999881788")
            }
          />
          <ContactInfo
            image={
              <Image src={fone} alt="Telefone" style={styles.contactIcon} />
            }
            text="(37)3322-1787"
            onPress={() => router.push("tel://03733221787")}
          />
        </View>
        <Typography
          text="Nos envie um e-mail, entraremos em contato em breve!"
          style={styles.emailTypography}
        />
        <Typography
          text="navedosom@navedosom.com.br"
          type="h"
          onPress={() => Linking.openURL("mailto:navedosom@navedosom.com.br")}
          style={styles.email}
        />
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
