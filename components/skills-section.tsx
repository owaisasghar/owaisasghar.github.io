import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Brain, Boxes, Code2, Cpu, Database } from "lucide-react"

const skillGroups = [
  {
    title: "AI Specializations",
    icon: Brain,
    skills: ["Computer Vision", "Object Detection", "Tracking", "Semantic Segmentation", "NLP", "LLMs", "RAG", "AI Agents", "Federated Learning"],
  },
  {
    title: "Frameworks & Models",
    icon: Boxes,
    skills: ["PyTorch", "TensorFlow", "YOLOv3/v5/v8", "SegFormer", "SAM 2", "Detectron2", "Llama", "GPT", "Gemini"],
  },
  {
    title: "Programming & Vision Tools",
    icon: Code2,
    skills: ["Python", "MATLAB", "OpenCV", "Tesseract OCR", "Google Vision", "LayoutParser", "GeoPandas", "Folium"],
  },
  {
    title: "LLM & Data Stack",
    icon: Database,
    skills: ["LangChain", "LangGraph", "Multi-Agent Workflows", "Tool-Using Agents", "Workflow Orchestration", "Pinecone", "ChromaDB", "Embeddings", "Vector Search", "ComfyUI", "FLUX"],
  },
  {
    title: "Deployment & Robotics",
    icon: Cpu,
    skills: ["Docker", "AWS", "CUDA", "TensorRT", "ONNX", "NVIDIA Jetson", "Raspberry Pi", "Hailo-8", "ROS 2", "PX4", "Gazebo", "Agisoft"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
            <p className="mx-auto max-w-[650px] pt-4 text-muted-foreground">
              A recruiter-friendly view of my AI engineering stack, from model development to production deployment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
}

function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="h-full rounded-xl border bg-card p-6 shadow-sm transition-colors hover:border-primary/40">
      <div className="mb-4 flex items-center gap-3 border-b pb-4">
        <div className="rounded-xl bg-primary/10 p-2.5">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="rounded-full font-normal">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
