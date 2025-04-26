import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-[600px] mx-auto pt-4">
              My professional journey in AI engineering and computational science.
            </p>
          </div>

          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-primary/30 dark:border-primary/20">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold">Full Stack AI Engineer</h3>
                  <span className="text-sm text-muted-foreground">June 2023 - Present</span>
                </div>
                <p className="text-primary font-medium">
                  <Link
                    href="https://pk.linkedin.com/company/blitzkrieg-defense-solution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 group"
                  >
                    Blitzkrieg Defense Solution, Cavalier Group
                    <ExternalLink className="h-3 w-3 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </p>
                <div className="prose dark:prose-invert max-w-none">
                  <ul>
                    <li>Developed Drone Payload Systems and Remote Weapon Stations (RWS)</li>
                    <li>Designed Algorithms for Object Detection, Tracking, and Automation on Real-Time Hardware</li>
                    <li>Created a Dense-Based Approach to Count Crowds Using Video Feeds from Drones</li>
                    <li>
                      Built an AI-Powered Algorithm for Detecting and Tracking Specific Objects Using AI Hut on
                      Raspberry Pi 5
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-primary/30 dark:border-primary/20">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold">AI Engineer</h3>
                  <span className="text-sm text-muted-foreground">January 2023 - April 2023</span>
                </div>
                <p className="text-primary font-medium">
                  <Link
                    href="https://pk.linkedin.com/company/aiobc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 group"
                  >
                    AIOBC, Rawalpindi
                    <ExternalLink className="h-3 w-3 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </p>
                <div className="prose dark:prose-invert max-w-none">
                  <ul>
                    <li>
                      Built AI Applications, including an Article Recommendation System, Image Caption Generation, and
                      Vehicle License Plate Detection
                    </li>
                    <li>Gained Expertise in Docker and AWS Deployment for AI Applications</li>
                    <li>Developed a GUI-Based OCR Solution to Extract Specific Document Information</li>
                    <li>
                      Created a Retrieval-Augmented Generation Application to Answer Questions from YouTube Video
                      Content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
