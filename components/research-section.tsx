import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Network, Server, Database, ExternalLink } from "lucide-react"

export function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Research</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-[600px] mx-auto pt-4">
              My research focuses on innovative approaches to machine learning and AI systems.
            </p>
          </div>

          <div className="space-y-8">
            <ResearchCard
              title="EdgeLearner: A Decentralized Deep Learning Framework"
              description="A decentralized machine learning framework that implements Federated Learning to enable collaborative model training while preserving data privacy. The system distributes training data across multiple edge devices/clients."
              tags={["Federated Learning", "Decentralized ML", "Privacy-Preserving AI", "Edge Computing"]}
              repoUrl="https://github.com/owaisasghar/Decentralized-Machine-Learning"
              collaborators={["Haris Ghafoor"]}
              additionalLinks={[
                {
                  title: "NUST Library Catalog",
                  url: "https://opac.nust.edu.pk/cgi-bin/koha/opac-detail.pl?biblionumber=592485",
                },
                {
                  title: "FICS Project Page",
                  url: "https://fics.nust.edu.pk/idea/idea.php?idea=908",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ResearchCardProps {
  title: string
  description: string
  tags: string[]
  repoUrl: string
  collaborators?: string[]
  additionalLinks?: Array<{ title: string; url: string }>
}

function ResearchCard({ title, description, tags, repoUrl, collaborators, additionalLinks }: ResearchCardProps) {
  return (
    <Card className="overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-full mt-1">
                <Network className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            <p className="text-muted-foreground">{description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

            {collaborators && collaborators.length > 0 && (
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Collaborators:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {collaborators.map((collaborator) => (
                    <Badge key={collaborator} variant="secondary" className="rounded-full">
                      {collaborator}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Repository
                </Link>
              </Button>
            </div>

            {additionalLinks && additionalLinks.length > 0 && (
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {additionalLinks.map((link, index) => (
                    <Button key={index} asChild variant="outline" size="sm" className="rounded-full">
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {link.title}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Server className="h-4 w-4 text-primary" /> Key Components
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Data Distribution System</li>
                <li>• Edge Device Integration</li>
                <li>• Privacy-Preserving Mechanisms</li>
                <li>• Aggregation Server</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-primary" /> Technologies
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Python</li>
                <li>• Jupyter Notebook</li>
                <li>• Deep Learning Frameworks</li>
                <li>• Edge Computing Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
