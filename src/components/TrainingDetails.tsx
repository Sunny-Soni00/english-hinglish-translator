
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
  const trainingData = [
    { epoch: 1, trainAcc: 0.4, valAcc: 0.38, trainLoss: 2.8, valLoss: 2.9 },
    { epoch: 2, trainAcc: 0.58, valAcc: 0.55, trainLoss: 1.9, valLoss: 2.1 },
    { epoch: 3, trainAcc: 0.72, valAcc: 0.67, trainLoss: 1.3, valLoss: 1.6 },
    { epoch: 4, trainAcc: 0.81, valAcc: 0.75, trainLoss: 0.9, valLoss: 1.2 },
    { epoch: 5, trainAcc: 0.86, valAcc: 0.8, trainLoss: 0.7, valLoss: 0.98 },
    { epoch: 6, trainAcc: 0.9, valAcc: 0.83, trainLoss: 0.5, valLoss: 0.85 },
    { epoch: 7, trainAcc: 0.92, valAcc: 0.84, trainLoss: 0.42, valLoss: 0.81 },
    { epoch: 8, trainAcc: 0.94, valAcc: 0.86, trainLoss: 0.33, valLoss: 0.7 },
    { epoch: 9, trainAcc: 0.95, valAcc: 0.88, trainLoss: 0.27, valLoss: 0.61 },
    { epoch: 10, trainAcc: 0.96, valAcc: 0.89, trainLoss: 0.22, valLoss: 0.57 },
    { epoch: 11, trainAcc: 0.96, valAcc: 0.9, trainLoss: 0.2, valLoss: 0.55 },
    { epoch: 12, trainAcc: 0.97, valAcc: 0.91, trainLoss: 0.17, valLoss: 0.5 },
    { epoch: 13, trainAcc: 0.97, valAcc: 0.92, trainLoss: 0.15, valLoss: 0.48 },
    { epoch: 14, trainAcc: 0.98, valAcc: 0.93, trainLoss: 0.13, valLoss: 0.45 },
    { epoch: 15, trainAcc: 0.98, valAcc: 0.94, trainLoss: 0.12, valLoss: 0.42 },
    { epoch: 16, trainAcc: 0.98, valAcc: 0.95, trainLoss: 0.11, valLoss: 0.4 },
    { epoch: 17, trainAcc: 0.99, valAcc: 0.96, trainLoss: 0.09, valLoss: 0.37 },
    { epoch: 18, trainAcc: 0.99, valAcc: 0.96, trainLoss: 0.08, valLoss: 0.35 },
    { epoch: 19, trainAcc: 0.99, valAcc: 0.97, trainLoss: 0.08, valLoss: 0.34 },
    { epoch: 20, trainAcc: 0.99, valAcc: 0.977, trainLoss: 0.07, valLoss: 0.33 },
  ];

  const trainingParams = [
    { name: "Optimizer", value: "Adam" },
    { name: "Learning Rate", value: "0.001" },
    { name: "Loss Function", value: "Sparse categorical crossentropy" },
    { name: "Batch Size", value: "64" },
    { name: "Epochs", value: "20" },
    { name: "Early Stopping Patience", value: "5" },
    { name: "Checkpoint Metric", value: "validation_accuracy" },
  ];

  const trainingCode = `# Define the training loop with early stopping and model checkpointing
early_stopping = EarlyStopping(
    monitor='val_accuracy', 
    patience=5, 
    restore_best_weights=True
)

checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    verbose=1
)

# Compile the model
model.compile(
    optimizer=Adam(learning_rate=0.001),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
history = model.fit(
    [encoder_input_train, decoder_input_train],
    decoder_output_train,
    batch_size=64,
    epochs=20,
    validation_data=([encoder_input_val, decoder_input_val], decoder_output_val),
    callbacks=[early_stopping, checkpoint]
)`;

  return (
    <section id="training" className="section-container bg-muted/30">
      <h2 className="section-title">Training Details</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Training Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trainingData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="trainAcc"
                    name="Training Accuracy"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="valAcc"
                    name="Validation Accuracy"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="h-80 mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trainingData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="trainLoss"
                    name="Training Loss"
                    stroke="#ff7300"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="valLoss"
                    name="Validation Loss"
                    stroke="#ff0000"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Training Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {trainingParams.map((param, index) => (
                  <li key={index} className="border-b pb-2">
                    <div className="text-sm text-muted-foreground">{param.name}</div>
                    <div className="font-medium">{param.value}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Results Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Final Training Accuracy</div>
                  <div className="text-2xl font-bold text-primary">99%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Final Validation Accuracy</div>
                  <div className="text-2xl font-bold text-primary">97.7%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Final Training Loss</div>
                  <div className="text-xl font-bold">0.07</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Final Validation Loss</div>
                  <div className="text-xl font-bold">0.33</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Training Code</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="code-block">{trainingCode}</pre>
        </CardContent>
      </Card>
    </section>
  );
}
