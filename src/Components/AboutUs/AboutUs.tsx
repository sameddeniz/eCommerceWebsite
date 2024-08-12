import { Container, Text, Image, Button } from "@mantine/core";
import React from "react";
import { FaStar } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <Container size="lg" mt="lg">
        <Text size="xl" fw={700} mb="md">
          <b>
            Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız
          </b>
        </Text>
        <Text size="sm" mb="md">
          2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve
          fonksiyonel gıdaları üreten bir firma olarak; müşterilerimize en
          kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz. <br />
          <br />
          Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur.
          Ürünlerimizde, yüksek kalite standartlarına bağlı olarak, sporcuların
          ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici
          çözümler sunuyoruz. Ürün yelpazemizdeki protein tozları, aminoasitler,
          vitamin ve mineral takviyeleri ile spor performansınızı desteklemek
          için ideal besin değerlerini sunuyoruz. <br />
          <br />
          Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle,
          inovasyon, kalite, sağlık ve güvenlik ilkelerimizi korurken, sürekli
          olarak ürünlerimizi geliştirmeye ve yenilikçi beslenme çözümleri
          sunmaya devam ediyoruz. <br />
          <br />
          Sporcu gıdaları konusunda lider bir marka olarak, sizin sağlığınıza ve
          performansınıza değer veriyoruz. Siz de spor performansınızı en üst
          seviyeye çıkarmak ve sağlıklı yaşam tarzınızı desteklemek
          istiyorsanız, bize katılın ve en besleyici çözümlerimizle tanışın.
          Sağlıklı ve aktif bir yaşam için biz her zaman yanınızdayız.
        </Text>
        <Text size="xl" fw={700} mb="md">
          1.000.000+ den Fazla Mutlu Müşteri{" "}
        </Text>
        <Text size="sm" mb="lg">
          Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın
          her alanında sağlıklı yaşamı ve beslenmeyi hedefleyen 1.000.000'den
          fazla kişiye ulaştık.{" "}
        </Text>
        <Text size="xl" fw={700} mb="md" mt="lg">
          Sertifikalarımız
        </Text>
        <Image
          radius="xs"
          h={100}
          w="auto"
          fit="contain"
          mb="xl"
          src="../src/assets/certificates.png"
        />
        <div>
          <hr />
        </div>
        <Text c="blue" fw={500}>
          <FaStar color="yellow" />
          &nbsp;
          <FaStar color="yellow" />
          &nbsp;
          <FaStar color="yellow" />
          &nbsp;
          <FaStar color="yellow" />
          &nbsp;
          <FaStar color="yellow" />
          &nbsp; &nbsp; 198453 Yorum
        </Text>
        <div>
          <hr />
        </div>
        <Button
          variant="gradient"
          radius="xl"
          mb="xl"
          h={47}
          gradient={{ from: "#3774c3", to: "#1d2aab", deg: 64 }}
        >
          ÜRÜN İNCELEMELERİ
        </Button>
      </Container>
    </>
  );
};

export default AboutUs;
