import { View, ScrollView, Dimensions } from "react-native";
import { styles } from "../../../styles";
import Typography from "../../shared/Typography";
import Image from "../../shared/Image";

const AboutUsScreen = () => {
  const picture = require("../../../../assets/images/surgimento.png");
  const { width } = Dimensions.get("window");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 60 }}
    >
      <Typography 
        text="Sobre Nós" 
        type="h" 
        style={{ 
          textAlign: "left", 
          paddingTop: 12, 
          paddingLeft: 8 
        }}
      />
      <View style={styles.aboutUsMainContainer}>
        <Typography 
          text="Fundada em 1978, a Nave do Som começou como uma pequena operação fornecendo serviços de iluminação e som para eventos locais. Desde então, cresceu para se tornar um dos principais fornecedores de soluções de eventos da região." 
          style={{ textAlign: "justify" }}
        />
        <Image
          src={picture}
          alt="Sobre Nós"
          style={{ 
            width: width - 25, 
            height: width / 0.9, 
            borderRadius: 10, 
            marginVertical: 12,            
          }}
        />
        <Typography 
          text="O que nos diferencia é o nosso compromisso com a qualidade e a seriedade em tudo o que fazemos. Acreditamos que, para ter sucesso no negócio de eventos, é preciso estar sempre à frente das tendências, usando a tecnologia mais modernas e inovando constantemente." 
          style={ styles.aboutUsMainContainerText }
        />
        <Typography 
          text="Mas não é só isso que nos faz especiais. Nós valorizamos profundamente nossos clientes e trabalhamos arduamente para garantir que cada evento seja um sucesso. Nossa equipe é composta por profissionais altamente qualificados e experientes, que sabem como transformar sua visão em realidade." 
          style={ styles.aboutUsMainContainerText }
        />
      
        <View style={{ borderWidth: 1, borderColor: "white", padding: 15 }}>
          <View style={ styles.aboutUsMissionContainer }>
            <Typography text="Nossa Missão" type="h" style={{textAlign: "center", paddingBottom: 12}}/>
            <Typography 
              text="A Nave do Som trabalha para atender você, nosso amigo e cliente, para tornar seu evento inesquecível. Fazemos um trabalho de excelência visando surpreender a todos, nos diferenciando do padrão que encontra-se no mercado. Trabalhamos em seu evento como se fosse nosso também!" 
              style={{ textAlign: "justify", paddingBottom: 12 }}
            />
          </View>
          <Typography text="Valores Que Prezamos" type="h" />
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;
