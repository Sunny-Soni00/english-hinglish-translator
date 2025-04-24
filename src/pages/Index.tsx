import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectOverview } from "@/components/ProjectOverview";
import { DatasetDetails } from "@/components/DatasetDetails";
import { ModelArchitecture } from "@/components/ModelArchitecture";
import { AlternativeApproach } from "@/components/AlternativeApproach";
import { TrainingDetails } from "@/components/TrainingDetails";
import { Evaluation } from "@/components/Evaluation";
import { ApiAccess } from "@/components/ApiAccess";
import { FuturePlans } from "@/components/FuturePlans";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          history.pushState({}, '', `#${id}`);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <div className="flex md:hidden fixed bottom-4 right-4 z-50">
            <Navigation />
          </div>
          <ProjectOverview />
          <DatasetDetails />
          <ModelArchitecture />
          <AlternativeApproach />
          <TrainingDetails />
          <Evaluation />
          <ApiAccess />
          <FuturePlans />
        </main>

        <footer className="border-t py-8 bg-muted/30">
          <div className="container text-center">
            <p className="text-muted-foreground">
              English to Hinglish Neural Translator Project Showcase
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

export default Index;
