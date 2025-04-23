
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DatasetDetails() {
  const dataSplits = [
    { name: "Training", percentage: 80, count: 79848, color: "bg-primary" },
    { name: "Validation", percentage: 10, count: 9981, color: "bg-teal-500" },
    { name: "Test", percentage: 10, count: 9981, color: "bg-amber-500" },
  ];

  const preprocessingSteps = [
    "Lowercasing all text",
    "Removing null entries and duplicates",
    "Filtering out extremely long sentences",
    "Cleaning special characters and normalizing punctuation",
    "Tokenization using SentencePiece",
  ];

  return (
    <section id="dataset" className="section-container bg-muted/30">
      <h2 className="section-title">Dataset Details</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Data Source & Size</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-2">
                The dataset used in this project is sourced from Kaggle's Hinglish dataset,
                containing parallel sentence pairs in English and Hinglish.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium">Total cleaned size:</span>
                <span className="text-lg font-bold">22,731 parallel sentence pairs</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {dataSplits.map((split) => (
                <div key={split.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{split.name}</span>
                    <span className="text-sm text-muted-foreground">{split.count} samples ({split.percentage}%)</span>
                  </div>
                  <Progress value={split.percentage} className={split.color} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Preprocessing Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {preprocessingSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Sample Data Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">English</th>
                    <th className="py-2 px-4 text-left">Hinglish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">How are you feeling today?</td>
                    <td className="py-2 px-4">Aaj aap kaisa feel kar rahe ho?</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">I really enjoyed the movie we watched</td>
                    <td className="py-2 px-4">Humne jo movie dekhi woh mujhe bohot pasand aayi</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Could you send me the report?</td>
                    <td className="py-2 px-4">Kya aap mujhe report send kar sakte ho?</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Let's meet at the coffee shop</td>
                    <td className="py-2 px-4">Coffee shop pe milte hain</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
