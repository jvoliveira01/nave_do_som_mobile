import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Box from "../components/shared/Box";
import { carousel } from "../constants/carousel";
import { banners } from "../constants/banners";
import Image from "../components/shared/Image";
import { FlatList, ScrollView, View, Dimensions } from "react-native";
import { styles } from "../styles";
import Typography from "../components/shared/Typography";
import { appTheme } from "../styles/theme";
import { useRouter } from "expo-router";

const Home = () => {
  const { width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <Box>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 65 }}
      >
        <View
          style={{
            position: "absolute",
            width,
            height: width / 1.5,
            zIndex: 1,
            justifyContent: "space-around",
          }}
        >
          <Typography
            text="INOVAÇÃO"
            type="h"
            style={{ fontSize: 25, textAlign: "center", color: "#fff" }}
          />
          <Typography
            text="TECNOLOGIA"
            type="h"
            style={{ fontSize: 25, textAlign: "center", color: "#fff" }}
          />
          <Typography
            text="EXCELÊNCIA"
            type="h"
            style={{ fontSize: 25, textAlign: "center", color: "#fff" }}
          />
        </View>
        <FlatList
          data={banners}
          renderItem={(option) => (
            <Image
              src={option.item.src}
              alt={option.item.alt}
              style={styles.banners}
            />
          )}
          horizontal
          keyExtractor={(item) => item.src}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
          scrollEventThrottle={1}
          decelerationRate={"fast"}
          scrollToOverflowEnabled
        />
        <Typography
          text="Temos diversos equipamentos para seu evento ser inesquecível"
          type="h"
          style={{ fontSize: 25, textAlign: "center" }}
        />
        <Typography
          text="A Iluminação é uma das peças mais importantes em um evento, pois transmitem a energia do ambiente e tornam tudo mais bonito e colorido. Por isso, é fundamental contar com equipamentos de qualidade, que permitam criar diferentes efeitos de luz, com cores e intensidades variadas. Por isso, se você deseja um evento perfeito, não deixe de usar uma boa iluminação. Os modernos equipamentos de iluminação que temos à disposição são capazes de transformar qualquer ambiente, proporcionando uma experiência única e inesquecível ao público!"
          style={{ textAlign: "justify" }}
        />
        <Typography
          text="Além dos equipamentos modernos de iluminação, também contamos com sistemas de som e sonorização de alta performance, que atendem às mais exigentes demandas do mercado de eventos. Nossa equipe técnica é altamente especializada e está preparada para garantir que o som do seu evento esteja sempre perfeito, seja para uma apresentação musical, um discurso ou uma cerimônia. Esses são elementos indispensáveis para que o seu evento seja um sucesso absoluto! E não estamos exagerando, afinal, é através do som que conseguimos criar o clima perfeito para cada momento da sua festa."
          style={{ textAlign: "justify" }}
        />
        <Typography
          text="E se você quer que seu evento seja realmente memorável, uma estrutura de palco e treliças bem montada é essencial. Nossas estruturas possuem os mais altos padrões de segurança e qualidade, para garantir a segurança e conforto de todos durante o evento. E com nossos fogos automatizados, você terá um show de luzes e cores que vai encantar a todos os presentes! Além disso, nossa equipe técnica está sempre à disposição para ajudar em todas as etapas do processo, desde a escolha das estruturas até a instalação dos equipamentos no local. Tudo é feito com muito profissionalismo e atenção aos detalhes, para que você tenha a melhor experiência possível."
          style={{ textAlign: "justify" }}
        />
        <Typography
          text="Veja alguns de nossos trabalhos"
          type="h"
          style={{ fontSize: 25, textAlign: "center" }}
        />

        <FlatList
          data={carousel}
          renderItem={(option) => (
            <Image
              src={option.item.src}
              alt={option.item.alt}
              style={styles.carousel}
            />
          )}
          horizontal
          keyExtractor={(item) => item.src}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"start"}
          scrollEventThrottle={1}
          decelerationRate={"fast"}
        />
        <Typography
          text="Estamos há anos nesse mercado, e temos muita história para contar..."
          type="h"
          style={{ fontSize: 25, textAlign: "center" }}
        />

        <Typography
          text="Temos tudo o que você precisa, desde a iluminação de alta qualidade até a estruturas de palco, treliças e fogos."
          style={{ textAlign: "justify" }}
        />
        <Typography
          text="A NAVE DO SOM É SUA MELHOR ESCOLHA"
          type="h"
          style={{
            fontSize: 25,
            textAlign: "center",
            color: appTheme.colors.primary[50],
          }}
        />
        <Typography
          text="Estamos sempre investindo em equipamentos modernos e de alta performance para garantir que nossos clientes tenham acesso ao melhor do mundo dessa arte que é a realização de eventos com tanta excelência. Além disso, contamos com uma equipe qualificada, pronta para agir em todas as etapas do processo, desde o planejamento até a execução."
          style={{ textAlign: "justify" }}
        />
        <Typography
          text="Fale com a gente, e veja como podemos te ajudar. Estamos ansiosos para te atender!"
          style={{ textAlign: "justify" }}
        />
      </ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          paddingRight: 10,
          marginBottom: 70,
          position: "absolute",
          bottom: 5,
        }}
      >
        <Image
          src={require("../../assets/images/icons/whatsapp.png")}
          alt="WhatsApp"
          style={{ width: 50, height: 50 }}
          onPress={() =>
            router.push("https://api.whatsapp.com/send?phone=5537999881788")
          }
        />
      </View>
      <NavBar />
    </Box>
  );
};

export default Home;
