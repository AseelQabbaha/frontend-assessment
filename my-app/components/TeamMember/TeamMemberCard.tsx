"use client";

import Image from "next/image";
import type { TeamMember } from "../../graphQl/teamQueries";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  member: TeamMember;
};

export default function TeamMemberCard({ member }: Props) {
  const theme = useTheme();

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return { from: "#ef4444", to: "#ec4899" };
      case "Agent":
        return { from: "#3b82f6", to: "#6366f1" };
      case "Creator":
        return { from: "#10b981", to: "#059669" };
      default:
        return { from: "#6b7280", to: "#4b5563" };
    }
  };

  const roleColors = getRoleColor(member.role);

  return (
    <Card
      sx={{
        p: 3,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: 4,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          '& .role-gradient': {
            opacity: 0.05,
          },
          '& .avatar-glow': {
            opacity: 0.3,
          },
        },
      }}
    >
      <Box
        className="role-gradient"
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${roleColors.from}, ${roleColors.to})`,
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      />
      
      <CardContent sx={{ position: 'relative', zIndex: 1, textAlign: 'center', p: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <Box
              className="avatar-glow"
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                borderRadius: '50%',
                filter: 'blur(20px)',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
            />
            <Image
              src={member.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=150&background=6b7280&color=ffffff&bold=true`}
              alt={member.name}
              width={90}
              height={90}
              style={{
                borderRadius: '50%',
                border: `4px solid ${theme.palette.background.paper}`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>
          
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 0.5,
                color: 'text.primary',
                transition: 'color 0.3s',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {member.email}
            </Typography>
            <Chip
              label={member.role}
              sx={{
                background: `linear-gradient(45deg, ${roleColors.from}, ${roleColors.to})`,
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
                height: 28,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                },
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

