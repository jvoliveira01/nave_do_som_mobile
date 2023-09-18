import { carousel } from "../../../constants/carousel";
import { banners } from "../../../constants/banners";
import Image from "../../../components/shared/Image";
import { FlatList, ScrollView, View, Pressable } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles } from "../../../styles";
import Typography from "../../../components/shared/Typography";
import { usePathname, useRouter } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { appTheme } from "../../../styles/theme";

const HomeScreen = () => {
  const iluminacao = require("../../../../assets/images/icons/iluminacao.png");
  const som = require("../../../../assets/images/icons/som.png");
  const palco = require("../../../../assets/images/icons/palco.png");
  const fechar = require("../../../../assets/images/icons/fechar.png");
  const pause = require("../../../../assets/images/icons/pause.png");

  const router = useRouter();
  const videoRef = useRef<any>(null);
  const routeName = usePathname();

  const [banner, setBanner] = useState(banners[0]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  setTimeout(() => {
    if (index < banners.length - 1) {
      return setIndex(index + 1);
    }
    setIndex(0);
  }, 4000);

  useEffect(() => {
    setBanner(banners[index]);
  }, [index]);

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if ((routeName === "/about" || routeName === "/contact") && isPlaying) {
      togglePlayPause();
    }
  }, [routeName]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.bannersTextTitle}>
          <Typography text="INOVAÇÃO" type="h" style={styles.titlesText} />
          <Typography text="TECNOLOGIA" type="h" style={styles.titlesText} />
          <Typography text="EXCELÊNCIA" type="h" style={styles.titlesText} />
        </View>
        <Image src={banner.src} alt={banner.alt} style={styles.bannerImage} />
        <View style={styles.mainContent}>
          <Typography
            text="Temos tudo para tornar seu evento inesquecível"
            type="h"
            style={styles.titlesText}
          />
          <View style={styles.homeCategoriesView}>
            <Image
              src={iluminacao}
              alt="Iluminação"
              style={styles.homeCategoriesIcons}
            />
          </View>
          <Typography
            text="Uma boa Iluminação é essencial em um evento, pois transmitem a energia do ambiente e tornam tudo mais bonito e colorido. Por isso, é fundamental contar com equipamentos de qualidade, que permitam criar diferentes efeitos de luz, com cores e intensidades variadas. Por isso, se você deseja um evento perfeito, não deixe de usar uma boa iluminação. Os modernos equipamentos de iluminação que temos à disposição são capazes de transformar qualquer ambiente, proporcionando uma experiência única e inesquecível ao público!"
            style={styles.paragaphyText}
          />
          <View style={styles.homeCategoriesView}>
            <Image src={som} alt="Som" style={styles.homeCategoriesIcons} />
          </View>
          <Typography
            text="Além dos equipamentos modernos de iluminação, também contamos com sistemas de som e sonorização de alta performance, que atendem às mais exigentes demandas do mercado de eventos. Nossa equipe técnica é altamente especializada e está preparada para garantir que o som do seu evento esteja sempre perfeito, seja para uma apresentação musical, um discurso ou uma cerimônia. Esses são elementos indispensáveis para que o seu evento seja um sucesso absoluto! E não estamos exagerando, afinal, é através do som que conseguimos criar o clima perfeito para cada momento da sua festa."
            style={styles.paragaphyText}
          />
          <View style={styles.homeCategoriesView}>
            <Image src={palco} alt="Palco" style={styles.homeCategoriesIcons} />
          </View>
          <Typography
            text="E se você quer que seu evento seja memorável, uma estrutura de palco e treliças bem montada é essencial. Seguimos os mais altos padrões de segurança e qualidade para garantir a segurança e conforto de todos durante o evento. E com nossos fogos automatizados, você terá um show de luzes e cores que vai encantar a todos. Além disso, nossa equipe está sempre a disposição para ajudar em todas as etapas do processo, desde a escolha das estruturas até a instalação dos equipamentos. Tudo é feito com muito profissionalismo e atenção aos detalhes, para que você tenha a melhor experiência possível."
            style={styles.paragaphyText}
          />
          <Typography
            text="Veja alguns de nossos trabalhos"
            type="h"
            style={styles.titlesText}
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

        <View style={styles.mainContent}>
          <Typography
            text="Estamos há anos nesse mercado, e temos muita história para contar..."
            type="h"
            style={styles.titlesText}
          />
          <Pressable onPress={togglePlayPause}>
            <Video
              ref={videoRef}
              source={require("../../../../assets/video.mp4")}
              style={styles.video}
              usePoster
              posterSource={require("../../../../assets/poster.gif")}
              posterStyle={styles.posterVideo}
              resizeMode={ResizeMode.CONTAIN}
            />
            {!isPlaying && (
              <View style={styles.videoPauseView}>
                <Image
                  src={pause}
                  alt="Pause"
                  style={styles.videoPauseImage}
                  tintColor={appTheme.colors.secondary[50]}
                />
              </View>
            )}
          </Pressable>
          <Typography
            text="Temos tudo o que você precisa, desde a iluminação de alta qualidade até a estruturas de palco, treliças e fogos."
            style={styles.paragaphyText}
          />
          <Typography
            text="A NAVE DO SOM É SUA MELHOR ESCOLHA"
            type="h"
            style={styles.homeHighlightPhrase}
          />
          <Typography
            text="Estamos sempre investindo em equipamentos modernos e de alta performance para garantir que nossos clientes tenham acesso ao melhor do mundo dessa arte que é a realização de eventos com tanta excelência. Além disso, contamos com uma equipe qualificada, pronta para agir em todas as etapas do processo, desde o planejamento até a execução."
            style={styles.paragaphyText}
          />
          <Typography
            text={`\nFale com a gente, e veja como podemos te ajudar. Estamos ansiosos para te atender!`}
            style={styles.paragaphyText}
          />
        </View>
      </ScrollView>
      <View style={styles.homeWhatsAppView}>
        <Image
          src={require("../../../../assets/images/icons/whatsapp.png")}
          alt="WhatsApp"
          style={styles.homeWhatsAppImage}
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
          <View style={styles.lightBoxCloseButtonView}>
            <Image
              src={fechar}
              alt="Zoom"
              style={styles.homeWhatsAppImage}
              onPress={() => setSelectedImage(undefined)}
            />
          </View>
          <Image src={selectedImage} alt="Zoom" style={styles.lightBoxImage} />
        </Pressable>
      ) : null}
    </>
  );
};

export default HomeScreen;
