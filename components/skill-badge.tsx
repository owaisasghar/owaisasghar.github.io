import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="py-1.5 px-3 text-sm font-medium">
      {skill}
    </Badge>
  )
}
