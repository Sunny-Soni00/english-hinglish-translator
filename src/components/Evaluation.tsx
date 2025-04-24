
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
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">LSTM</p>
                  <p className="text-sm text-muted-foreground">For context-aware encoding of source sentences</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
