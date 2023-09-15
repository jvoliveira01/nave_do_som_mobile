import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Box from "../components/shared/Box";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import * as MailComposer from 'expo-mail-composer';
import {EMAIL_NAVE_DO_SOM} from '@env';

type Form = {
  name: string;
  phone: string;
  email: string;
  matter: string;
}
const Contact = () => {
  const [formFields, setFormFields] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    matter: "",
  });

  const emailValidator = (email: string) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return 0;
    }
    return 1;
  };

  const checkInternetConnection = () => {
    const isConnected = NetInfo.addEventListener(state => {
      return state.isConnected;
    })
    return isConnected;
  } 

  const sendMail = async () => {
    if (!formFields.name || !formFields.phone || !formFields.email) {
      return alert("Preencha todos os campos.");
    }
    if (!emailValidator(formFields.email)) {
      return alert("Informe um e-mail correto/válido.");
    }
    if (!checkInternetConnection){
      return alert("É necessário conexão com internet para enviar o email! Tente novamente mais tarde.")
    }
    try {
      const htmlMail = `<strong>Novo e-mail enviado do aplicativo</strong> <br /> <strong>Remetente:</strong> ${
        formFields.name
      } <br /> <strong>Telefone para contato:</strong> ${formFields.phone} <br /> <strong>E-mail:</strong> ${
        formFields.email
      } <br /> <strong>Assunto:</strong> ${
        formFields.matter !== "" ? formFields.matter : "REMETENTE NÃO INFORMOU ASSUNTO."
      } `;

      MailComposer.composeAsync({
        subject: "EMAIL DO APLICATIVO",
        body: htmlMail,
        isHtml: true,
        recipients: [EMAIL_NAVE_DO_SOM]        
      })

      setFormFields({
        name: "",
        phone: "",
        email: "",
        matter: "",
      });
      alert('Email enviado com sucesso!')

    } catch (err) {
      alert(err);
    }
  }

  return (
    <Box>
      <Header />
      <TextInput
        placeholder="Nome"
        value={formFields.name}
        onChangeText={(text) => {
          return setFormFields((oldFields) => {
            return {
              ...oldFields,
              name: text
            }
          })
        }}
      />
      <TextInput
        placeholder="Telefone"
        value={formFields.phone}
        keyboardType="phone-pad"
        onChangeText={(text) => {
          return setFormFields((oldFields) => {
            return {
              ...oldFields,
              phone: text
            }
          })
        }}
      />
      <TextInput
        placeholder="E-mail"
        value={formFields.email}
        onChangeText={(text) => {
          return setFormFields((oldFields) => {
            return {
              ...oldFields,
              email: text
            }
          })
        }}
      />
      <TextInput
        placeholder="Assunto"
        value={formFields.matter}
        onChangeText={(text) => {
          return setFormFields((oldFields) => {
            return {
              ...oldFields,
              matter: text
            }
          })
        }}
      />
      <Button onPress={sendMail} title="ENVIAR"/>
      <NavBar />
    </Box>
  );
};

export default Contact;
