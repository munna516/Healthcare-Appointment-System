"use client";

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Send, Loader2, Bot } from "lucide-react";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { Avatar } from "@components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const MODEL_NAME = "gemini-2.0-flash-lite";

export default function FindSolution() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const genAIRef = useRef(null);
  const modelRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (API_KEY && !genAIRef.current) {
      genAIRef.current = new GoogleGenerativeAI(API_KEY);
      modelRef.current = genAIRef.current.getGenerativeModel({ model: MODEL_NAME });
    }

    scrollToBottom();
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Hello! I'm your Health-Care AI assistant! Please describe your symptoms or ask any health-related questions, and I'll do my best to provide information and guidance. Remember that I'm not a replacement for professional medical advice."
        }
      ]);
    }
  }, [messages]);

  async function generateAIResponse(userPrompt) {
    try {
      if (!genAIRef.current || !modelRef.current) {
        const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!API_KEY) {
          throw new Error("API key not configured");
        }
        genAIRef.current = new GoogleGenerativeAI(API_KEY);
        modelRef.current = genAIRef.current.getGenerativeModel({ model: MODEL_NAME });
      }

      const healthcareContext = `
      You are a healthcare assistant that ONLY answers questions directly related to medical help, healthcare, symptoms, wellness, and health conditions.
      
      Rules:
      1. If a user asks for information about visiting a medical facility or seeking in-person medical help, OR if their question implies a need for immediate medical attention or a physical examination, respond with: "For immediate medical assistance or to schedule a visit, please contact HealthPoint-Center or call their helpline."
      
      2. If a user asks a question that is NOT related to medical help, healthcare, symptoms, wellness, or health conditions, respond with: "I can only assist with medical and healthcare-related inquiries."
      
      3. For valid healthcare questions, provide helpful information but do NOT provide diagnoses or specific treatment plans.
      
      4. End valid healthcare responses with: "Please consult with a healthcare professional for personalized medical advice."

      5. If user say hey, hello, yo, or any other greetings response it formally. 
      
      Now for the user's question: ${userPrompt}`;

      const conversationHistory = messages
        // .filter((msg, index) => index > 0) // Skip the welcome message
        .slice(-4) // Only use the most recent messages for context
        .map(msg => ({ role: msg.role, parts: [{ text: msg.content }] }));

      const result = await modelRef.current.generateContent({
        contents: [
          ...conversationHistory,
          { role: "user", parts: [{ text: healthcareContext }] }
        ],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.4,
        }
      });
      
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating content:", error);
      return `Sorry, I encountered an error: ${error.message}. Please try again later.`;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await generateAIResponse(userMessage);

    setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col min-h-screen w-[90%] max-w-4xl mx-auto pt-28 pb-16">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          HealthPoint AI Help
        </h1>
        <p className="text-md text-gray-600 max-w-2xl mx-auto mt-2">
          Describe your physical symptoms and our AI assistant will offer guidance and information!
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 mb-4 rounded-lg bg-gray-50 border">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card className={`max-w-[80%] ${message.role === "user" ? "bg-blue-50 border-blue-100" : "bg-white"}`}>
              <CardContent className="p-4 flex">
                {message.role === "assistant" && (
                  <div className="mr-3 flex-shrink-0">
                    <Avatar className="h-8 w-8 bg-blue-100">
                      <Bot size={16} className="text-blue-600" />
                    </Avatar>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{message.content}</div>
              </CardContent>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <Card className="max-w-[80%] bg-white">
              <CardContent className="p-4 flex items-center">
                <div className="mr-3 flex-shrink-0">
                  <Avatar className="h-8 w-8 bg-blue-100 mx-auto items-center">
                    <Bot size={16} className="text-blue-600 mx-auto items-center" />
                  </Avatar>
                </div>
                <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
              </CardContent>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-end gap-2 mb-8 px-4">
        <div className="relative flex-1">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a health-related question..."
            className="resize-none pr-12 min-h-[60px] max-h-[200px] py-3"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-2 bottom-2"
            disabled={isLoading || !input.trim()}
          >
            <Send size={22} className={isLoading ? "text-gray-400" : "text-white"} />
          </Button>
        </div>
      </form>
    </div>
  );
}