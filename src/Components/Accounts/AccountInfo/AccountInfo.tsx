import React from "react";
import { Button, Input, NumberInput, SimpleGrid, Text } from "@mantine/core";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const AccountInfo = () => {
  return (
    <>
      <Text variant="transparent" fw={600} mt="lg">
        Hesap Bilgilerim
      </Text>
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
          <Input placeholder="Samed" />
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
          <Input placeholder="Deniz" />
        </Input.Wrapper>
      </SimpleGrid>

      <Input.Wrapper label="Telefon Numarası" withAsterisk size="md" mt="lg">
        <PhoneInput
          variant="filled"
          country={"tr"}
          inputStyle={{ width: "100%" }} // Input stilini tam genişlikte yapar
        />
      </Input.Wrapper>

      <Input.Wrapper
        label="E-Posta"
        withAsterisk
        //   description="Input description"
        //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
        size="md"
        high
        mt="lg"
      >
        <Input placeholder="samedcodeniz@gmail.com" />
      </Input.Wrapper>

      <Text mt="sm" mb="md" ta="right">
        {" "}
      </Text>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button mt="lg" mb="xl" color="rgba(0, 0, 0, 1)">
          {/* className={classes.loginButton} */}
          KAYDET
        </Button>
      </div>
    </>
  );
};

export default AccountInfo;
