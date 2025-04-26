"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Github } from "lucide-react"
import Link from "next/link"

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

interface GitHubActivityProps {
  username: string
}

export function GitHubActivity({ username }: GitHubActivityProps) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true)
        // In a real implementation, you would fetch from the GitHub API
        // For demo purposes, we'll simulate a response

        // Simulated data based on typical repositories an AI engineer might have
        const simulatedRepos: Repository[] = [
          {
            name: "object-detection-tracking",
            description: "Real-time object detection and tracking system using YOLO and OpenCV",
            html_url: `https://github.com/${username}/object-detection-tracking`,
            stargazers_count: 12,
            forks_count: 5,
            language: "Python",
          },
          {
            name: "rag-llama-langchain",
            description: "Retrieval-augmented generation application using Llama and LangChain",
            html_url: `https://github.com/${username}/rag-llama-langchain`,
            stargazers_count: 8,
            forks_count: 3,
            language: "Python",
          },
          {
            name: "drone-payload-algorithm",
            description: "Advanced algorithm for predicting payload drop locations from drones",
            html_url: `https://github.com/${username}/drone-payload-algorithm`,
            stargazers_count: 15,
            forks_count: 7,
            language: "Python",
          },
        ]

        setRepos(simulatedRepos)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch GitHub data")
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-destructive">{error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-[125px] w-full rounded-lg" />
          <Skeleton className="h-[125px] w-full rounded-lg" />
          <Skeleton className="h-[125px] w-full rounded-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <Card key={repo.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <Github className="h-4 w-4 mr-2 text-primary" />
                    <h3 className="font-semibold truncate">{repo.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{repo.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <span className="mr-1">⭐</span> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">🍴</span> {repo.forks_count}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{repo.language}</span>
                </div>
                <div className="mt-4">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Repository →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
