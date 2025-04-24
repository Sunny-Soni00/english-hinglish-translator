
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function TrainingDetails() {
  // Training data from the provided information
  const trainingData = [
    { epoch: 1, trainLoss: 2.2175, trainAcc: 0.7872, valLoss: 0.8368, valAcc: 0.8620 },
    // We don't have all the epochs data, but we have the final epoch
    { epoch: 10, trainLoss: 0.3036, trainAcc: 0.9320, valLoss: 0.3685, valAcc: 0.9280 },
  ];

  // Model inference code
  const inferenceCode = `def decode_sequence(input_seq):
    # Encoder
    states_value = encoder_model.predict(input_seq)
    
    # Decoder setup
    target_seq = np.zeros((1, 1))
    target_seq[0, 0] = word2idx_output['<sos>']
    
    decoded_sentence = []
    for _ in range(max_seq_len):
        output_tokens, h, c = decoder_model.predict([target_seq] + states_value)
        sampled_token_index = np.argmax(output_tokens[0, -1, :])
        
        if sampled_token_index == word2idx_output['<eos>']:
            break
            
        decoded_word = idx2word_output[sampled_token_index]
        decoded_sentence.append(decoded_word)
        
        # Update states
        target_seq = np.zeros((1, 1))
        target_seq[0, 0] = sampled_token_index
        states_value = [h, c]
        
    return ' '.join(decoded_sentence)`;

  return (
    <section id="training" className="section-container bg-muted/30">
      <h2 className="section-title">Training Details</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Training Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="font-medium">Training Metrics:</div>
              <p className="text-sm text-muted-foreground mb-4">
                Epoch 1/10 - Loss: 2.2175 - Accuracy: 0.7872 - Val Loss: 0.8368 - Val Accuracy: 0.8620<br/>
                Epoch 10/10 - Loss: 0.3036 - Accuracy: 0.9320 - Val Loss: 0.3685 - Val Accuracy: 0.9280
              </p>
              
              <div className="font-medium">Learning Curves:</div>
              <div className="h-80">
                <p className="text-center text-muted-foreground italic mb-4">
                  (Accuracy chart will be uploaded manually)
                </p>
                
                <div className="border rounded-lg p-4 bg-background/50 h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground">Training & Validation Accuracy Chart</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Please upload the chart image here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Model Inference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="font-medium">Translation Function:</div>
              <pre className="code-block">{inferenceCode}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
