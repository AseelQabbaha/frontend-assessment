"use client";

import TeamMemberCard from "../TeamMember/TeamMemberCard";
import { TeamMemberCardSkeleton } from "../LoadingSkeleton";
import type { TeamMember } from "../../graphQl/teamQueries";

type Props = {
  members: TeamMember[];
  loading?: boolean;
};

export default function TeamGrid({ members, loading }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamMemberCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (members.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

