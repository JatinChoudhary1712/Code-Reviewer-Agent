// Ensure you have axios installed: npm install axios

import { useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

export default function GeminiAIApp() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const res = await axios.get('/ai/get-response', { 
        params: { prompt },
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse('Error: Could not fetch response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-gray-100 p-6">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800">Bot</motion.h1>
      
      <div className="flex space-x-4">
        <Input
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-96 border rounded-xl p-3"
        />
        <Button onClick={handleSubmit} disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl">
          {loading ? <Loader className="animate-spin" /> : 'Send'}
        </Button>
      </div>

      <Card className="w-full max-w-lg border rounded-xl shadow-lg">
        <CardContent className="p-4">
          <p className="text-lg text-gray-700 font-medium">AI Response:</p>
          <div className="mt-2 bg-gray-200 p-3 rounded-lg text-gray-800">
            {response || 'Your response will appear here...'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
