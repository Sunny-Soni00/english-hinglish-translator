
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ModelArchitecture() {
  const architectureDetails = [
    { name: "Model Type", value: "Sequence-to-sequence with LSTM encoder-decoder" },
    { name: "Tokenization", value: "SentencePiece BPE (vocab size: 16,000 each)" },
    { name: "Embedding Size", value: "256 dimensions" },
    { name: "Training Method", value: "Teacher forcing" },
    { name: "Max Input Length", value: "English (16 tokens), Hinglish (18 tokens)" },
    { name: "Special Tokens", value: "Padding, Beginning of Sequence, End of Sequence" },
  ];

  const modelCode = `# Define the Seq2Seq model with LSTM encoder-decoder
def build_model(units, embedding_dim, vocab_size_en, vocab_size_hi):
    # Encoder
    encoder_inputs = Input(shape=(None,))
    encoder_emb = Embedding(vocab_size_en, embedding_dim)(encoder_inputs)
    encoder_lstm = LSTM(units, return_state=True)
    encoder_outputs, state_h, state_c = encoder_lstm(encoder_emb)
    encoder_states = [state_h, state_c]
    
    # Decoder
    decoder_inputs = Input(shape=(None,))
    decoder_emb = Embedding(vocab_size_hi, embedding_dim)
    decoder_lstm = LSTM(units, return_sequences=True, return_state=True)
    decoder_outputs, _, _ = decoder_lstm(
        decoder_emb(decoder_inputs), initial_state=encoder_states
    )
    decoder_dense = Dense(vocab_size_hi, activation='softmax')
    decoder_outputs = decoder_dense(decoder_outputs)
    
    # Create the model
    model = Model([encoder_inputs, decoder_inputs], decoder_outputs)
    
    return model`;

  const tokenizationCode = `# Define SentencePiece tokenizers for English and Hinglish
import sentencepiece as spm

# Train English tokenizer
spm.SentencePieceTrainer.train(
    input='english_corpus.txt',
    model_prefix='en_tokenizer',
    vocab_size=16000,
    character_coverage=1.0,
    model_type='bpe',
    pad_id=0,
    unk_id=1,
    bos_id=2,
    eos_id=3
)

# Train Hinglish tokenizer
spm.SentencePieceTrainer.train(
    input='hinglish_corpus.txt',
    model_prefix='hi_tokenizer',
    vocab_size=16000,
    character_coverage=0.9995,
    model_type='bpe',
    pad_id=0,
    unk_id=1,
    bos_id=2,
    eos_id=3
)

# Load the trained tokenizers
en_sp = spm.SentencePieceProcessor()
hi_sp = spm.SentencePieceProcessor()
en_sp.load('en_tokenizer.model')
hi_sp.load('hi_tokenizer.model')`;

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
            <CardTitle>Architecture Details</CardTitle>
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
          <CardTitle>Implementation Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="model">
            <TabsList className="mb-4">
              <TabsTrigger value="model">Model Definition</TabsTrigger>
              <TabsTrigger value="tokenization">Tokenization</TabsTrigger>
            </TabsList>
            <TabsContent value="model">
              <pre className="code-block">{modelCode}</pre>
            </TabsContent>
            <TabsContent value="tokenization">
              <pre className="code-block">{tokenizationCode}</pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
