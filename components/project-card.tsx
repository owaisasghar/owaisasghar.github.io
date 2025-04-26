import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon?: ReactNode
}

export function ProjectCard({ title, description, tags, icon }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
