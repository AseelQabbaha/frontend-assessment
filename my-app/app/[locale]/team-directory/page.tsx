"use client";

import { useTranslations } from "next-intl";
import { useTeamMembers } from "../../../hooks/useTeamMembers";
import { useTeamDirectoryStore } from "../../../stores/teamStore";
import TeamFilters from "../../../components/TeamFillters/TeamFillters";
import TeamTable from "../../../components/TeamTable/TeamTable";
import TeamGrid from "../../../components/TeamGrid/TeamGrid";
import { Groups as GroupsIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function TeamDirectoryPage() {
  const t = useTranslations("teamDirectory");
  const { filters, pagination, setPage } = useTeamDirectoryStore();

  const { data, loading, error } = useTeamMembers({
    page: pagination.page,
    limit: pagination.limit,
    role: filters.role || undefined,
    search: filters.search || undefined,
    enabled: true,
  });

  const handleNextPage = () => {
    const currentPage = data?.pageInfo.currentPage || pagination.page;
    const totalPages = data?.pageInfo.totalPages || 1;
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    const currentPage = data?.pageInfo.currentPage || pagination.page;
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const members = data?.items || [];
  const pageInfo = data?.pageInfo || { currentPage: 1, totalPages: 1, totalItems: 0 };

  return (
    <main className="p-4 sm:p-6 max-w-7xl mx-auto min-h-screen animate-fade-in">
      <Box
        sx={{
          mb: 4,
          p: 3,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <GroupsIcon sx={{ fontSize: 32, color: 'white' }} />
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2563eb, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 0.5,
              }}
            >
              {t("metadata.title")}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t("metadata.description")}
            </Typography>
          </Box>
        </Box>
      </Box>

      <TeamFilters />

      {error ? (
        <div className="flex flex-col items-center justify-center py-16 glass rounded-2xl shadow-xl border border-red-200 dark:border-red-800 animate-fade-in">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
            {t("error.title")}
          </div>
          <p className="text-sm text-red-600 dark:text-red-400">
            {error.message || t("error.message")}
          </p>
        </div>
      ) : (
        <>
          {/* Table View */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Table View
              </h2>
            </div>
            <TeamTable
              data={members}
              page={pageInfo.currentPage}
              totalPages={pageInfo.totalPages}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
              loading={loading}
            />
          </div>

          {/* Grid View */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Grid View
              </h2>
            </div>
            {loading ? (
              <TeamGrid members={[]} loading={true} />
            ) : members.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 glass rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mb-6 text-4xl">
                  🔍
                </div>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("emptyState")}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {t("emptyState.description")}
                </p>
              </div>
            ) : (
              <TeamGrid members={members} loading={false} />
            )}
          </div>
        </>
      )}
    </main>
  );
}
