
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image } from "lucide-react";
import { useState } from "react";

export function TrainingDetails() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFiles(Array.from(event.target.files));
    }
  };

  return (
    <section id="training" className="section-container">
      <h2 className="section-title">Training Details</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Training Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="font-medium">Final Results:</div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Metric</th>
                    <th className="text-left py-2">Training</th>
                    <th className="text-left py-2">Validation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Accuracy</td>
                    <td className="text-primary">93.20%</td>
                    <td className="text-primary">92.80%</td>
                  </tr>
                  <tr>
                    <td>Loss</td>
                    <td>0.3036</td>
                    <td>0.3685</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Training Charts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <Image className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload training charts or graphs
                  </p>
                </label>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative aspect-[4/3] group">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-sm">{file.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
