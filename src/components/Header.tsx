
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xl text-primary">
            English to Hinglish Neural Translator
          </span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {["Overview", "Dataset", "Model", "Training", "Evaluation", "API", "Future"].map(
              (item) => (
                <Link
                  key={item}
                  to={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
