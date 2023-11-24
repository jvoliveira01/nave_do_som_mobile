import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Box from "../components/shared/Box";
import { useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import * as MailComposer from "expo-mail-composer";
import { EMAIL_NAVE_DO_SOM } from "@env";
import ContactScreen from "../components/Pages/Contact";

type Form = {
  name: string;
  phone: string;
  email: string;
  matter: string;
};
const Contact = () => {
  return (
    <Box>
      <Header />
      <ContactScreen />
      <NavBar />
    </Box>
  );
};

export default Contact;
