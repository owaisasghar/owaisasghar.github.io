import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Building2, Cpu, Plane } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const references = [
  {
    title: "Autonomous & Unmanned Systems",
    provider: "Cavalier Group",
    description:
      "Official UAV division reference covering autonomous VTOL platforms, ISTAR, target tracking, long-range surveillance, airframe and avionics development, edge computing, and subsystem integration.",
    image: "/images/cavalier-uav.png",
    imageAlt: "Cavalier Group official UAV airframe visualization",
    url: "https://cavalier-group.com/autonomous-unmanned-systems/",
    tags: ["Autonomous UAVs", "VTOL", "ISR & Tracking"],
    icon: Plane,
    imageClassName: "object-contain p-6",
  },
  {
    title: "Computer Vision for Venues",
    provider: "alwaysAI",
    description:
      "A production example of people counting, dwell-time measurement, crowd-flow analytics, and automated safety alerts for high-footfall venues.",
    image: "/images/alwaysai-venues.png",
    imageAlt: "alwaysAI venue analytics showing people detection and wait-time monitoring",
    url: "https://alwaysai.co/solutions/venues",
    tags: ["People Counting", "Dwell Time", "Crowd Analytics"],
    icon: Building2,
    imageClassName: "object-cover",
  },
  {
    title: "Production Video Analytics Runtime",
    provider: "CVEDIA-RT",
    description:
      "Technical documentation for production AI inference, crowd estimation, tracking, VMS integrations, and deployment across Jetson, Hailo, GPUs, and cloud infrastructure.",
    image: "/images/cvedia-rt.png",
    imageAlt: "CVEDIA-RT official logo",
    url: "https://docs.cvedia.com/",
    tags: ["Edge Deployment", "TensorRT", "Video Analytics"],
    icon: Cpu,
    imageClassName: "object-contain p-10 dark:rounded-xl dark:bg-white",
  },
]

export function ProductionReferences() {
  return (
    <section id="production-references" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-3 text-center">
            <Badge variant="outline" className="rounded-full bg-card px-3 py-1">
              External product references
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">Production References</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Industry platforms that demonstrate production capabilities aligned with my work in venue analytics,
              real-time computer vision, and edge AI deployment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {references.map((reference) => {
              const Icon = reference.icon
              return (
                <article key={reference.title} className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                  <div className="relative aspect-[16/9] overflow-hidden border-b bg-muted">
                    <Image
                      src={reference.image}
                      alt={reference.imageAlt}
                      fill
                      className={reference.imageClassName}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Icon className="h-4 w-4" />
                        {reference.provider}
                      </div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">External reference</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{reference.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{reference.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {reference.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full">{tag}</Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="mt-6 w-full rounded-lg hover:border-primary hover:text-primary">
                      <Link href={reference.url} target="_blank" rel="noopener noreferrer">
                        View official source <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Product names, imagery, and documentation belong to their respective owners. Links are provided for
            technical and industry context.
          </p>
        </div>
      </div>
    </section>
  )
}
