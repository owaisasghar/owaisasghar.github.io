import { Progress } from "@/components/ui/progress"

interface SkillBarProps {
  skill: string
  percentage: number
}

export function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}
