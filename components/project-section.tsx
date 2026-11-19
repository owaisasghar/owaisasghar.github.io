import type React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  Brain,
  Cpu,
  Database,
  Eye,
  FileText,
  Github,
  Map as MapIcon,
  Plane,
  ScanSearch,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Video,
} from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

type Category = "drones" | "vision" | "nlp" | "robotics" | "research"

interface Project {
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  repoUrl?: string
}

const categories: { value: Category; label: string }[] = [
  { value: "drones", label: "Drone & Defense" },
  { value: "vision", label: "Computer Vision" },
  { value: "nlp", label: "LLM, RAG & OCR" },
  { value: "robotics", label: "Robotics & Edge AI" },
  { value: "research", label: "Research" },
]

const projects: Record<Category, Project[]> = {
  drones: [
    {
      title: "Crowd Counting from UAV Images",
      description: "Research-driven density estimation for counting crowds in high-altitude drone imagery, with inference and validation-performance evaluation.",
      tags: ["PyTorch", "CNNs", "Drone Vision"],
      icon: <Eye className="h-10 w-10 text-primary" />,
    },
    {
      title: "Military & Civil Vehicle Detection",
      description: "Custom two-class YOLO detector trained on about 7,000 drone and VisDrone images, with tracking and deployment optimization.",
      tags: ["YOLO", "TensorRT", "ONNX"],
      icon: <ScanSearch className="h-10 w-10 text-primary" />,
    },
    {
      title: "Remote Weapon Station AI",
      description: "Real-time long-range object detection, recognition, and multi-object tracking integrated with NVIDIA Jetson hardware.",
      tags: ["OpenCV", "TensorRT", "Jetson"],
      icon: <Eye className="h-10 w-10 text-primary" />,
    },
    {
      title: "Drone Payload Drop Prediction",
      description: "Predicts an accurate payload release point using altitude, speed, wind conditions, drone dynamics, and ballistic modeling.",
      tags: ["Python", "Ballistics", "Flight Dynamics"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "Drone Tracking System",
      description: "Autonomous, real-time target locking and object-following system designed for drone-mounted cameras.",
      tags: ["Tracking", "Target Lock", "Real Time"],
      icon: <Plane className="h-10 w-10 text-primary" />,
    },
    {
      title: "Follow-Me Drone",
      description: "Autonomous drone navigation that combines computer vision, target tracking, and flight control for reliable subject following.",
      tags: ["Computer Vision", "PX4", "Tracking"],
      icon: <Plane className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI Surveillance System",
      description: "Real-time person and vehicle detection with tracking for continuous aerial and fixed-camera surveillance.",
      tags: ["Detection", "Tracking", "Surveillance"],
      icon: <Eye className="h-10 w-10 text-primary" />,
    },
    {
      title: "Smart CCTV Analytics",
      description: "Video analytics pipeline for object detection, counting, tracking, and automated event monitoring.",
      tags: ["YOLO", "Counting", "Event Monitoring"],
      icon: <ScanSearch className="h-10 w-10 text-primary" />,
    },
  ],
  vision: [
    {
      title: "Language-Guided Multi-Camera Edge Perception",
      description: "Ask a camera network in plain language (\"find all white SUVs\"): open-vocabulary detection, per-camera tracking, and cross-camera Re-ID. Runs 8 × 1080p streams at 10 FPS each on one 8 GB laptop GPU (p50 latency 42.6 ms).",
      tags: ["YOLO-World", "CLIP / FastReID", "FastAPI + React"],
      icon: <Video className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/language-guided-edge-perception",
    },
    {
      title: "Aerial Vehicle Detection & Speed Estimation",
      description: "RF-DETR fine-tuned on 28k drone images (VisDrone, UAVDT, DroneVehicle) with sliced inference, ByteTrack, and calibrated speed estimation. Held-out test mAP@50 91.8%; model published on Hugging Face.",
      tags: ["RF-DETR", "ByteTrack", "Hugging Face"],
      icon: <ScanSearch className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/aerial-vehicle-detection-rfdetr",
    },
    {
      title: "Threat Segmentation with Incremental Learning",
      description: "SegFormer-based semantic segmentation across PIDRAY, SIXRAY, and GDXRAY using knowledge distillation and incremental learning.",
      tags: ["SegFormer", "Distillation", "Segmentation"],
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Checkbox Detection System",
      description: "Custom object detector achieving 80.67% mAP50, 80.13% precision, 86.76% recall, and an 83.32% F1 score.",
      tags: ["Object Detection", "mAP50", "Deep Learning"],
      icon: <ScanSearch className="h-10 w-10 text-primary" />,
    },
    {
      title: "Building Footprint Extraction",
      description: "Extracts and visualizes building footprints from satellite imagery using deep learning and geospatial tooling.",
      tags: ["GeoPandas", "Folium", "Satellite Imagery"],
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Tiny Object Detection from Drone Images",
      description: "Research and deployment pipeline focused on detecting very small targets in challenging high-altitude UAV imagery.",
      tags: ["Tiny Objects", "UAV", "Detection"],
      icon: <Eye className="h-10 w-10 text-primary" />,
    },
    {
      title: "SAM 2 Fine-Tuning",
      description: "Fine-tuned SAM 2 for tiny-object segmentation and built an export path through ONNX and TensorRT for Jetson deployment.",
      tags: ["SAM 2", "ONNX", "TensorRT"],
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Multi-Model Vision Pipeline",
      description: "Parallel video pipeline combining crowd-density estimation with vehicle detection on the same live stream.",
      tags: ["Multi-Model", "Video", "Real Time"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "Pneumonia Detection (RSNA)",
      description: "Transfer learning with ResNet and EfficientNet on RSNA chest X-rays, with an OpenCV preprocessing pipeline. 91.2% test accuracy.",
      tags: ["PyTorch", "Transfer Learning", "Medical Imaging"],
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
    },
    {
      title: "UAV Geospatial Mapping",
      description: "Automated detection of roads and trees from UAV imagery for mapping workflows.",
      tags: ["Agisoft", "ArcGIS", "UAV Imagery"],
      icon: <MapIcon className="h-10 w-10 text-primary" />,
    },
  ],
  nlp: [
    {
      title: "LangGraph Appointment-Booking Agent",
      description: "Memory-aware conversational agent with calendar integration and vector-store memory for dynamic, multi-turn booking conversations.",
      tags: ["LangGraph", "LangChain", "GPT-4"],
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "RAG App for YouTube Q&A",
      description: "LangChain retrieval-augmented generation app that answers natural-language questions about YouTube video content.",
      tags: ["LangChain", "RAG", "Embeddings"],
      icon: <Video className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI-Powered Database Insights",
      description: "Natural-language interface to SQL databases: an LLM turns plain-language questions into SQL queries and analytics.",
      tags: ["LLM", "Text-to-SQL", "Analytics"],
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Home Services Policy Automation",
      description: "OCR and OpenAI pipeline that extracts data from insurance-policy documents, cutting manual review time.",
      tags: ["OCR", "OpenAI", "Automation"],
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "RAG Document Assistant",
      description: "Retrieval-augmented document assistant built with multiple vector stores and LLM providers for grounded question answering.",
      tags: ["LangChain", "Pinecone", "ChromaDB"],
      icon: <Brain className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/smart-llm-agents",
    },
    {
      title: "Multi-Agent AI System",
      description: "LangGraph workflow that coordinates specialized, tool-using LLM agents for multi-step reasoning, routing, retrieval, and task execution.",
      tags: ["LangGraph", "Tool Calling", "Multi-Agent"],
      icon: <Bot className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/smart-llm-agents",
    },
    {
      title: "OCR Invoice Extraction",
      description: "End-to-end invoice parsing pipeline that extracts text and document layout into clean, structured JSON.",
      tags: ["Tesseract", "Google Vision", "LayoutParser"],
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "Invoice AI Assistant",
      description: "Combines OCR, document understanding, and LLM reasoning to make invoice data searchable and actionable.",
      tags: ["OCR", "LLM", "Document AI"],
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "Document Extraction Agent",
      description: "Tool-using document agent covering OCR, chunking, embeddings, vector retrieval, structured extraction, and conversational Q&A.",
      tags: ["AI Agent", "Vector DB", "Document Tools"],
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Multi-Model Chatbots",
      description: "Conversational applications built across GPT, Gemini, and Llama with model-specific integrations and user interfaces.",
      tags: ["GPT", "Gemini", "Llama"],
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "OCR GUI Application",
      description: "Desktop application for interactive OCR, targeted field extraction, and streamlined document processing.",
      tags: ["OCR", "GUI", "Document Processing"],
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "Handwritten Number OCR",
      description: "Detects and reads handwritten numbers in images using CRAFT text detection and TrOCR transformer recognition, exporting results to CSV and JSON.",
      tags: ["CRAFT", "TrOCR", "OpenCV"],
      icon: <FileText className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/Handwritten-Number-OCR",
    },
    {
      title: "Financial News Analysis & Forecasting",
      description: "Sentiment and ticker extraction over 10,000+ Reuters headlines, news-impact analysis on prices, and N-BEATS time-series forecasting.",
      tags: ["NLP", "Sentiment", "N-BEATS"],
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/Financial-News-Analysis-and-Stock-Price-Prediction",
    },
  ],
  robotics: [
    {
      title: "Robot Map Beautification",
      description: "Freelance client project: turns noisy cleaning-robot occupancy maps into clean floor maps by removing laser-ray artifacts and straightening walls (ROSE, ROSE²), with a DeepLabv3+ wall model via ONNX. 99.3% of detected walls kept on 502 real maps, 0.15 s per map on CPU.",
      tags: ["OpenCV", "ONNX Runtime", "Occupancy Maps"],
      icon: <MapIcon className="h-10 w-10 text-primary" />,
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Integrated cameras, LiDAR, object detection, and flight-controller commands for perception-aware autonomous flight.",
      tags: ["LiDAR", "PX4", "Navigation"],
      icon: <Plane className="h-10 w-10 text-primary" />,
    },
    {
      title: "Obstacle Avoidance",
      description: "ROS 2 obstacle-avoidance stack using LiDAR and depth-camera perception with PX4 flight control.",
      tags: ["ROS 2", "LiDAR", "Depth Camera"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "Custom PX4 Return-to-Launch",
      description: "Modified PX4 return-to-launch behavior to support specialized autonomous mission requirements.",
      tags: ["PX4", "RTL", "Autonomy"],
      icon: <Plane className="h-10 w-10 text-primary" />,
    },
    {
      title: "NVIDIA Jetson Edge AI",
      description: "Optimized and deployed deep-learning inference workloads on NVIDIA Jetson with CUDA and TensorRT.",
      tags: ["Jetson Nano", "CUDA", "TensorRT"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "Raspberry Pi 5 AI Deployment",
      description: "Deployed real-time vision inference to Raspberry Pi 5 for compact, low-power edge applications.",
      tags: ["Raspberry Pi 5", "Edge AI", "Inference"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "Hailo-8 AI Accelerator Deployment",
      description: "Accelerated edge inference with the Hailo-8 processor and Raspberry Pi AI Kit.",
      tags: ["Hailo-8", "Raspberry Pi", "Acceleration"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "ROS 2 Robotics Development",
      description: "Robotics development and simulation across ROS 2, Gazebo, RTAB-Map, and PX4.",
      tags: ["ROS 2", "Gazebo", "RTAB-Map"],
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Face Tracking with Motor Control",
      description: "Real-time face detection on Raspberry Pi that drives DC motors to keep the subject in frame.",
      tags: ["Raspberry Pi", "Face Detection", "Motor Control"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
  ],
  research: [
    {
      title: "Self-RAG Reproduction",
      description: "Local reproduction of the Self-RAG research approach for retrieval, generation, and self-reflection.",
      tags: ["Self-RAG", "LLM", "Research"],
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "UAV Crowd Counting & Multi-Person Tracking",
      description: "P2PNet vs. UAV-Dot under the official DroneCrowd protocol (published L-mAP 51.0 reproduced exactly). Optimized UAV-Dot to 29 ms per 1080p frame, 3.9× faster at equal F1; tracking cuts unique-person count error from 32% to 10%.",
      tags: ["Paper Reproduction", "PyTorch", "UAV"],
      icon: <Eye className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/uav-crowd-counting",
    },
    {
      title: "SparseSwin Reproduction",
      description: "Reproduced the SparseSwin vision transformer (Neurocomputing 2024): 96.3% on CIFAR-10 and 81.6% on CIFAR-100, extended to COCO detection and compared with Swin-Tiny.",
      tags: ["Vision Transformer", "PyTorch", "Paper Reproduction"],
      icon: <Brain className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/SparseSwin",
    },
    {
      title: "AI Character Dataset Generator",
      description: "Generated 250 identity-consistent characters and 750 multi-view images using controlled prompts and seeds.",
      tags: ["FLUX", "ComfyUI", "Synthetic Data"],
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "EdgeLearner: Decentralized Deep Learning",
      description: "Federated-learning framework for collaborative model training while keeping distributed data private.",
      tags: ["Federated Learning", "Privacy", "Edge"],
      icon: <Database className="h-10 w-10 text-primary" />,
      repoUrl: "https://github.com/owaisasghar/Decentralized-Machine-Learning",
    },
  ],
}

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Project Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-[700px] mx-auto pt-4">
              30+ projects spanning computer vision, autonomous drones, defense AI, LLM applications, robotics, and edge deployment.
            </p>
          </div>

          <Tabs defaultValue="drones" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-2xl bg-muted/50 p-1 md:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value} className="rounded-xl px-2 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-8">
                {category.value === "drones" && (
                  <div className="mb-8 flex items-start gap-3 rounded-xl border border-primary/25 bg-primary/5 p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Defense work protected by NDA</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Source code, operational footage, client data, system architecture, and sensitive performance
                        specifications cannot be published. The summaries below describe only non-confidential aspects
                        of my responsibilities and technical experience.
                      </p>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects[category.value].map((project) => (
                    <ProjectCard key={project.title} {...project} ndaProtected={category.value === "drones"} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center pt-8">
            <Button asChild variant="outline" className="rounded-full border-primary/40 transition-all duration-200 hover:bg-primary hover:text-primary-foreground">
              <Link href="https://github.com/owaisasghar" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  icon,
  repoUrl,
  ndaProtected = false,
}: Project & { ndaProtected?: boolean }) {
  return (
    <AnimatedCard className="h-full rounded-xl border border-border bg-card shadow-sm">
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 w-fit rounded-full bg-primary/10 p-3">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mb-4 flex-grow text-muted-foreground">{description}</p>
        {ndaProtected && (
          <div className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            NDA-protected professional work
          </div>
        )}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full border-none bg-primary/10 text-primary">{tag}</Badge>
          ))}
        </div>
        {repoUrl && (
          <Button asChild variant="outline" size="sm" className="mt-auto w-full rounded-full border-primary/50 transition-all duration-300 hover:bg-primary/10">
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Repository
            </Link>
          </Button>
        )}
      </div>
    </AnimatedCard>
  )
}
