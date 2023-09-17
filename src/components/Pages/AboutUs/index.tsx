import { View, ScrollView, Dimensions } from "react-native";
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
      <Typography text="Sobre Nós" type="h" />
      <Typography text="Fundada em 1978, a Nave do Som começou como uma pequena operação fornecendo serviços de iluminação e som para eventos locais. Desde então, cresceu para se tornar um dos principais fornecedores de soluções de eventos da região." />
      <Image
        src={picture}
        alt="Sobre Nós"
        style={{ width, height: width / 0.9, borderRadius: 10 }}
      />
      <Typography text="O que nos diferencia é o nosso compromisso com a qualidade e a seriedade em tudo o que fazemos. Acreditamos que, para ter sucesso no negócio de eventos, é preciso estar sempre à frente das tendências, usando a tecnologia mais modernas e inovando constantemente." />
      <Typography text="Mas não é só isso que nos faz especiais. Nós valorizamos profundamente nossos clientes e trabalhamos arduamente para garantir que cada evento seja um sucesso. Nossa equipe é composta por profissionais altamente qualificados e experientes, que sabem como transformar sua visão em realidade." />
      <View style={{ borderWidth: 1, width }}>
        <Typography text="Nossa Missão" type="h" />
        <Typography text="A Nave do Som trabalha para atender você, nosso amigo e cliente, para tornar seu evento inesquecível. Fazemos um trabalho de excelência visando surpreender a todos, nos diferenciando do padrão que encontra-se no mercado. Trabalhamos em seu evento como se fosse nosso também!" />
        <Typography text="Valores Que Prezamos" type="h" />
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;
