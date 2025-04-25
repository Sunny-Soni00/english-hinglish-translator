
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, FileUp } from "lucide-react";

export function ProjectOverview() {
  const tools = [
    { name: "Python", type: "Language" },
    { name: "TensorFlow", type: "Framework" },
    { name: "NumPy", type: "Library" },
    { name: "Pandas", type: "Library" },
    { name: "Matplotlib", type: "Visualization" }
  ];

  const preprocessing = [
    "Text lowercasing",
    "Removal of special characters and punctuation",
    "Addition of <sos> and <eos> tokens",
    "Tokenization and sequence padding",
    "Dataset split into Train (80%), Validation (10%), Test (10%)"
  ];

  return (
    <section id="overview" className="section-container">
      <h2 className="section-title">Project Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Tools and Libraries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-sm text-muted-foreground">{tool.type}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileUp className="h-5 w-5" />
              Data Preparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {preprocessing.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
