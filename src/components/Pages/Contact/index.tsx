import { View, ScrollView, Dimensions } from "react-native";
import Typography from "../../shared/Typography";
import { styles } from "../../../styles";
import Image from "../../shared/Image";
import ContactInfo from "../../shared/ContactInfo";

const ContactScreen = () => {
    const { width } = Dimensions.get("window");

    const whatsapp = require("../../../../assets/images/icons/iluminacao.png");
    const fone = require("../../../../assets/images/icons/som.png");

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 60 }}
        >
            <Typography 
                text="Contato" 
                type="h" 
                style={{ 
                textAlign: "left", 
                paddingTop: 12, 
                paddingLeft: 8 
                }}
            />  
            <View style={styles.contactMainContainer}>
            <Typography 
                text="Solicite um orçamento, tire suas dúvidas! Entre em contato com a gente para dar o play no seu evento." 
                style={{ textAlign: "justify"}}
            />
            <View style={styles.contactContent}>
                <ContactInfo
                    image={
                        <Image
                            src={whatsapp}
                            alt="Whatsapp"
                            style={{ width: 60, height: 60 }}
                        />
                    }
                    text={"(37)99988-1788"}
                />
                <ContactInfo
                    image={
                        <Image
                            src={fone}
                            alt="Telefone"
                            style={{ width: 60, height: 60 }}
                        />
                    }
                    text={"(37)3322-1787"}
                />
            </View>
            <Typography
                text="Preencha o formulário de e-mail e entraremos em contato com você."
                style={{ width: '100%', textAlign: "justify"} }
            />
            </View>
        </ScrollView>
    )
}

export default ContactScreen;