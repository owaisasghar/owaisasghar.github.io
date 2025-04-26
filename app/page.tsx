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
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGradientBorder } from "@/components/animated-gradient-border"
import { TypewriterEffect, RotatingWordsEffect, GradientTextEffect } from "@/components/animated-text"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="uppercase tracking-wider text-primary">Awais Asghar</span>
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
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-background z-10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0"></div>

          <div className="container relative z-20 flex flex-col items-center text-center space-y-8">
            {/* Animated profile image with gradient border */}
            <AnimatedGradientBorder
              containerClassName="w-60 h-60"
              borderRadius="50%"
              duration={8}
              backgroundImage="/images/awais-profile.jpeg"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-transparent">
                <Image src="/images/awais-profile.jpeg" alt="Awais Asghar" fill className="object-cover" priority />
              </div>
            </AnimatedGradientBorder>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <GradientTextEffect text="Awais Asghar" />
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto">
                <RotatingWordsEffect
                  staticText="I'm an"
                  words={[
                    "AI Engineer",
                    "NLP Specialist",
                    "Computer Vision Expert",
                    "ML Researcher",
                    "Edge AI Developer",
                  ]}
                  className="justify-center"
                />
              </div>
              <div className="pt-4">
                <TypewriterEffect
                  words={[
                    "Building intelligent systems...",
                    "Developing real-time AI solutions...",
                    "Creating computer vision applications...",
                    "Implementing NLP models...",
                    "Researching federated learning...",
                  ]}
                  className="text-lg md:text-xl"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Natural Language Processing
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Computer Vision
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Large Language Models
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Real-Time Systems
                </Badge>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="rounded-full border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
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

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full bg-background/50 backdrop-blur-sm"
            >
              <ChevronDown className="h-6 w-6" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <ScrollAnimation animation="fade-down">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <AnimatedGradientBorder className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">
                      I'm a passionate AI Engineer with expertise in Natural Language Processing (NLP), Computer Vision,
                      and Real-Time System Integration. With over 2 years of experience, I specialize in developing
                      AI-driven applications, particularly in Large Language Models (LLMs) like LLAMA3, Gemini, and GPT.
                    </p>
                    <p className="text-lg leading-relaxed">
                      My work focuses on real-time AI solutions for high-precision applications in various domains. I'm
                      always eager to explore innovative AI solutions, whether in retrieval-augmented generation (RAG),
                      object tracking, OCR, or geospatial AI.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Passionate about solving real-world problems, I've spearheaded projects like Crowd Counting using
                      Drones, Object Tracking on Raspberry Pi 5, and Home Services Automation using OpenAI and OCR. My
                      work emphasizes the seamless fusion of machine learning, computational efficiency, and
                      user-centric design to create impactful applications.
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
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
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
    </div>
  )
}
