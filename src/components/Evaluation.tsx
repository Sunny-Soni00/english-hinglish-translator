
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Evaluation() {
  const evaluationSamples = [
    {
      english: "I need to go to the market",
      groundTruth: "Mujhe market jana hai",
      prediction: "Mujhe market jana hai",
      bleuScore: 1.00,
    },
    {
      english: "What time does the movie start?",
      groundTruth: "Movie kab start hogi?",
      prediction: "Movie kis time start hogi?",
      bleuScore: 0.78,
    },
    {
      english: "The food was delicious",
      groundTruth: "Khana bahut tasty tha",
      prediction: "Khana bahut tasty tha",
      bleuScore: 1.00,
    },
    {
      english: "Can you help me with this assignment?",
      groundTruth: "Kya tum mujhe is assignment mein help kar sakte ho?",
      prediction: "Kya tum mujhe is assignment mein help kar sakte ho?",
      bleuScore: 1.00,
    },
    {
      english: "I forgot my password",
      groundTruth: "Main apna password bhool gaya",
      prediction: "Main mera password bhool gaya",
      bleuScore: 0.85,
    },
  ];

  return (
    <section id="evaluation" className="section-container">
      <h2 className="section-title">Evaluation</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Sample Evaluation Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">English Input</th>
                    <th className="py-2 px-4 text-left">Ground Truth Hinglish</th>
                    <th className="py-2 px-4 text-left">Model Prediction</th>
                    <th className="py-2 px-4 text-left">BLEU Score</th>
                  </tr>
                </thead>
                <tbody>
                  {evaluationSamples.map((sample, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{sample.english}</td>
                      <td className="py-2 px-4">{sample.groundTruth}</td>
                      <td className="py-2 px-4">{sample.prediction}</td>
                      <td className="py-2 px-4">
                        <div
                          className={`text-center font-medium ${
                            sample.bleuScore >= 0.9
                              ? "text-green-600"
                              : sample.bleuScore >= 0.7
                              ? "text-amber-600"
                              : "text-red-600"
                          }`}
                        >
                          {sample.bleuScore.toFixed(2)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Bidirectional LSTM</p>
                    <p className="text-sm text-muted-foreground">For context-aware encoding of source sentences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">GloVe Embeddings</p>
                    <p className="text-sm text-muted-foreground">200D pretrained vectors for English text</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Teacher Forcing</p>
                    <p className="text-sm text-muted-foreground">Applied during training to improve convergence</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Beam Search</p>
                    <p className="text-sm text-muted-foreground">Implementation for better decoding results</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
