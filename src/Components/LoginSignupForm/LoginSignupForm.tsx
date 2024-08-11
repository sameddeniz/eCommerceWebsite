import {
  Button,
  Container,
  Input,
  SimpleGrid,
  Tabs,
  Text,
} from "@mantine/core";
import classes from "./LoginSignupForm.module.css";
import React from "react";

const LoginSignupForm = () => {
  return (
    <>
      <Container size="xs">
        <Tabs
          radius="md"
          color="black"
          variant="outline"
          defaultValue="gallery"
          mt="xl"
        >
          <Tabs.List grow>
            <Tabs.Tab value="gallery">GİRİŞ YAP</Tabs.Tab>
            <Tabs.Tab value="messages">ÜYE OL</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="gallery" pl={50} pr={50}>
            <Input.Wrapper
              label="E-Posta"
              withAsterisk
              //   description="Input description"
              //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
              size="md"
              high
              mt="xl"
            >
              <Input variant="filled" placeholder="samedcodeniz@gmail.com" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Şifre"
              withAsterisk
              //   description="Input description"
              //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
              size="md"
              mt="xl"
            >
              <Input variant="filled" placeholder="*************" />
            </Input.Wrapper>
            <Text mt="sm" mb="md" ta="right">
              <u>Şifremi Unuttum?</u>
            </Text>
            <Button fullWidth className={classes.loginButton}>
              GİRİŞ YAP
            </Button>
          </Tabs.Panel>
          <Tabs.Panel value="messages" pl={50} pr={50}>
            <SimpleGrid cols={2}>
              <Input.Wrapper
                label="Ad"
                withAsterisk
                //   description="Input description"
                //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
                size="md"
                high
                mt="xl"
              >
                <Input variant="filled" placeholder="Samed" />
              </Input.Wrapper>
              <Input.Wrapper
                label="Soyad"
                withAsterisk
                //   description="Input description"
                //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
                size="md"
                high
                mt="xl"
              >
                <Input variant="filled" placeholder="Deniz" />
              </Input.Wrapper>
            </SimpleGrid>
            <Input.Wrapper
              label="E-Posta"
              withAsterisk
              //   description="Input description"
              //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
              size="md"
              high
              mt="xl"
            >
              <Input variant="filled" placeholder="samedcodeniz@gmail.com" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Şifre"
              withAsterisk
              //   description="Input description"
              //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
              size="md"
              mt="xl"
            >
              <Input variant="filled" placeholder="*************" />
            </Input.Wrapper>
            <Text mt="sm" mb="md" ta="right">
              {" "}
            </Text>
            <Button mt="xl" fullWidth className={classes.loginButton}>
              ÜYE OL
            </Button>
            <Text mt="sm" mb="md" ta="left">
              Zaten bir üyeliğiniz var mı? <u>Giriş yap</u>
            </Text>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  );
};

export default LoginSignupForm;
