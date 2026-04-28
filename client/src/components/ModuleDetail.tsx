import { Module } from "@/data/modules";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
}

export default function ModuleDetail({ module, onBack }: ModuleDetailProps) {
  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Modules
      </Button>

      <div className="space-y-2">
        <Badge variant="outline">{module.code}</Badge>
        <h1 className="text-4xl font-bold">{module.title}</h1>
        <p className="text-lg text-muted-foreground">{module.credits} Credits</p>
      </div>

      <Card className="bg-accent/5 border-accent/20">
        <CardContent className="pt-6">
          <p className="text-base leading-relaxed">
            {module.description}
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Key Concepts & Methodologies</h2>
        
        <div className="space-y-4">
          {module.concepts.map((concept, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base leading-relaxed">
                  {concept.description}
                </p>
                {concept.subtopics && concept.subtopics.length > 0 && (
                  <div className="space-y-2 mt-3 pt-3 border-t">
                    {concept.subtopics.map((subtopic, subIndex) => (
                      <div key={subIndex} className="flex gap-3">
                        <span className="text-primary font-semibold text-sm flex-shrink-0">•</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {subtopic}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Comparative Context from Other Universities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed text-muted-foreground">
            {module.comparativeContext}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
