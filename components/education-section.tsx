import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, ExternalLink } from "lucide-react"
import Link from "next/link"

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Education & Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-[600px] mx-auto pt-4">
              My academic background and professional certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">BS Electrical Engineering</h4>
                    <span className="text-sm text-muted-foreground">September 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://nust.edu.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1 group"
                    >
                      CEME, NUST, Pakistan
                      <ExternalLink className="h-3 w-3 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    Studied at Pakistan's #1 ranked university for Engineering & Technology (#127 globally)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">FSc Pre-Engineering</h4>
                    <span className="text-sm text-muted-foreground">March 2018</span>
                  </div>
                  <p className="text-primary">Punjab Group of Colleges, Pattoki</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg">Matriculation</h4>
                    <span className="text-sm text-muted-foreground">March 2016</span>
                  </div>
                  <p className="text-primary">Army Public School, Chunian Cantt</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 rounded-full">
                    Coursera
                  </Badge>
                  <div>
                    <Link
                      href="https://coursera.org/share/fe4c305f9a21803dc0317a4cf57796a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      Introduction to Embedded Machine Learning
                      <ExternalLink className="h-3 w-3 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 rounded-full">
                    Coursera
                  </Badge>
                  <div>
                    <Link
                      href="https://coursera.org/share/48d16e78c1ac54913350a82459c4a736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      Supervised Machine Learning: Regression and Classification
                      <ExternalLink className="h-3 w-3 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 rounded-full">
                    Coursera
                  </Badge>
                  <div>
                    <Link
                      href="https://coursera.org/share/d77fb135cd230222de75c4d3a6fc3b28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      Advanced Learning Algorithms
                      <ExternalLink className="h-3 w-3 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 rounded-full">
                    Coursera
                  </Badge>
                  <div>
                    <p className="font-bold">Introduction to Power Electronics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
