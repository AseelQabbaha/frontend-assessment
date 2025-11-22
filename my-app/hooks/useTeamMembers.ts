import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TEAM_MEMBERS, GetTeamMembersData, GetTeamMembersVars, TeamMember } from '../graphQl/teamQueries';
import { mockTeamMembers } from '../data/mockTeamMembers';

type UseTeamMembersParams = {
  page?: number;
  limit?: number;
  role?: string;
  search?: string;
  enabled?: boolean;
};

type UseTeamMembersResult = {
  data: {
    items: TeamMember[];
    pageInfo: { currentPage: number; totalPages: number; totalItems: number };
  } | null;
  loading: boolean;
  error: Error | null;
  refetch: (() => void) | null;
};

const DEFAULT_LIMIT = 9;

export function useTeamMembers({ page = 1, limit = DEFAULT_LIMIT, role, search, enabled = true }: UseTeamMembersParams): UseTeamMembersResult {
  const useMocks = process.env.NEXT_PUBLIC_USE_MOCKS !== '0';

  if (useMocks) {
    const normalizedSearch = (search || '').trim().toLowerCase();

    const filtered = useMemo(() => {
      return mockTeamMembers.filter((m) => {
        if (role && role.length > 0) {
          if (m.role.toLowerCase() !== role.toLowerCase()) return false;
        }
        if (normalizedSearch) {
          return m.name.toLowerCase().includes(normalizedSearch);
        }
        return true;
      });
    }, [role, normalizedSearch]);

    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));
    const currentPage = Math.min(Math.max(1, page), totalPages);

    const start = (currentPage - 1) * limit;
    const items = filtered.slice(start, start + limit);

    return {
      data: {
        items,
        pageInfo: {
          currentPage,
          totalPages,
          totalItems,
        },
      },
      loading: false,
      error: null,
      refetch: null,
    };
  }

  const { data, loading, error, refetch } = useQuery<GetTeamMembersData, GetTeamMembersVars>(
    GET_TEAM_MEMBERS,
    {
      variables: { page, limit, role: role || undefined, search: search || undefined },
      skip: !enabled,
      fetchPolicy: 'network-only',
    }
  );

  return {
    data: data ? data.teamMembers : null,
    loading,
    error: error ? (error as Error) : null,
    refetch: refetch ? () => refetch() : null,
  };
}
