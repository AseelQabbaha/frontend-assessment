"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Agent" | "Creator";
  avatar: string;
};

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
    case "Agent":
      return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
    case "Creator":
      return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
    default:
      return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  }
};

export const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const avatar = row.original.avatar || "https://i.pravatar.cc/150";
      return (
        <Image
          src={avatar}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-sm"
          alt={`${row.original.name} avatar`}
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
    cell: ({ row }) => (
      <span className="font-medium text-gray-900 dark:text-gray-100">
        {row.original.name}
      </span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    enableSorting: true,
    cell: ({ row }) => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleBadgeColor(row.original.role)}`}>
        {row.original.role}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-gray-600 dark:text-gray-400">{row.original.email}</span>
    ),
  },
];
