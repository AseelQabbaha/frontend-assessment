import { gql } from '@apollo/client';

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($page: Int, $limit: Int, $role: String, $search: String) {
    teamMembers(page: $page, limit: $limit, role: $role, search: $search) {
      items {
        id
        name
        role
        email
        avatar
      }
      pageInfo {
        currentPage
        totalPages
        totalItems
      }
    }
  }
`;

export type TeamMember = {
  id: string | number;
  name: string;
  role: 'Admin' | 'Agent' | 'Creator' | string;
  email: string;
  avatar?: string;
};

export type GetTeamMembersData = {
  teamMembers: {
    items: TeamMember[];
    pageInfo: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
    };
  };
};

export type GetTeamMembersVars = {
  page?: number;
  limit?: number;
  role?: string;
  search?: string;
};
