
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Database, 
  Layers, 
  Activity, 
  BarChart2, 
  Code, 
  PanelLeftClose,
  PanelLeft
} from "lucide-react";
import { Button } from "./ui/button";

export function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: "Project Overview", href: "#overview" },
    { icon: <Database className="h-5 w-5" />, label: "Dataset Details", href: "#dataset" },
    { icon: <Layers className="h-5 w-5" />, label: "Unique Approach", href: "#unique-approach" },
    { icon: <Activity className="h-5 w-5" />, label: "Training", href: "#training" },
    { icon: <BarChart2 className="h-5 w-5" />, label: "Evaluation", href: "#evaluation" },
  ];

  return (
    <div className={`hidden lg:flex flex-col ${isOpen ? 'w-64' : 'w-16'} h-screen fixed left-0 top-0 border-r border-border/40 bg-background transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
          <Link to="/" className="text-primary font-medium">English to Hinglish</Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-md hover:bg-muted"
        >
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      <div className="flex-1 py-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted transition-colors"
              >
                {item.icon}
                <span className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'w-0 opacity-0'}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
