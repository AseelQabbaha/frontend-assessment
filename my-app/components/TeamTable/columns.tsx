"use client";

import { ColumnDef } from "@tanstack/react-table";

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Agent" | "Creator";
  avatar: string;
};

export const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const avatar = row.original.avatar;
      return (
        <img
          src={avatar}
          className="w-10 h-10 rounded-full border shadow-sm"
          alt="avatar"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
    cell: ({ row }) => (
      <span className="font-medium">{row.original.name}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    enableSorting: true,
    cell: ({ row }) => (
      <span className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700">
        {row.original.role}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
