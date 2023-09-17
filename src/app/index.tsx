import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Box from "../components/shared/Box";
import HomeScreen from "../components/Pages/Home";

const Home = () => {
  return (
    <Box>
      <Header />
      <HomeScreen />
      <NavBar />
    </Box>
  );
};

export default Home;
