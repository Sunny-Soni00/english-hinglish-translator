
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Link as LinkIcon, Rocket } from "lucide-react";
import { TranslationDemo } from "./TranslationDemo";

export function ProjectOverview() {
  const tools = [
    { name: "Python", icon: <Code className="h-5 w-5" /> },
    { name: "TensorFlow/Keras", icon: <Brain className="h-5 w-5" /> },
    { name: "SentencePiece", icon: <Database className="h-5 w-5" /> },
    { name: "Google Colab", icon: <Rocket className="h-5 w-5" /> },
  ];

  return (
    <section id="overview" className="section-container">
      <h2 className="section-title">Project Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To translate conversational English sentences into Hinglish using deep learning,
                creating a natural-sounding hybrid language that combines English vocabulary with
                Hindi grammar and expressions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Why It's Important</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Helps in building smart chatbots for Indian users</li>
                <li>Enables creation of regional virtual assistants</li>
                <li>Supports the development of Hinglish-based applications</li>
                <li>Bridges communication gaps between English and Hindi speakers</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tools Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div 
                    key={tool.name} 
                    className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {tool.icon}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Try It Out</h3>
          <TranslationDemo />
        </div>
      </div>
    </section>
  );
}
