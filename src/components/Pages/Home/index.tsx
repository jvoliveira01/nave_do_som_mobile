import { carousel } from "../../../constants/carousel";
import { banners } from "../../../constants/banners";
import Image from "../../../components/shared/Image";
import {
  FlatList,
  ScrollView,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles } from "../../../styles";
import Typography from "../../../components/shared/Typography";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const { width } = Dimensions.get("window");
  const router = useRouter();

  const iluminacao = require("../../../../assets/images/icons/iluminacao.png");
  const som = require("../../../../assets/images/icons/som.png");
  const palco = require("../../../../assets/images/icons/palco.png");
  const fechar = require("../../../../assets/images/icons/fechar.png");

  const [banner, setBanner] = useState(banners[0]);
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    if (index < banners.length - 1) {
      return setIndex(index + 1);
    }
    setIndex(0);
  }, 4000);

  useEffect(() => {
    setBanner(banners[index]);
  }, [index]);

  const [selectedImage, setSelectedImage] = useState();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 60 }}
      >
        <View style={styles.homeMainView}>
          <Typography text="INOVAÇÃO" type="h" style={styles.homeTitleText} />
          <Typography text="TECNOLOGIA" type="h" style={styles.homeTitleText} />
          <Typography text="EXCELÊNCIA" type="h" style={styles.homeTitleText} />
        </View>
        <Image
          src={banner.src}
          alt={banner.alt}
          style={{ width, height: width / 1.5, opacity: 0.7 }}
        />
        <View style={styles.homeMainContent}>
          <Typography
            text="Temos diversos equipamentos para seu evento ser inesquecível"
            type="h"
            style={styles.homeMainContentTitles}
          />
          <Image
            src={iluminacao}
            alt="Iluminação"
            style={styles.homeCategoriesText}
          />
          <Typography
            text="A Iluminação é uma das peças mais importantes em um evento, pois transmitem a energia do ambiente e tornam tudo mais bonito e colorido. Por isso, é fundamental contar com equipamentos de qualidade, que permitam criar diferentes efeitos de luz, com cores e intensidades variadas. Por isso, se você deseja um evento perfeito, não deixe de usar uma boa iluminação. Os modernos equipamentos de iluminação que temos à disposição são capazes de transformar qualquer ambiente, proporcionando uma experiência única e inesquecível ao público!"
            style={{ textAlign: "justify" }}
          />

          <Image src={som} alt="Iluminação" style={styles.homeCategoriesText} />
          <Typography
            text="Além dos equipamentos modernos de iluminação, também contamos com sistemas de som e sonorização de alta performance, que atendem às mais exigentes demandas do mercado de eventos. Nossa equipe técnica é altamente especializada e está preparada para garantir que o som do seu evento esteja sempre perfeito, seja para uma apresentação musical, um discurso ou uma cerimônia. Esses são elementos indispensáveis para que o seu evento seja um sucesso absoluto! E não estamos exagerando, afinal, é através do som que conseguimos criar o clima perfeito para cada momento da sua festa."
            style={{ textAlign: "justify" }}
          />

          <Image
            src={palco}
            alt="Iluminação"
            style={styles.homeCategoriesText}
          />
          <Typography
            text="E se você quer que seu evento seja realmente memorável, uma estrutura de palco e treliças bem montada é essencial. Nossas estruturas possuem os mais altos padrões de segurança e qualidade, para garantir a segurança e conforto de todos durante o evento. E com nossos fogos automatizados, você terá um show de luzes e cores que vai encantar a todos os presentes! Além disso, nossa equipe técnica está sempre à disposição para ajudar em todas as etapas do processo, desde a escolha das estruturas até a instalação dos equipamentos no local. Tudo é feito com muito profissionalismo e atenção aos detalhes, para que você tenha a melhor experiência possível."
            style={{ textAlign: "justify" }}
          />
          <Typography
            text="Veja alguns de nossos trabalhos"
            type="h"
            style={styles.homeMainContentTitles}
          />
        </View>
        <FlatList
          data={carousel}
          renderItem={(option) => (
            <Image
              src={option.item.src}
              alt={option.item.alt}
              style={styles.carousel}
              onPress={() => setSelectedImage(option.item.src)}
            />
          )}
          horizontal
          keyExtractor={(item) => item.src}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"start"}
          scrollEventThrottle={1}
          decelerationRate={"fast"}
        />

        <View style={styles.homeMainContent}>
          <Typography
            text="Estamos há anos nesse mercado, e temos muita história para contar..."
            type="h"
            style={styles.homeMainContentTitles}
          />

          <Video
            source={require("../../../../assets/video.mp4")}
            style={{ width, height: 210 }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
          />

          <Typography
            text="Temos tudo o que você precisa, desde a iluminação de alta qualidade até a estruturas de palco, treliças e fogos."
            style={{ textAlign: "justify" }}
          />
          <Typography
            text="A NAVE DO SOM É SUA MELHOR ESCOLHA"
            type="h"
            style={styles.homeHighlightPhrase}
          />
          <Typography
            text="Estamos sempre investindo em equipamentos modernos e de alta performance para garantir que nossos clientes tenham acesso ao melhor do mundo dessa arte que é a realização de eventos com tanta excelência. Além disso, contamos com uma equipe qualificada, pronta para agir em todas as etapas do processo, desde o planejamento até a execução."
            style={{ textAlign: "justify" }}
          />
          <Typography
            text="Fale com a gente, e veja como podemos te ajudar. Estamos ansiosos para te atender!"
            style={{ textAlign: "justify" }}
          />
        </View>
      </ScrollView>
      <View style={styles.homeWhatsAppButton}>
        <Image
          src={require("../../../../assets/images/icons/whatsapp.png")}
          alt="WhatsApp"
          style={{ width: 45, height: 45 }}
          onPress={() =>
            router.push("https://api.whatsapp.com/send?phone=5537999881788")
          }
        />
      </View>
      {selectedImage ? (
        <Pressable
          style={styles.homeLightBox}
          onPress={() => setSelectedImage(undefined)}
        >
          <View style={styles.lightBoxCloseButton}>
            <Image
              src={fechar}
              alt="Zoom"
              style={{ width: 30, height: 30 }}
              onPress={() => setSelectedImage(undefined)}
            />
          </View>
          <Image
            src={selectedImage}
            alt="Zoom"
            style={{ width, height: 250 }}
          />
        </Pressable>
      ) : null}
    </>
  );
};

export default HomeScreen;
