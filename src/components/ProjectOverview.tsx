
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProjectOverview() {
  const tools = [
    { name: "Python", icon: <Code className="h-5 w-5" /> },
    { name: "TensorFlow/Keras", icon: <Brain className="h-5 w-5" /> },
    { name: "SentencePiece", icon: <Database className="h-5 w-5" /> },
    { name: "Google Colab", icon: <Rocket className="h-5 w-5" /> },
  ];

  return (
    <section id="overview" className="section-container">
      <h2 className="section-title">Project Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Environment Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block">
{`!pip install tensorflow wget
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import LSTM, Dense, Embedding`}
              </pre>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Bidirectional LSTM for context-aware encoding</li>
                <li>GloVe Embeddings (200D) for English text</li>
                <li>Teacher Forcing during training</li>
                <li>Beam Search implementation for decoding</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tools Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div 
                    key={tool.name} 
                    className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {tool.icon}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Metric</th>
                    <th className="py-2 px-4 text-left">Training</th>
                    <th className="py-2 px-4 text-left">Validation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">Accuracy</td>
                    <td className="py-2 px-4 font-medium text-primary">93.20%</td>
                    <td className="py-2 px-4 font-medium text-primary">92.80%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Loss</td>
                    <td className="py-2 px-4">0.3036</td>
                    <td className="py-2 px-4">0.3685</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-8 text-center">
                <Link to="/translator">
                  <Button size="lg">
                    Try the Translator
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
