import { GoogleGenAI, Modality } from "@google/genai";

export const generateSpeech = async (text: string, voiceName: string, apiKey: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API key is missing. Please enter your API key.");
  }
  if (!text.trim()) {
    throw new Error("Input text cannot be empty.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName },
          },
        },
      },
    });

    const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!audioData) {
      throw new Error("No audio data received from the API. The response may have been blocked. Please check your API key and try again.");
    }
    
    return audioData;
  } catch (error) {
    console.error("Error generating speech:", error);
    if (error instanceof Error) {
        if (error.message.toLowerCase().includes('api key') || error.message.toLowerCase().includes('permission denied')) {
          throw new Error("Your API key is invalid or permissions are not set up correctly. Please check it and try again.");
        }
        throw new Error(error.message || "An unknown error occurred with the Gemini API.");
    }
    throw new Error("An unknown error occurred with the Gemini API.");
  }
};