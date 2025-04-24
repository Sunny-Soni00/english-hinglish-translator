
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ModelInference() {
  const steps = [
    {
      title: "Input Processing",
      description: "User's English text is preprocessed, tokenized, and converted to numerical sequences"
    },
    {
      title: "Encoder",
      description: "Processes input through Bidirectional LSTM layers to create context-aware representations"
    },
    {
      title: "Decoder",
      description: "Generates Hinglish output token by token using attention mechanism and previous predictions"
    },
    {
      title: "Post-processing",
      description: "Converts numerical output back to text and formats final translation"
    }
  ];

  return (
    <section id="inference" className="section-container">
      <h2 className="section-title">Model Inference Flow</h2>
      
      <div className="flex flex-col items-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="w-full max-w-2xl">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="flex justify-center my-2">
                <ArrowRight className="text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
