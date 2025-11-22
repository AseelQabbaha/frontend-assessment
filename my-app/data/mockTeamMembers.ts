import type { TeamMember } from '../graphQl/teamQueries';

export const mockTeamMembers: TeamMember[] = [
  { id: '1', name: 'John', role: 'Admin', email: 'john@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'aseel', role: 'Agent', email: 'aseel@example.com', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'hasan', role: 'Creator', email: 'hasan@example.com', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'ahmed', role: 'Agent', email: 'ahmed@example.com', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'shihab', role: 'Creator', email: 'shihab@example.com', avatar: 'https://i.pravatar.cc/150?img=5' },
];
