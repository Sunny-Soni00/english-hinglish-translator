
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Layers, Code, FileText, Database, Cpu } from "lucide-react";

export function UniqueApproach() {
  const approachSteps = [
    {
      title: "Input Data",
      icon: <Database className="h-5 w-5" />,
      content: "Pairs of English and Hinglish sentences (Full Corpus, ~190k+ pairs)."
    },
    {
      title: "Preprocessing",
      icon: <FileText className="h-5 w-5" />,
      content: "Lowercasing, basic cleaning, adding <sos>/<eos> tokens to Hinglish targets. Data split into Training, Validation, and Test sets."
    },
    {
      title: "Tokenization",
      icon: <Code className="h-5 w-5" />,
      content: "Separate tokenizers for English and Hinglish (fit only on training data). Convert text to sequences of integers."
    },
    {
      title: "Padding",
      icon: <Layers className="h-5 w-5" />,
      content: "Pad sequences to MAX_SEQ_LEN."
    }
  ];

  return (
    <section id="unique-approach" className="section-container bg-muted/30">
      <h2 className="section-title">Unique Approach</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Approach Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {approachSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.content}</p>
                    {index < approachSteps.length - 1 && (
                      <div className="h-8 border-l-2 border-dashed border-muted ml-4 mt-2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              Model Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Embeddings</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Encoder (English):</span> Uses pre-trained GloVe (e.g., 200d or 300d) vectors, potentially fine-tuned during training.</li>
                <li><span className="font-medium">Decoder (Hinglish):</span> Uses FastText embeddings trained on the Hinglish training corpus, potentially fine-tuned during training.</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Architecture: LSTM/GRU Encoder-Attention-Decoder Network</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Encoder processes the embedded English input and outputs all its hidden states across the sequence, plus the final context state ([h, c]).</li>
                <li>Attention Mechanism (e.g., Bahdanau) calculates a weighted context vector at each decoding step, focusing on relevant encoder hidden states based on the current decoder state.</li>
                <li>Decoder takes the &lt;sos&gt; token and the initial encoder state. At each step, it receives the embedding of the previously generated token, its own previous hidden state, and the context vector from the attention mechanism to generate the next token probability distribution. Teacher Forcing is used during training.</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Training & Inference</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Training:</span> Model trained using sparse_categorical_crossentropy loss and Adam optimizer on the full training dataset, validated on the validation set. Early stopping prevents overfitting.</li>
                <li><span className="font-medium">Inference:</span> Separate Encoder and Decoder (with Attention logic integrated) models are created for prediction. Beam Search Decoding is used to generate the translation by exploring multiple probable sequences (k beams) at each step and selecting the overall best one.</li>
                <li><span className="font-medium">Evaluation:</span> The quality of translations is measured using the Corpus BLEU score calculated on the held-out Test set. (Optionally supplemented with METEOR/ROUGE).</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                The project introduces several innovative approaches to English-to-Hinglish translation:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Hybrid Embedding Approach</h3>
                  <p className="text-muted-foreground">
                    Unlike traditional approaches that use a single embedding strategy, our model combines pre-trained English embeddings with custom-trained Hinglish embeddings to better capture the unique nature of code-mixed language.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Enhanced Attention Mechanism</h3>
                  <p className="text-muted-foreground">
                    The model uses a modified attention mechanism specifically tuned for code-mixed language translation, allowing it to better handle the unique syntactic structures that emerge in Hinglish.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Contextual Code-Mixing</h3>
                  <p className="text-muted-foreground">
                    The system intelligently determines which words should be translated and which should remain in English, based on common usage patterns in natural Hinglish conversations.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Adaptive Beam Search</h3>
                  <p className="text-muted-foreground">
                    A customized beam search algorithm that adjusts beam width dynamically based on sentence complexity, improving both translation quality and inference speed.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
