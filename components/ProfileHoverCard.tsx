"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

/**
 * HoverProfileCard 컴포넌트에서 사용할 props 정의
 */
type HoverProfileCardProps = {
  /** 트리거로 보여줄 텍스트 (예: "@radix_ui") */
  triggerText: string;

  /** 클릭 시 이동할 외부 링크 */
  link: string;

  /** 아바타 이미지 URL */
  avatarSrc: string;

  /** 프로필 이름 */
  name: string;

  /** 사용자 아이디 */
  username: string;

  /** 카드 설명 텍스트 */
  description: string;
};

export default function HoverProfileCard({
  triggerText,
  link,
  avatarSrc,
  name,
  username,
  description,
}: HoverProfileCardProps) {
  return (
    <HoverCard.Root>
      {/* HoverCard를 여는 트리거 */}
      <HoverCard.Trigger asChild>
        <Link href={link} target="_blank" className="underline">
          {triggerText}
        </Link>
      </HoverCard.Trigger>

      {/* HoverCard 내용 */}
      <HoverCard.Portal>
        <HoverCard.Content style={{ maxWidth: 320 }}>
          <Flex gap="4">
            <Avatar
              size="3"
              radius="full"
              src={avatarSrc}
              fallback={name[0]}
            />

            <Box>
              <Heading size="3">{name}</Heading>
              <Text size="2" color="gray" mb="2">
                {username}
              </Text>
              <Text size="2">
                {description}
              </Text>
            </Box>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
