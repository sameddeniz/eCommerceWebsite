import React from "react";
import { Button, Grid, Input, SimpleGrid, Text } from "@mantine/core";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import classes from "./Addresses.module.css";

const AddressesInfo = () => {
  return (
    <>
      <Text variant="transparent" fw={600} mt="lg">
        Adres Oluştur
      </Text>
      <Text className={classes.addressWarning} mt="md">
        Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres oluşturunuz.
      </Text>
      <Grid mt="xl">
        <Grid.Col span={6}>
          <Input.Wrapper
            label="Adres Başlığı"
            withAsterisk
            //   description="Input description"
            //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
            size="md"
            high
            // mt="xl"
          >
            <Input placeholder="Ev, İş, vb.." />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span="auto"></Grid.Col>
      </Grid>
      <SimpleGrid cols={2}>
        <Input.Wrapper
          label="Ad"
          withAsterisk
          //   description="Input description"
          //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
          size="md"
          high
          mt="lg"
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
          mt="lg"
        >
          <Input placeholder="Deniz" />
        </Input.Wrapper>
      </SimpleGrid>

      <Input.Wrapper
        label="Adres"
        withAsterisk
        //   description="Input description"
        //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
        size="md"
        high
        mt="lg"
      >
        <Input placeholder="Açık Adresiniz" />
      </Input.Wrapper>

      <SimpleGrid cols={2}>
        <Input.Wrapper
          label="İlçe"
          withAsterisk
          //   description="Input description"
          //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
          size="md"
          high
          mt="lg"
        >
          <Input placeholder="İlçeniz" />
        </Input.Wrapper>
        <Input.Wrapper
          label="Şehir"
          withAsterisk
          //   description="Input description"
          //   error="Lütfen e-posta adresinizi doğru formatta giriniz!"
          size="md"
          high
          mt="lg"
        >
          <Input placeholder="Şehriniz" />
        </Input.Wrapper>
      </SimpleGrid>

      <Input.Wrapper label="Telefon Numarası" withAsterisk size="md" mt="lg">
        <PhoneInput
          variant="filled"
          country={"tr"}
          inputStyle={{ width: "100%" }} // Input stilini tam genişlikte yapar
        />
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

export default AddressesInfo;
