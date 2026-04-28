import { Module } from "@/data/modules";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

export default function ModuleCard({ module, onClick }: ModuleCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/50"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Badge variant="outline" className="mb-2">{module.code}</Badge>
            <CardTitle className="text-xl">{module.title}</CardTitle>
            <CardDescription className="mt-2">{module.credits} Credits</CardDescription>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {module.description}
        </p>
        <div className="mt-4 text-xs text-muted-foreground">
          {module.concepts.length} key concepts
        </div>
      </CardContent>
    </Card>
  );
}
