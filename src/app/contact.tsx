import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Typography from "../components/shared/Typography";
import Box from "../components/shared/Box";
import { useEffect, useState } from "react";
import * as MailComposer from 'expo-mail-composer';
import { Button, Text, TextInput } from "react-native";
import { api } from "../services/api";

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

  const sendMail = async () => {
    if (!formFields.name || !formFields.phone || !formFields.email) {
      return alert("Preencha todos os campos.");
    }
    if (!emailValidator(formFields.email)) {
      return alert("Informe um e-mail correto/válido.");
    }

    try {
      //setLoading(true)
      await api.post('/email',{
        body: formFields
      })

      setFormFields({
        name: "",
        phone: "",
        email: "",
        matter: "",
      });

      //setLoading(false)
      alert("Email enviado com sucesso");
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
