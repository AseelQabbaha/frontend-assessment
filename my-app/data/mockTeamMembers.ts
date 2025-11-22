import type { TeamMember } from '../graphQl/teamQueries';


const getAvatarUrl = (name: string, role: string): string => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  const colors: Record<string, string> = {
    'Admin': 'dc2626',   
    'Agent': '3b82f6',   
    'Creator': '10b981', 
  };
  
  const bgColor = colors[role] || '6b7280';
  
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&size=150&background=${bgColor}&color=ffffff&bold=true&font-size=0.5`;
};

export const mockTeamMembers: TeamMember[] = [
  { id: '1', name: 'John Smith', role: 'Admin', email: 'john.smith@example.com', avatar: getAvatarUrl('John Smith', 'Admin') },
  { id: '2', name: 'Aseel Al-Mansouri', role: 'Agent', email: 'aseel@example.com', avatar: getAvatarUrl('Aseel Al-Mansouri', 'Agent') },
  { id: '3', name: 'Hasan Ali', role: 'Creator', email: 'hasan.ali@example.com', avatar: getAvatarUrl('Hasan Ali', 'Creator') },
  { id: '4', name: 'Ahmed Hassan', role: 'Agent', email: 'ahmed.hassan@example.com', avatar: getAvatarUrl('Ahmed Hassan', 'Agent') },
  { id: '5', name: 'Shihab Ibrahim', role: 'Creator', email: 'shihab@example.com', avatar: getAvatarUrl('Shihab Ibrahim', 'Creator') },
  { id: '6', name: 'Sarah Johnson', role: 'Admin', email: 'sarah.johnson@example.com', avatar: getAvatarUrl('Sarah Johnson', 'Admin') },
  { id: '7', name: 'Michael Brown', role: 'Agent', email: 'michael.brown@example.com', avatar: getAvatarUrl('Michael Brown', 'Agent') },
  { id: '8', name: 'Emily Davis', role: 'Creator', email: 'emily.davis@example.com', avatar: getAvatarUrl('Emily Davis', 'Creator') },
  { id: '9', name: 'David Wilson', role: 'Admin', email: 'david.wilson@example.com', avatar: getAvatarUrl('David Wilson', 'Admin') },
  { id: '10', name: 'Lisa Anderson', role: 'Agent', email: 'lisa.anderson@example.com', avatar: getAvatarUrl('Lisa Anderson', 'Agent') },
  { id: '11', name: 'James Taylor', role: 'Creator', email: 'james.taylor@example.com', avatar: getAvatarUrl('James Taylor', 'Creator') },
  { id: '12', name: 'Maria Garcia', role: 'Admin', email: 'maria.garcia@example.com', avatar: getAvatarUrl('Maria Garcia', 'Admin') },
  { id: '13', name: 'Robert Martinez', role: 'Agent', email: 'robert.martinez@example.com', avatar: getAvatarUrl('Robert Martinez', 'Agent') },
  { id: '14', name: 'Jennifer Lee', role: 'Creator', email: 'jennifer.lee@example.com', avatar: getAvatarUrl('Jennifer Lee', 'Creator') },
  { id: '15', name: 'William White', role: 'Admin', email: 'william.white@example.com', avatar: getAvatarUrl('William White', 'Admin') },
  { id: '16', name: 'Patricia Harris', role: 'Agent', email: 'patricia.harris@example.com', avatar: getAvatarUrl('Patricia Harris', 'Agent') },
  { id: '17', name: 'Richard Clark', role: 'Creator', email: 'richard.clark@example.com', avatar: getAvatarUrl('Richard Clark', 'Creator') },
  { id: '18', name: 'Linda Lewis', role: 'Admin', email: 'linda.lewis@example.com', avatar: getAvatarUrl('Linda Lewis', 'Admin') },
];
