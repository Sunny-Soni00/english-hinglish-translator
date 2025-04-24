
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ModelArchitecture() {
  const architectureDetails = [
    { name: "Embedding Dimension", value: "200" },
    { name: "Latent Dimension", value: "400" },
    { name: "Max Sequence Length", value: "50" },
    { name: "Max Vocabulary Size", value: "40000" },
  ];

  const modelCode = `# Encoder
encoder_input = Input(shape=(max_seq_len,))
encoder_embedding = Embedding(num_words, Embedding_dim, weights=[word_embedding], trainable=False)
encoder_lstm = LSTM(Latent_dim, return_state=True)
encoder_output, state_h, state_c = encoder_lstm(encoder_embedding(encoder_input))

# Decoder
decoder_input = Input(shape=(max_seq_len,))
decoder_embedding = Embedding(num_words_output, Embedding_dim)
decoder_lstm = LSTM(Latent_dim, return_sequences=True, return_state=True)
decoder_outputs, _, _ = decoder_lstm(decoder_embedding(decoder_input), 
                               initial_state=[state_h, state_c])
decoder_dense = Dense(num_words_output, activation='softmax')`;

  return (
    <section id="model" className="section-container">
      <h2 className="section-title">Model Architecture</h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Sequence-to-Sequence LSTM Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-6">
              <div className="relative">
                {/* This is a simplified visual representation of a Seq2Seq model */}
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {/* Encoder */}
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-2 font-semibold">Encoder</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        Embedding Layer
                      </div>
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        LSTM Layer
                      </div>
                      <div className="hidden md:block h-8 border-r border-dashed border-primary/50 mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Arrow for mobile */}
                  <div className="md:hidden flex justify-center">
                    <div className="border-b-2 border-dashed border-primary/50 w-8"></div>
                  </div>
                  
                  {/* States */}
                  <div className="hidden md:flex flex-col justify-center">
                    <div className="border-t-2 border-dashed border-primary/50 w-12"></div>
                    <div className="text-xs text-center text-muted-foreground">Context Vector</div>
                  </div>
                  
                  {/* Decoder */}
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-2 font-semibold">Decoder</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        Embedding Layer
                      </div>
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        LSTM Layer
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
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hyperparameters</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {architectureDetails.map((detail, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">{detail.name}</div>
                  <div className="font-medium">{detail.value}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="code-block">{modelCode}</pre>
        </CardContent>
      </Card>
    </section>
  );
}
