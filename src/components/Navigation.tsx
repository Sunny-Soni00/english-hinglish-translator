
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Overview",
    "Dataset", 
    "Model", 
    "Training", 
    "Evaluation", 
    "API", 
    "Future"
  ];

  return (
    <div className="md:hidden">
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
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
