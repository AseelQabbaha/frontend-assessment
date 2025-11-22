"use client";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";
import { columns, TeamMember } from "./columns";
import { TableRowSkeleton } from "../LoadingSkeleton";

type Props = {
  data: TeamMember[];
  page: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  loading?: boolean;
};

export default function TeamTable({
  data,
  page,
  totalPages,
  onNextPage,
  onPrevPage,
  loading = false,
}: Props) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto glass rounded-xl shadow-xl border border-white/20 dark:border-gray-700/30 animate-fade-in">
      <table className="min-w-full text-sm">
        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-200 uppercase text-xs tracking-wider"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-2">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <span className="text-blue-500">
                      {{
                        asc: " ↑",
                        desc: " ↓",
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-white dark:bg-gray-800/50">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <TableRowSkeleton key={index} />
            ))
          ) : (
            table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-200 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <button
          type="button"
          disabled={page === 1}
          onClick={(e) => {
            e.preventDefault();
            onPrevPage();
          }}
          className="px-6 py-2 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 dark:hover:bg-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-gray-700 dark:text-gray-200"
        >
          ← Prev
        </button>

        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
          Page {page} of {totalPages}
        </span>

        <button
          type="button"
          disabled={page === totalPages}
          onClick={(e) => {
            e.preventDefault();
            onNextPage();
          }}
          className="px-6 py-2 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 dark:hover:bg-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-gray-700 dark:text-gray-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
