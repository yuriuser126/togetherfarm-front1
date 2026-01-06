"use client";

import { Table, Box } from "@radix-ui/themes";

export type User = {
  name: string;
  email: string;
  role: string;
};

const users: User[] = [
  {
    name: "김유리",
    email: "yuri@example.com",
    role: "구매자",
  },
  {
    name: "박민수",
    email: "minsu@example.com",
    role: "농가",
  },
];

export default function UserTable() {
  return (
    <Box width="100%" maxWidth="520px">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>이름</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>이메일</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>역할</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.email}>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
