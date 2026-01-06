"use client";

import { useState } from "react";
import {
  Flex,
  Text,
  Heading,
  Switch,
  Table,
  Box,
  Avatar,
} from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import UserTable from "@/components/UserTable";
import ProfileHoverCard from "@/components/ProfileHoverCard";

import Link from "next/link";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <Flex
      height="100vh"
      direction="column"
      align="center"
      justify="center"
      gap="6"
      px="4"
    >
      <Heading size="8">함께팜 🌱</Heading>
      <Text color="gray">지역 농산물 공동구매 플랫폼</Text>

      {/* Switch */}
      <Flex align="center" gap="2">
        <Text size="2">다크 모드</Text>
        <Switch checked={dark} onCheckedChange={setDark} />
      </Flex>

      {/* HoverCard */}
      <Text size="3">
      Follow{" "}
        <ProfileHoverCard
          triggerText="@radix_ui"
          link="https://twitter.com/radix_ui"
          avatarSrc="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          name="Radix"
          username="@radix_ui"
          description="Accessible, composable React UI components."
        />{" "}
        for updates.
      </Text>

      {/* Table */}
      <UserTable />
    

    </Flex>
  );
}
