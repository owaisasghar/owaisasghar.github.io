import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectSection } from "@/components/project-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { ResearchSection } from "@/components/research-section"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBorder } from "@/components/animated-gradient-border"
import { PortfolioChatbot } from "@/components/portfolio-chatbot"
import { ProductionReferences } from "@/components/production-references"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Github, Linkedin, Mail, ArrowRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="tracking-tight text-primary">AA.</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#research" className="text-sm font-medium hover:text-primary transition-colors">
              Research
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="container relative z-10">
            <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  Production-ready AI solutions
                </div>

                <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  AI systems that work in the{" "}
                  <span className="text-primary">real world.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  I’m Awais Asghar, an AI and Computer Vision Engineer building production-ready vision, LLM, robotics,
                  and edge AI solutions—from research to deployment.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Computer Vision", "LLM & RAG", "Edge AI", "Autonomous Systems"].map((skill) => (
                    <Badge key={skill} variant="outline" className="rounded-full bg-card px-3 py-1.5 text-sm font-medium">
                      <CheckCircle2 className="mr-1 h-3.5 w-3.5 text-primary" />
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-lg px-6 shadow-sm">
                    <Link href="#projects">
                      Explore my work <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="rounded-lg border-border bg-card px-6 hover:border-primary hover:bg-card hover:text-primary">
                    <Link href="#contact">Let’s work together</Link>
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span className="mr-2 text-sm text-muted-foreground">Find me on</span>
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary">
                    <Link href="https://github.com/owaisasghar" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary">
                    <Link href="https://www.linkedin.com/in/awais-asghar-9b9b27175/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary">
                    <Link href="mailto:awaisasghar900@gmail.com">
                      <Mail className="h-5 w-5" /><span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[480px]">
                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="relative overflow-hidden rounded-[2rem] border bg-card p-3 shadow-[0_28px_80px_-38px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.4rem] bg-muted">
                    <Image src="/images/awais-profile.jpeg" alt="Awais Asghar" fill className="object-cover" priority />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 pt-20 text-white">
                      <p className="text-xl font-bold">Awais Asghar</p>
                      <p className="mt-1 text-sm text-white/80">AI & Computer Vision Engineer</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-7 -left-6 grid grid-cols-2 gap-4 rounded-2xl border bg-card/95 p-4 shadow-lg backdrop-blur md:-left-12">
                  <div className="pr-4">
                    <p className="text-2xl font-black tracking-tight">4+</p>
                    <p className="text-xs text-muted-foreground">Years in AI</p>
                  </div>
                  <div className="border-l pl-4">
                    <p className="text-2xl font-black tracking-tight">30+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <ScrollAnimation animation="fade-down">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <AnimatedGradientBorder className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">
                      I’m an AI and Computer Vision Engineer with 4+ years of experience developing systems that move
                      from research and model training to real-time deployment. My core work includes object detection,
                      tracking, segmentation, crowd analytics, autonomous systems, and optimized inference for
                      resource-constrained hardware.
                    </p>
                    <p className="text-lg leading-relaxed">
                      At Cavalier Group, I contribute to production AI for UAVs, surveillance, payload systems, and
                      edge devices. I work across the complete engineering pipeline—from dataset preparation and model
                      evaluation to ONNX and TensorRT optimization and deployment on NVIDIA Jetson, Raspberry Pi, and
                      Hailo hardware. Sensitive defense implementation details are protected by NDA.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Beyond computer vision and robotics, I build LLM, RAG, agentic, OCR, and document-intelligence
                      applications using tools such as LangChain, LangGraph, Pinecone, ChromaDB, GPT, Gemini, and Llama.
                      I’m most interested in roles where accuracy, deployment efficiency, and dependable real-world
                      performance matter as much as the model itself.
                    </p>
                  </div>
                </AnimatedGradientBorder>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Current Work Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <ScrollAnimation animation="fade-down">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tight">Currently Working On</h2>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollAnimation animation="fade-right" delay={200}>
                  <AnimatedGradientBorder className="h-full">
                    <div className="bg-card p-6 h-full rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 text-primary">Real-Time Object Detection & Tracking</h3>
                      <p className="text-muted-foreground">
                        Developing advanced AI models for high-precision object detection and tracking in dynamic
                        environments.
                      </p>
                    </div>
                  </AnimatedGradientBorder>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={400}>
                  <AnimatedGradientBorder className="h-full">
                    <div className="bg-card p-6 h-full rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 text-primary">Edge AI Deployment</h3>
                      <p className="text-muted-foreground">
                        Implementing AI models on edge devices like Raspberry Pi 5 and Jetson Nano for real-time
                        applications.
                      </p>
                    </div>
                  </AnimatedGradientBorder>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-left" delay={600}>
                  <AnimatedGradientBorder className="h-full">
                    <div className="bg-card p-6 h-full rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 text-primary">Precision Algorithms</h3>
                      <p className="text-muted-foreground">
                        Designing algorithms for optimizing performance in challenging conditions, such as variable wind
                        dynamics and altitude.
                      </p>
                    </div>
                  </AnimatedGradientBorder>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <ScrollAnimation animation="fade-up">
          <ExperienceSection />
        </ScrollAnimation>

        {/* Projects Section */}
        <ScrollAnimation animation="fade-up">
          <ProjectSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <ProductionReferences />
        </ScrollAnimation>

        {/* Research Section */}
        <ScrollAnimation animation="fade-up">
          <ResearchSection />
        </ScrollAnimation>

        {/* Skills Section */}
        <ScrollAnimation animation="fade-up">
          <SkillsSection />
        </ScrollAnimation>

        {/* Education Section */}
        <ScrollAnimation animation="fade-up">
          <EducationSection />
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation animation="fade-up">
          <ContactSection />
        </ScrollAnimation>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Awais Asghar. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Link href="https://github.com/owaisasghar" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Link
                href="https://www.linkedin.com/in/awais-asghar-9b9b27175/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Link href="mailto:awaisasghar900@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
      <PortfolioChatbot />
    </div>
  )
}
