import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Database, Network } from "lucide-react";

export function FuturePlans() {
  const plans = [
    {
      title: "Add Attention Mechanism",
      description: "Implement Bahdanau or Luong attention to improve translation quality for longer sentences.",
      icon: <Brain className="h-10 w-10" />,
    },
    {
      title: "Convert to Chatbot",
      description: "Integrate with LangChain or Rasa to create a conversational agent that can chat in Hinglish.",
      icon: <Network className="h-10 w-10" />,
    },
    {
      title: "Fine-tune Transformer Models",
      description: "Explore performance improvements by fine-tuning pre-trained transformer models like mT5 or MBart.",
      icon: <Cpu className="h-10 w-10" />,
    },
    {
      title: "Expand Dataset Coverage",
      description: "Collect and curate domain-specific English-Hinglish parallel data to improve specialized translations.",
      icon: <Database className="h-10 w-10" />,
    },
  ];

  return (
    <section id="future" className="section-container">
      <h2 className="section-title">Future Plans</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="overflow-hidden border-t-4 border-t-primary transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="mb-2 text-primary">{plan.icon}</div>
              <CardTitle>{plan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{plan.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Project Impact & Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              This English to Hinglish neural translator has numerous potential applications across different domains:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2 mt-4">
              <li><strong>Social Media Analysis</strong> - Understanding Hinglish content on platforms like Twitter and Instagram</li>
              <li><strong>Customer Support</strong> - Creating more natural-sounding chatbots for Indian users</li>
              <li><strong>Content Creation</strong> - Helping content creators target the Indian market more effectively</li>
              <li><strong>Entertainment</strong> - Supporting subtitle generation for English content in Hinglish</li>
              <li><strong>Education</strong> - Building language learning tools for Hindi speakers learning English</li>
              <li><strong>Voice Assistants</strong> - Enhancing regional voice assistants with more natural language understanding</li>
            </ul>
            <p className="mt-4">
              The Hinglish translation model represents a step toward more culturally aware and linguistically diverse AI systems
              that can bridge language gaps and provide more inclusive technology experiences.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
