
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AlternativeApproach = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-8">
          <div className="mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary gap-1">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to main project</span>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-8">Alternative Approach: Encoder-Attention-Decoder with Pretrained Embeddings</h1>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Input & Data Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p><strong>Data Source:</strong> Pairs of English and Hinglish sentences (Full Corpus, ~190k+ pairs)</p>
                
                <h3 className="text-xl font-medium mt-4">Preprocessing:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lowercasing</li>
                  <li>Basic text cleaning (punctuation, unwanted characters)</li>
                  <li>Add &lt;sos&gt; and &lt;eos&gt; tokens to Hinglish target sentences</li>
                  <li>Dataset split into Train, Validation, and Test sets</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-4">Tokenization & Padding:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Separate tokenizers for English and Hinglish trained only on the training data</li>
                  <li>Text converted to sequences of integers</li>
                  <li>Padding applied to all sequences to MAX_SEQ_LEN</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Model Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-medium">Embeddings:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Encoder (English): Pre-trained GloVe vectors (200d or 300d), fine-tuned during training</li>
                  <li>Decoder (Hinglish): FastText embeddings trained on Hinglish corpus, also fine-tuned</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-4">Architecture:</h3>
                <div className="bg-muted rounded-lg p-6 mt-4">
                  <div className="relative">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      {/* Encoder */}
                      <div className="flex flex-col items-center">
                        <div className="text-center mb-2 font-semibold">Encoder</div>
                        <div className="flex flex-col gap-2">
                          <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                            Pre-trained GloVe Embedding
                          </div>
                          <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                            Bidirectional LSTM/GRU
                          </div>
                          <div className="hidden md:block h-8 border-r border-dashed border-primary/50 mx-auto"></div>
                        </div>
                      </div>
                      
                      {/* Arrow for mobile */}
                      <div className="md:hidden flex justify-center">
                        <div className="border-b-2 border-dashed border-primary/50 w-8"></div>
                      </div>
                      
                      {/* Attention */}
                      <div className="flex flex-col items-center">
                        <div className="text-center mb-2 font-semibold">Attention</div>
                        <div className="flex flex-col gap-2">
                          <div className="bg-secondary/20 border border-secondary/30 rounded-md p-3 text-center">
                            Bahdanau Attention
                          </div>
                          <div className="text-xs text-center text-muted-foreground">Dynamic Context Vector</div>
                        </div>
                      </div>
                      
                      {/* Decoder */}
                      <div className="flex flex-col items-center">
                        <div className="text-center mb-2 font-semibold">Decoder</div>
                        <div className="flex flex-col gap-2">
                          <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                            FastText Embedding
                          </div>
                          <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                            LSTM/GRU Layer
                          </div>
                          <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                            Dense Layer
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Input/Output Labels */}
                    <div className="flex flex-col md:flex-row justify-between mt-4">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Input</div>
                        <div className="bg-secondary/40 border border-secondary/50 rounded p-1 text-sm">
                          "How are you?"
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Output</div>
                        <div className="bg-secondary/40 border border-secondary/50 rounded p-1 text-sm">
                          "Aap kaise ho?"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>LSTM/GRU-based Encoder-Decoder with Bahdanau Attention</li>
                    <li>Encoder processes the English input and returns all hidden states along with the context vector ([h, c])</li>
                    <li>Attention mechanism computes a dynamic context vector at each decoding step</li>
                    <li>Decoder uses &lt;sos&gt; token and context vector; each step takes previous token embedding, hidden state, and attention vector</li>
                    <li>Teacher Forcing applied during training</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Training and Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="training">
                  <TabsList className="mb-4">
                    <TabsTrigger value="training">Training</TabsTrigger>
                    <TabsTrigger value="inference">Inference</TabsTrigger>
                    <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="training">
                    <div className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Loss: SparseCategoricalCrossentropy</li>
                        <li>Optimizer: Adam</li>
                        <li>Early stopping on validation loss</li>
                        <li>Full training data used for maximum performance</li>
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="inference">
                    <div className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Separate encoder and decoder models created</li>
                        <li>Attention integrated into decoder for inference</li>
                        <li>Beam Search decoding with k beams to select best sequence</li>
                      </ul>
                      
                      <pre className="code-block bg-muted p-4 rounded-md overflow-x-auto">
{`# Beam Search Implementation
def beam_search_decode(encoder_model, decoder_model, input_seq, beam_width=3):
    # Get encoder outputs
    encoder_outputs, state_h, state_c = encoder_model.predict(input_seq)
    
    # Initial state
    states = [state_h, state_c]
    
    # Start with a single sequence (start token)
    sequences = [([start_token], 0.0, states)]
    completed_sequences = []
    
    # Beam search loop
    max_length = 50
    for i in range(max_length):
        all_candidates = []
        
        for seq, score, states in sequences:
            if seq[-1] == end_token:
                completed_sequences.append((seq, score))
                continue
                
            # Prepare decoder inputs
            decoder_input = np.array([seq[-1]]).reshape(1, 1)
            
            # Get predictions and new states
            outputs, attention, h, c = decoder_model.predict(
                [decoder_input, encoder_outputs] + states
            )
            
            # Get top beam_width predictions
            top_indices = np.argsort(outputs[0, 0, :])[-beam_width:]
            
            # Create candidates
            for idx in top_indices:
                candidate_seq = seq + [idx]
                candidate_score = score + np.log(outputs[0, 0, idx])
                candidate_states = [h, c]
                all_candidates.append((candidate_seq, candidate_score, candidate_states))
        
        # Sort and select top beam_width candidates
        ordered = sorted(all_candidates, key=lambda x: x[1], reverse=True)
        sequences = ordered[:beam_width]
    
    # Return best completed sequence
    if completed_sequences:
        best_seq, _ = max(completed_sequences, key=lambda x: x[1])
    else:
        best_seq, _, _ = max(sequences, key=lambda x: x[1])
    
    return best_seq`}
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="evaluation">
                    <div className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Corpus-level BLEU Score calculated on test set</li>
                        <li>(Optional) Additional metrics: ROUGE, METEOR</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/">
              <Button>
                Return to Main Project
              </Button>
            </Link>
          </div>
        </main>
        <footer className="border-t py-8 bg-muted/30">
          <div className="container text-center">
            <p className="text-muted-foreground">
              English to Hinglish Translator Project Showcase
            </p>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default AlternativeApproach;
