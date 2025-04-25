
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectOverview } from "@/components/ProjectOverview";
import { DatasetDetails } from "@/components/DatasetDetails";
import { UniqueApproach } from "@/components/UniqueApproach";
import { TrainingDetails } from "@/components/TrainingDetails";
import { Evaluation } from "@/components/Evaluation";
import { FuturePlans } from "@/components/FuturePlans";
import { Navigation } from "@/components/Navigation";
import { SideNav } from "@/components/SideNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code } from "lucide-react";

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
        <div className="flex flex-1">
          <SideNav />
          <main className="flex-1 lg:ml-64">
            <Hero />
            <div className="flex md:hidden fixed bottom-4 right-4 z-50">
              <Navigation />
            </div>
            <div className="lg:hidden flex justify-center my-8">
              <Link to="/alternative-approach" className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90 transition-all">
                <Code className="h-5 w-5" />
                <span>Alternative Approach</span>
              </Link>
            </div>
            <ProjectOverview />
            <DatasetDetails />
            <UniqueApproach />
            <TrainingDetails />
            <Evaluation />
            <FuturePlans />
          </main>
        </div>

        <footer className="border-t py-8 bg-muted/30 lg:ml-64">
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

export default Index;
