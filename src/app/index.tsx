import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Box from "../components/shared/Box";
import { carousel } from "../constants/carousel";
import { banners } from "../constants/banners";
import Image from "../components/shared/Image";
import { FlatList, ScrollView } from "react-native";
import { styles } from "../styles";

const Home = () => {
  return (
    <Box>
      <Header />
      <ScrollView>
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
      </ScrollView>
      <NavBar />
    </Box>
  );
};

export default Home;
