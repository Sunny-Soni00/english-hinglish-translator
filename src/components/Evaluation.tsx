
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Evaluation() {
  const evaluationSamples = [
    {
      english: "skip alarms from 10 pm to 5 am",
      groundTruth: "raat 10 baje se subah 5 baje tak alarms ko skip kardo",
      prediction: "subha 5 baje se 5 baje tak alarms ko skip kardo",
    },
    {
      english: "can you set an alarm for 6 am ?",
      groundTruth: "kya aap subah 6 baje ke liye alarm set kar sakte he ?",
      prediction: "kya aap subah 6 baje ke liye alarm set kar sakte he ?",
    },
    {
      english: "is it going to be hot or cold today ?",
      groundTruth: "kya aaj hot hone wala he ya cold ?",
      prediction: "kya aaj hot hone wala he ya cold",
    },
    {
      english: "replay the song .",
      groundTruth: "song ko reply kare",
      prediction: "song ko phir se bajao",
    },
  ];

  const keyFeatures = [
    {
      title: "LSTM",
      description: "For context-aware encoding of source sentences"
    },
    {
      title: "Attention Mechanism",
      description: "To focus on relevant parts of input during translation"
    },
    {
      title: "Beam Search Decoding",
      description: "For generating optimal translation sequences"
    },
    {
      title: "Pre-trained Embeddings",
      description: "Using GloVe for English and FastText for Hinglish"
    }
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
                  </tr>
                </thead>
                <tbody>
                  {evaluationSamples.map((sample, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{sample.english}</td>
                      <td className="py-2 px-4">{sample.groundTruth}</td>
                      <td className="py-2 px-4">{sample.prediction}</td>
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
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Relevance of Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                The evaluation results demonstrate the model's ability to effectively translate English sentences into contextually appropriate Hinglish expressions. With an accuracy of 92.8% on the validation set, the system shows strong performance across various input types.
              </p>
              <p>
                While the model performs exceptionally well on common phrases and everyday expressions, there are still challenges with complex idiomatic expressions and domain-specific vocabulary. The results highlight both the strengths of the approach and areas for future improvement.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Strengths</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                    <li>High accuracy on common conversational phrases</li>
                    <li>Preservation of sentence structure and meaning</li>
                    <li>Natural-sounding Hinglish output</li>
                  </ul>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Challenges</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                    <li>Complex temporal expressions</li>
                    <li>Idiomatic phrases</li>
                    <li>Domain-specific terminology</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
