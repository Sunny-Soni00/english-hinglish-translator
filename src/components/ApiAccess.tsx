
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TranslationDemo } from "./TranslationDemo";

export function ApiAccess() {
  const fastApiCode = `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import tensorflow as tf
import numpy as np
import sentencepiece as spm

# Load models
encoder_model = tf.keras.models.load_model('encoder_model.h5')
decoder_model = tf.keras.models.load_model('decoder_model.h5')
en_sp = spm.SentencePieceProcessor()
hi_sp = spm.SentencePieceProcessor()
en_sp.load('en_tokenizer.model')
hi_sp.load('hi_tokenizer.model')

app = FastAPI(
    title="English to Hinglish Translator API",
    description="API for translating English text to Hinglish using a Seq2Seq LSTM model",
    version="1.0.0",
)

class TranslationRequest(BaseModel):
    text: str

class TranslationResponse(BaseModel):
    original: str
    translation: str

@app.post("/translate", response_model=TranslationResponse)
async def translate(request: TranslationRequest):
    try:
        # Preprocess and tokenize input
        text = request.text.lower().strip()
        if not text:
            raise HTTPException(status_code=400, detail="Text cannot be empty")
            
        # Tokenize and encode
        encoded_text = en_sp.encode_as_ids(text)
        input_seq = np.array([encoded_text])
        
        # Translate with beam search
        translation_ids = beam_search_decode(encoder_model, decoder_model, input_seq)
        
        # Decode the translation
        translation = hi_sp.decode(translation_ids)
        
        return TranslationResponse(
            original=text,
            translation=translation
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Beam search implementation here
# ...`;

  const exportCode = `import tensorflow as tf
import numpy as np
import sentencepiece as spm
import zipfile
import json

def export_model(model_path='best_model.h5', 
                 en_tokenizer_path='en_tokenizer.model',
                 hi_tokenizer_path='hi_tokenizer.model'):
    """Export the model and tokenizers for deployment"""
    
    # Create inference models
    main_model = tf.keras.models.load_model(model_path)
    
    # Get encoder and decoder layers
    encoder_inputs = main_model.input[0]
    encoder_outputs, state_h, state_c = main_model.layers[4].output
    encoder_states = [state_h, state_c]
    
    # Create encoder model
    encoder_model = tf.keras.Model(encoder_inputs, encoder_states)
    
    # Create decoder model
    decoder_state_input_h = tf.keras.Input(shape=(256,))
    decoder_state_input_c = tf.keras.Input(shape=(256,))
    decoder_states_inputs = [decoder_state_input_h, decoder_state_input_c]
    
    decoder_inputs = main_model.input[1]
    decoder_embedding = main_model.layers[3]
    decoder_lstm = main_model.layers[5]
    decoder_dense = main_model.layers[6]
    
    decoder_emb = decoder_embedding(decoder_inputs)
    decoder_outputs, state_h, state_c = decoder_lstm(decoder_emb, initial_state=decoder_states_inputs)
    decoder_states = [state_h, state_c]
    decoder_outputs = decoder_dense(decoder_outputs)
    
    decoder_model = tf.keras.Model(
        [decoder_inputs] + decoder_states_inputs,
        [decoder_outputs] + decoder_states
    )
    
    # Save the models
    encoder_model.save('encoder_model.h5')
    decoder_model.save('decoder_model.h5')
    
    # Bundle everything in a zip file
    with zipfile.ZipFile('english_hinglish_translator.zip', 'w') as zipf:
        zipf.write('encoder_model.h5')
        zipf.write('decoder_model.h5')
        zipf.write(en_tokenizer_path)
        zipf.write(hi_tokenizer_path)
        
        # Add a README
        with open('README.md', 'w') as f:
            f.write('# English to Hinglish Neural Translator\\n')
            f.write('This package contains the encoder and decoder models and tokenizers\\n')
            f.write('for translating English text to Hinglish.\\n\\n')
            f.write('## Files:\\n')
            f.write('- encoder_model.h5: The encoder part of the Seq2Seq model\\n')
            f.write('- decoder_model.h5: The decoder part of the Seq2Seq model\\n')
            f.write('- en_tokenizer.model: SentencePiece tokenizer for English\\n')
            f.write('- hi_tokenizer.model: SentencePiece tokenizer for Hinglish\\n')
            
        zipf.write('README.md')
        
    print("Model exported successfully to english_hinglish_translator.zip")

# Call the export function
export_model()`;

  return (
    <section id="api" className="section-container bg-muted/30">
      <h2 className="section-title">API Access</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>API Specification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Endpoint</h3>
                  <div className="mt-2 p-3 bg-muted rounded-md">
                    <code>POST /translate</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Request Format</h3>
                  <div className="mt-2 p-3 bg-muted rounded-md">
                    <pre className="text-sm">{JSON.stringify({ text: "Enter your English text here" }, null, 2)}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Response Format</h3>
                  <div className="mt-2 p-3 bg-muted rounded-md">
                    <pre className="text-sm">{JSON.stringify({ original: "Enter your English text here", translation: "Apna English text yahan enter karein" }, null, 2)}</pre>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-muted-foreground">
                    This API endpoint accepts English text and returns the translated Hinglish text.
                    The model behind this API is a Seq2Seq LSTM with beam search decoding for optimal translations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Try the API</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-6">
                Test the translation functionality with the interactive demo below:
              </p>
              <div className="flex-grow flex items-center">
                <TranslationDemo />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="fastapi">
            <TabsList className="mb-4">
              <TabsTrigger value="fastapi">FastAPI Implementation</TabsTrigger>
              <TabsTrigger value="export">Export Model for Deployment</TabsTrigger>
            </TabsList>
            <TabsContent value="fastapi">
              <pre className="code-block">{fastApiCode}</pre>
            </TabsContent>
            <TabsContent value="export">
              <pre className="code-block">{exportCode}</pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
