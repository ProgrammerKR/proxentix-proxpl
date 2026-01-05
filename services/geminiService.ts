import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROXPL_SYSTEM_PROMPT } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize the client securely
const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      // We return null and handle it in the UI to show a nice error or fallback
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateProXPLContent = async (
  prompt: string
): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "Error: API Key not configured. Please check your environment settings.";
  }

  try {
    const response: GenerateContentResponse = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: PROXPL_SYSTEM_PROMPT,
        temperature: 0.2, // Low temperature for consistent code generation
      },
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `// Error generating ProXPL code.\n// Details: ${error instanceof Error ? error.message : "Unknown error"}`;
  }
};