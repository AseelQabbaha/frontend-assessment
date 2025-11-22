import { create } from 'zustand';

type Filters = {
  search: string;
  role: string;
};

type Pagination = {
  page: number;
  limit: number;
};

type TeamDirectoryStore = {
  filters: Filters;
  pagination: Pagination;

  setSearch: (value: string) => void;
  setRole: (value: string) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
};

export const useTeamDirectoryStore = create<TeamDirectoryStore>((set) => ({
  filters: {
    search: '',
    role: '',
  },
  pagination: {
    page: 1,
    limit: 9,
  },

  setSearch: (value: string) =>
    set((state: TeamDirectoryStore) => ({
      filters: { ...state.filters, search: value },
      pagination: { ...state.pagination, page: 1 }, 
    })),

  setRole: (value: string) =>
    set((state: TeamDirectoryStore) => ({
      filters: { ...state.filters, role: value },
      pagination: { ...state.pagination, page: 1 },
    })),

  setPage: (page: number) =>
    set((state: TeamDirectoryStore) => ({ 
      pagination: { ...state.pagination, page },
    })),

  resetFilters: () =>
    set(() => ({
      filters: { search: '', role: '' },
      pagination: { page: 1, limit: 9 },
    })),
}));
