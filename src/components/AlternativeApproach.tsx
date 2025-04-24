
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, Database, Layers } from "lucide-react";

export function AlternativeApproach() {
  const features = [
    {
      title: "Enhanced Embeddings",
      description: "Pre-trained GloVe (English) and FastText (Hinglish) embeddings with fine-tuning capability",
      icon: <Layers className="h-10 w-10" />,
    },
    {
      title: "Attention Mechanism",
      description: "Bahdanau attention computing dynamic context vectors at each decoding step",
      icon: <Brain className="h-10 w-10" />,
    },
    {
      title: "Larger Dataset",
      description: "Training on full corpus of ~190k+ English-Hinglish sentence pairs",
      icon: <Database className="h-10 w-10" />,
    },
    {
      title: "Advanced Inference",
      description: "Beam Search decoding with k beams for optimal sequence selection",
      icon: <Code className="h-10 w-10" />,
    },
  ];

  const modelCode = `# Define the attention layer
class BahdanauAttention(tf.keras.layers.Layer):
    def __init__(self, units):
        super().__init__()
        self.W1 = tf.keras.layers.Dense(units)
        self.W2 = tf.keras.layers.Dense(units)
        self.V = tf.keras.layers.Dense(1)
        
    def call(self, decoder_hidden, encoder_outputs):
        decoder_hidden_expanded = tf.expand_dims(decoder_hidden, 1)
        score = self.V(tf.nn.tanh(
            self.W1(encoder_outputs) + self.W2(decoder_hidden_expanded)
        ))
        attention_weights = tf.nn.softmax(score, axis=1)
        context_vector = attention_weights * encoder_outputs
        return context_vector, attention_weights`;

  const inferenceCode = `# Beam Search Implementation
def beam_search_decode(encoder_model, decoder_model, input_seq, k_beams=3):
    # Initial encoder states
    encoder_outputs, state_h, state_c = encoder_model.predict(input_seq)
    states = [state_h, state_c]
    
    # Initialize beam search
    beams = [(0.0, [sos_token], states)]
    completed_beams = []
    
    while len(beams) > 0 and len(completed_beams) < k_beams:
        new_beams = []
        
        for score, seq, states in beams:
            if seq[-1] == eos_token:
                completed_beams.append((score, seq))
                continue
                
            predictions, new_states = decoder_model.predict(
                [seq[-1:], encoder_outputs, states]
            )
            
            # Get top k predictions
            top_k = np.argsort(predictions[0])[-k_beams:]
            
            for token in top_k:
                new_score = score + np.log(predictions[0][token])
                new_seq = seq + [token]
                new_beams.append((new_score, new_seq, new_states))
        
        # Keep only top k beams
        beams = sorted(new_beams, key=lambda x: x[0])[-k_beams:]
    
    return completed_beams`;

  return (
    <section id="alternative" className="section-container bg-muted/30">
      <h2 className="section-title">Alternative Approach</h2>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Encoder-Attention-Decoder with Pretrained Embeddings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-6">
              <div className="relative">
                {/* Visual representation of the architecture */}
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {/* Encoder */}
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-2 font-semibold">Encoder</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        GloVe Embeddings
                      </div>
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        LSTM/GRU Layer
                      </div>
                    </div>
                  </div>
                  
                  {/* Attention */}
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-2 font-semibold">Attention</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-accent/20 border border-accent/30 rounded-md p-3 text-center">
                        Bahdanau
                        <br />
                        Attention
                      </div>
                    </div>
                  </div>
                  
                  {/* Decoder */}
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-2 font-semibold">Decoder</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-primary/20 border border-primary/30 rounded-md p-3 text-center">
                        FastText Embeddings
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
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-t-primary transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 text-primary">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="attention">
              <TabsList className="mb-4">
                <TabsTrigger value="attention">Attention Mechanism</TabsTrigger>
                <TabsTrigger value="inference">Beam Search</TabsTrigger>
              </TabsList>
              <TabsContent value="attention">
                <pre className="code-block">{modelCode}</pre>
              </TabsContent>
              <TabsContent value="inference">
                <pre className="code-block">{inferenceCode}</pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
