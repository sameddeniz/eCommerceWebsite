import { Button, Group, Text } from "@mantine/core";
import {
  IconAdjustmentsHorizontal,
  IconMapPin,
  IconPackage,
} from "@tabler/icons-react";
import React from "react";

const LeftMainMenu = () => {
  return (
    <>
      <Text style={{ fontSize: 40 }} fw={700} mb="xl">
        Hesabım
      </Text>
      <Group mb="xl">
        <IconAdjustmentsHorizontal size={24} />
        <Text variant="transparent" fw={400}>
          Hesap Bilgilerim
        </Text>
      </Group>
      <Group mb="xl">
        <IconPackage size={24} />
        <Text variant="transparent" fw={400}>
          Siparişlerim
        </Text>
      </Group>
      <Group mb="xl">
        <IconMapPin size={24} />
        <Text variant="transparent" fw={400}>
          Adreslerim
        </Text>
      </Group>
    </>
  );
};

export default LeftMainMenu;
