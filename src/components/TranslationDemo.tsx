
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { translateToHinglish } from "@/utils/demoTranslate";
import { Card, CardContent } from "@/components/ui/card";

export function TranslationDemo() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await translateToHinglish(input);
      setOutput(result);
    } catch (error) {
      console.error("Translation error:", error);
      setOutput("Translation error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Example phrases
  const examplePhrases = [
    "How are you?",
    "What is your name?",
    "I like to eat pizza",
    "Can you help me with this?"
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <div className="flex gap-2 mb-2">
              <Input
                placeholder="Enter English text..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTranslate} disabled={isLoading || !input.trim()}>
                {isLoading ? "Translating..." : "Translate"}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {examplePhrases.map((phrase) => (
                <Button
                  key={phrase}
                  variant="outline"
                  size="sm"
                  onClick={() => setInput(phrase)}
                  className="text-xs"
                >
                  {phrase}
                </Button>
              ))}
            </div>
          </div>
          
          {output && (
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-semibold mb-1">Hinglish Translation:</p>
              <p className="text-lg">{output}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
