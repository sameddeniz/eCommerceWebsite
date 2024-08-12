import {
  Button,
  Container,
  Input,
  SimpleGrid,
  Textarea,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <Container size="sm">
        <Text style={{ fontSize: 40 }} mt="xl" mb="xl" fw={700} ta="center">
          Bize Ulaşın
        </Text>
        <Text size="md" mt="xl" mb="xl" fw={300} ta="center">
          Bize aşağıdaki iletişim formundan ulaşabilirsiniz.
        </Text>
        <SimpleGrid cols={2}>
          <Input
            size="lg"
            mt="xl"
            mb="xl"
            variant="filled"
            placeholder="İsim"
          />
          <Input
            size="lg"
            mt="xl"
            mb="xl"
            variant="filled"
            placeholder="Soyisim"
          />
        </SimpleGrid>
        <Input size="lg" variant="filled" placeholder="E-mail Adres" />
        <Textarea
          variant="filled"
          placeholder="Mesaj"
          autosize
          mt="xl"
          mb="xl"
          size="xl"
          minRows={6}
        />
        <Button mx="auto" mt="xl" mb="xl" className={classes.loginButton}>
          GÖNDER
        </Button>
        <br />
        <Text mt="xl" mb="xl" ta="center">
          *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00' a kadar verilen
          siparişler icin geçerlidir. <br />
          Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.
        </Text>
        <Text mt="xl" mb="xl" ta="center">
          Telefon ile <strong>0850 303 29 89</strong> numarasını arayarak da
          bizlere sesli mesaj bırakabilirsiniz . Sesli mesajlarınıza hafta içi
          saat <strong>09:00-17:00</strong> arasında dönüş sağlanmaktadır.
        </Text>
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default ContactForm;
