import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, BotIcon as Robot } from "lucide-react"

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-[600px] mx-auto pt-4">
              My expertise spans across various AI technologies, programming languages, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              title="AI & Machine Learning"
              icon={<Brain className="h-6 w-6 text-primary" />}
              skills={[
                "Natural Language Processing (NLP)",
                "Computer Vision",
                "Large Language Models (LLMs)",
                "Llama3",
                "Gemini",
                "GPT",
                "RAG",
                "TensorFlow",
                "Edge Impulse",
              ]}
            />

            <SkillCard
              title="Programming & Tools"
              icon={<Code className="h-6 w-6 text-primary" />}
              skills={["Python", "Docker", "AWS", "MATLAB", "OpenAI", "LangChain"]}
            />

            <SkillCard
              title="Hardware & Systems"
              icon={<Robot className="h-6 w-6 text-primary" />}
              skills={[
                "Raspberry Pi",
                "Jetson Nano",
                "Drone Systems",
                "Remote Weapon Stations",
                "Autonomous Systems",
                "ArcGIS",
                "Agsoft",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  icon: React.ReactNode
  skills: string[]
}

function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50 h-full">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="rounded-full">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
