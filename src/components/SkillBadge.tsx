
import React from "react";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center rounded-full border border-border bg-card px-3 py-1 shadow-sm">
      {icon && <span className="mr-2">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}
