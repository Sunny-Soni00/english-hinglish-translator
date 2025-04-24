
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { TranslationDemo } from "@/components/TranslationDemo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Translator = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary gap-1">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to main project</span>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-8">Try the Translator</h1>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enter any English text to see it translated into Hinglish using our neural translation model.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <TranslationDemo />
          </div>
        </main>
        
        <footer className="border-t py-8 bg-muted/30">
          <div className="container text-center">
            <p className="text-muted-foreground">
              English to Hinglish Translator Project Showcase
            </p>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Translator;
