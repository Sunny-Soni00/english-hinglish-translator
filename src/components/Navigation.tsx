
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard, Database, Layers, Activity, BarChart2, Code } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: "Project Overview", href: "#overview" },
    { icon: <Database className="h-5 w-5" />, label: "Dataset Details", href: "#dataset" },
    { icon: <Layers className="h-5 w-5" />, label: "Model Architecture", href: "#model" },
    { icon: <Activity className="h-5 w-5" />, label: "Training", href: "#training" },
    { icon: <BarChart2 className="h-5 w-5" />, label: "Evaluation", href: "#evaluation" },
  ];

  return (
    <div className="lg:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu}
        className="z-50"
      >
        {isOpen ? (
          <X className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-xl font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Link
              to="/alternative-approach"
              className="flex items-center gap-2 text-xl font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              <Code className="h-5 w-5" />
              Alternative Approach
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
