
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DatasetDetails() {
  const preprocessingSteps = [
    "Lowercasing all text",
    "Removing null entries and duplicates",
    "Filtering out extremely long sentences",
    "Cleaning special characters and normalizing punctuation",
    "Adding special tokens (<sos>, <eos>)"
  ];

  return (
    <section id="dataset" className="section-container bg-muted/30">
      <h2 className="section-title">Dataset Details</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Dataset Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
                    <td className="py-2 px-4">what's the name of the movie</td>
                    <td className="py-2 px-4">film ka kya naam hai</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4" style={{maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                      hi, the rotten tomatoes score is great but the...
                    </td>
                    <td className="py-2 px-4" style={{maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                      namaste, sada hua tomatoes score mahaan hai, l...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-muted-foreground">
              <p>Shape: (189102, 2)</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Preparation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="code-block mb-6">
{`# Take first 40,000 samples
input_text = []
target_text = []
target_text_input = []

for j in range(40000):
    input_text.append(df['english'][j])
    target_text.append(df['hinglish'][j] + ' <eos>')
    target_text_input.append('<sos> ' + df['hinglish'][j])`}
            </pre>
            
            <h3 className="text-lg font-medium mb-3">Preprocessing Steps:</h3>
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
    </section>
  );
}
