"use client";

export function TeamMemberCardSkeleton() {
  return (
    <div className="p-6 glass rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 animate-pulse">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/50 to-purple-200/50 dark:from-blue-900/30 dark:to-purple-900/30 animate-pulse" />
        </div>
        <div className="flex-1 w-full space-y-3">
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded w-full" />
          <div className="h-7 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-full w-24 mx-auto mt-3" />
        </div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="border-b border-gray-100 dark:border-gray-700 animate-pulse">
      <td className="px-6 py-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
      </td>
      <td className="px-6 py-4">
        <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded w-32" />
      </td>
      <td className="px-6 py-4">
        <div className="h-6 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-full w-20" />
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded w-40" />
      </td>
    </tr>
  );
}

