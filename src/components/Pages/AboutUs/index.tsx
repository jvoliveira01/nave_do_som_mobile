import { View, ScrollView } from "react-native";
import { styles } from "../../../styles";
import Typography from "../../shared/Typography";
import Image from "../../shared/Image";
import ListItem from "../../shared/ListItem";

const AboutUsScreen = () => {
  const picture = require("../../../../assets/images/surgimento.png");
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <Typography text="Sobre Nós" type="h" style={styles.titlesText} />
      <View style={styles.mainContent}>
        <Typography
          text="Fundada em 1978, a Nave do Som começou como uma pequena operação fornecendo serviços de iluminação e som para eventos locais. Desde então, cresceu para se tornar um dos principais fornecedores de soluções de eventos da região."
          style={styles.paragaphyText}
        />
        <Image src={picture} alt="Sobre Nós" style={styles.aboutUsImage} />
        <Typography
          text="O que nos diferencia é o nosso compromisso com a qualidade e a seriedade em tudo o que fazemos. Acreditamos que, para ter sucesso no negócio de eventos, é preciso estar sempre à frente das tendências, usando a tecnologia mais modernas e inovando constantemente."
          style={styles.paragaphyText}
        />
        <Typography
          text="Mas não é só isso que nos faz especiais. Nós valorizamos profundamente nossos clientes e trabalhamos arduamente para garantir que cada evento seja um sucesso. Nossa equipe é composta por profissionais altamente qualificados e experientes, que sabem como transformar sua visão em realidade."
          style={styles.paragaphyText}
        />

        <View style={styles.aboutUsFrame}>
          <View style={styles.aboutUsMissionContainer}>
            <Typography
              text="Nossa Missão"
              type="h"
              style={styles.titlesText}
            />
            <Typography
              text="A Nave do Som trabalha para atender você, nosso amigo e cliente, para tornar seu evento inesquecível. Fazemos um trabalho de excelência visando surpreender a todos, nos diferenciando do padrão que encontra-se no mercado. Trabalhamos em seu evento como se fosse nosso também!"
              style={styles.paragaphyText}
            />
          </View>
          <Typography
            text="Valores Que Prezamos"
            type="h"
            style={styles.titlesText}
          />
          <View style={styles.aboutUsListContainer}>
            <ListItem text="Inovação" />
            <ListItem text="Ética e compromisso" />
            <ListItem text="Profissionalismo" />
            <ListItem text="Excelência" />
            <ListItem text="Satisfação do cliente e do público, nosso maior objetivo" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;
