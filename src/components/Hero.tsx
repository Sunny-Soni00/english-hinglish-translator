
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/10" />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          English to <span className="text-primary">Hinglish</span> Translator
        </h1>
        <p className="animate-fade-in text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A deep learning approach to translate conversational English into colloquial Hinglish using sequence-to-sequence LSTM architecture
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="animate-fade-in"
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Project
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="animate-fade-in"
            onClick={() => document.getElementById('model')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Model Architecture
          </Button>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
