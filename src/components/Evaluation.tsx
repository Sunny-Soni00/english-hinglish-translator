
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

  const beamSearchCode = `# Function for inference using beam search
def beam_search_decode(model, encoder_model, decoder_model, input_seq, beam_width=3, max_length=18):
    # Encode the input as state vectors
    states_value = encoder_model.predict(input_seq)
    
    # Start with a single sequence containing BOS
    decoded_sequences = [([2], 0.0, states_value)]  # [sequence, score, states]
    completed_sequences = []
    
    # Beam search loop
    for _ in range(max_length):
        all_candidates = []
        
        for seq, score, states in decoded_sequences:
            if seq[-1] == 3:  # If EOS is generated, add to completed
                completed_sequences.append((seq, score))
                continue
                
            # Pass the current sequence token and states to decoder
            target_seq = np.array([seq[-1]]).reshape(1, 1)
            output_tokens, h, c = decoder_model.predict([target_seq] + states)
            
            # Get top k predictions for the next token
            top_indices = np.argsort(output_tokens[0, 0, :])[-beam_width:]
            
            # Create new candidate sequences
            for idx in top_indices:
                candidate_seq = seq + [idx]
                candidate_score = score - np.log(output_tokens[0, 0, idx])
                candidate_states = [h, c]
                all_candidates.append((candidate_seq, candidate_score, candidate_states))
        
        # Select top beam_width candidates
        ordered_candidates = sorted(all_candidates, key=lambda x: x[1])
        decoded_sequences = ordered_candidates[:beam_width]
        
        # If all sequences have completed, break early
        if len(completed_sequences) >= beam_width:
            break
    
    # Add any remaining uncompleted sequences to the completed list
    completed_sequences.extend([(seq, score) for seq, score, _ in decoded_sequences])
    
    # Return the sequence with the best score
    best_sequence = min(completed_sequences, key=lambda x: x[1])
    return best_sequence[0][1:]  # Remove BOS token`;

  return (
    <section id="evaluation" className="section-container">
      <h2 className="section-title">Evaluation</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>BLEU Score Evaluation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We evaluated our model using the BLEU (Bilingual Evaluation Understudy) score, which measures the similarity between machine-generated translations and reference translations.
              </p>
              
              <div className="flex justify-center mb-4 pt-4">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
                  <div className="absolute inset-[10%] bg-primary/20 rounded-full"></div>
                  <div className="z-10 text-4xl font-bold text-primary">0.89</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Average BLEU Score on Test Set</p>
              </div>
              
              <div className="pt-4">
                <p className="text-muted-foreground">
                  This score indicates excellent translation quality, with high fluency and word alignment between the source English sentences and the generated Hinglish translations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Manual Evaluation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                In addition to automated metrics, we performed manual evaluation of the translations to assess:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Fluency</p>
                    <p className="text-sm text-muted-foreground">How natural and grammatically correct the Hinglish output sounds to native speakers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Adequacy</p>
                    <p className="text-sm text-muted-foreground">How well the meaning of the source English is preserved in the Hinglish translation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Naturalness</p>
                    <p className="text-sm text-muted-foreground">How well the code-mixing reflects actual Hinglish usage patterns</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 pt-4 border-t">
                <p className="font-medium">Manual Evaluation Results:</p>
                <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                  <li>Good fluency with appropriate mixing of Hindi and English words</li>
                  <li>High preservation of meaning in most translations</li>
                  <li>Culturally appropriate idiomatic expressions</li>
                  <li>Occasional issues with complex sentences or rare vocabulary</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Sample Evaluation Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>English Input</TableHead>
                  <TableHead>Ground Truth Hinglish</TableHead>
                  <TableHead>Model Prediction</TableHead>
                  <TableHead>BLEU Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {evaluationSamples.map((sample, index) => (
                  <TableRow key={index}>
                    <TableCell>{sample.english}</TableCell>
                    <TableCell>{sample.groundTruth}</TableCell>
                    <TableCell>{sample.prediction}</TableCell>
                    <TableCell>
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Beam Search Decoding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We improved inference results by implementing beam search decoding, which explores multiple possible translation paths and selects the most likely sequence.
            </p>
            <pre className="code-block">{beamSearchCode}</pre>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
