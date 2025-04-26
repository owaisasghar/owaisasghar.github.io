import { Card, CardContent } from "@/components/ui/card"

export function ExperienceTimeline() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path
              fillRule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background p-4 rounded-lg shadow-md">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-lg">Senior AI Engineer</h3>
                <time className="font-medium text-muted-foreground">June 2023 - Present</time>
              </div>
              <div className="text-muted-foreground mb-2">Blitzkreig Defense Solution, Cavalier Group</div>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Developed Drone Payload Systems and Remote Weapon Stations (RWS)</li>
                <li>Designed Algorithms for Object Detection, Tracking, and Automation on Real-Time Hardware</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path
              fillRule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background p-4 rounded-lg shadow-md">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-lg">AI Intern</h3>
                <time className="font-medium text-muted-foreground">January 2023 - April 2023</time>
              </div>
              <div className="text-muted-foreground mb-2">AIOBC, Rawalpindi</div>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Built AI Applications, including an Article Recommendation System, Image Caption Generation, and
                  Vehicle License Plate Detection
                </li>
                <li>Gained Expertise in Docker and AWS Deployment for AI Applications</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
