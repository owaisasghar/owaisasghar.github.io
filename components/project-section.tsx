import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Eye, Brain, Database, Github, Bot, FileText, BarChart } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-[600px] mx-auto pt-4">
              A selection of my most impactful AI and machine learning projects.
            </p>
          </div>

          <Tabs defaultValue="drones" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 p-1 bg-muted/50 rounded-full">
              <TabsTrigger
                value="drones"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Drone Systems
              </TabsTrigger>
              <TabsTrigger
                value="defense"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Defense Tech
              </TabsTrigger>
              <TabsTrigger
                value="nlp"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                NLP & RAG
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Computer Vision
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Research
              </TabsTrigger>
            </TabsList>

            <TabsContent value="drones" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard
                  title="Payload Dropping Algorithm"
                  description="Advanced algorithm to accurately predict the ground impact point of a payload dropped from 100m to 150m, utilizing environmental parameters for precise calculations."
                  tags={["Python", "Physics Modeling", "Drone Dynamics"]}
                  icon={<Cpu className="h-10 w-10 text-primary" />}
                />
                <ProjectCard
                  title="Crowd Counting Algorithm"
                  description="Dense-based approach to count crowds using video feeds from drones at ~100m altitude, handling varying densities and lighting conditions for real-time metrics."
                  tags={["Computer Vision", "Deep Learning", "Real-time Processing"]}
                  icon={<Eye className="h-10 w-10 text-primary" />}
                />
                <ProjectCard
                  title="Object Detection & Tracking"
                  description="AI-powered algorithm for detecting and tracking specific objects using AI Hut on Raspberry Pi 5, enabling drones to autonomously follow targets in real-time."
                  tags={["Raspberry Pi", "YOLO", "Edge Computing"]}
                  icon={<Database className="h-10 w-10 text-primary" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="defense" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard
                  title="Remote Weapon Station (RWS)"
                  description="Algorithm for object detection and tracking within a 300m range for defense applications, integrated into hardware for real-time targeting and response."
                  tags={["Object Tracking", "Hardware Integration", "Defense Tech"]}
                  icon={<Eye className="h-10 w-10 text-primary" />}
                />
                <ProjectCard
                  title="Geospatial Mapping"
                  description="Applied Agsoft and ArcGIS with ML for precise mapping and automated feature detection like roads and trees for defense applications."
                  tags={["ArcGIS", "Agsoft", "Machine Learning"]}
                  icon={<Database className="h-10 w-10 text-primary" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="nlp" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard
                  title="Custom OCR Solution Using Llama 2"
                  description="GUI-based OCR solution to extract specific document information with fine-tuned Llama 2 for improved accuracy and streamlined document processing."
                  tags={["Llama 2", "OCR", "Document Processing"]}
                  icon={<Brain className="h-10 w-10 text-primary" />}
                />
                <ProjectCard
                  title="RAG Application Using Llama and LangChain"
                  description="Retrieval-augmented generation application to answer questions from YouTube video content with a user-friendly interface for enhanced accessibility."
                  tags={["Llama", "LangChain", "RAG"]}
                  icon={<Brain className="h-10 w-10 text-primary" />}
                  repoUrl="https://github.com/owaisasghar/smart-llm-agents"
                />
                <ProjectCard
                  title="Financial News Analysis & Stock Prediction"
                  description="System that analyzes financial news and predicts stock price movements using NLP and machine learning techniques."
                  tags={["NLP", "Stock Analysis", "Prediction Models"]}
                  icon={<BarChart className="h-10 w-10 text-primary" />}
                  repoUrl="https://github.com/owaisasghar/Financial-News-Analysis-and-Stock-Price-Prediction"
                />
              </div>
            </TabsContent>

            <TabsContent value="vision" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard
                  title="Real-Time Face Detection With Raspberry Pi"
                  description="System to control DC motors based on face detection from video feeds, enabling both manual and automated operations for smart devices."
                  tags={["Raspberry Pi", "Face Detection", "Motor Control"]}
                  icon={<Cpu className="h-10 w-10 text-primary" />}
                />
                <ProjectCard
                  title="Object Detection And Tracking Project"
                  description="Real-time detection and tracking systems using YOLO, enabling feature extraction and object following for various applications."
                  tags={["YOLO", "Object Tracking", "Computer Vision"]}
                  icon={<Eye className="h-10 w-10 text-primary" />}
                />
                <ProjectCard
                  title="Handwritten Number OCR"
                  description="Optical Character Recognition system for handwritten numbers using deep learning techniques for accurate digit recognition."
                  tags={["OCR", "Deep Learning", "Image Processing"]}
                  icon={<FileText className="h-10 w-10 text-primary" />}
                  repoUrl="https://github.com/owaisasghar/Handwritten-Number-OCR"
                />
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard
                  title="EdgeLearner: Decentralized Deep Learning"
                  description="A decentralized machine learning framework implementing Federated Learning to enable collaborative model training while preserving data privacy."
                  tags={["Federated Learning", "Privacy", "Edge Computing"]}
                  icon={<Database className="h-10 w-10 text-primary" />}
                  repoUrl="https://github.com/owaisasghar/Decentralized-Machine-Learning"
                />
                <ProjectCard
                  title="Smart LLM Agents"
                  description="Implementation of autonomous AI agents using Large Language Models for complex task solving and decision making."
                  tags={["LLM", "Autonomous Agents", "AI"]}
                  icon={<Bot className="h-10 w-10 text-primary" />}
                  repoUrl="https://github.com/owaisasghar/smart-llm-agents"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center pt-8">
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-gradient-to-r hover:from-primary/80 hover:to-purple-500/80 hover:text-white transition-all duration-300 border-primary/50"
            >
              <Link href="https://github.com/owaisasghar" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description?: string
  tags?: string[]
  icon?: React.ReactNode
  repoUrl?: string
}

function ProjectCard({ title, description = "", tags = [], icon, repoUrl }: ProjectCardProps) {
  return (
    <AnimatedCard className="bg-card rounded-xl shadow-lg border border-border/50 h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">{icon}</div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full bg-primary/10 text-primary border-none">
              {tag}
            </Badge>
          ))}
        </div>
        {repoUrl && (
          <div className="mt-auto">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full rounded-full hover:bg-primary/10 transition-all duration-300 border-primary/50"
            >
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Repository
              </Link>
            </Button>
          </div>
        )}
      </div>
    </AnimatedCard>
  )
}
