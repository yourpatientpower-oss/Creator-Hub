
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateContent = async (prompt: string, tone: string, length: string) => {
  const model = 'gemini-3-flash-preview';
  const systemInstruction = `You are a social media expert. Create highly engaging posts for social media. Tone: ${tone}. Length: ${length}.`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: { systemInstruction }
  });

  return response.text;
};

export const generateAlternativeHooks = async (content: string) => {
  const model = 'gemini-3-flash-preview';
  const response = await ai.models.generateContent({
    model,
    contents: `Generate 3 catchy alternative hooks for this content: "${content}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    return [];
  }
};

/**
 * Transforms content from one platform format to another using AI.
 */
export const repurposeContent = async (sourceContent: string, targetPlatform: string, sourcePlatform: string) => {
  const model = 'gemini-3-flash-preview';
  const systemInstruction = `You are a world-class social media strategist. 
  Your task is to take content originally written for ${sourcePlatform} and repurpose it for ${targetPlatform}.
  
  GUIDELINES:
  - Maintain the core value and message.
  - X (Twitter): Use threads if content is long, or punchy 280-char snippets. Focus on the 'hook'.
  - LinkedIn: Use professional but conversational formatting. Add line breaks for readability. Focus on storytelling/insights.
  - Instagram: Write an engaging caption with a strong CTA. Suggest emojis.
  - TikTok: Write a punchy script including a 3-second hook and a 'reason to watch' transition.
  
  Format the output as clean, ready-to-post text.`;

  const response = await ai.models.generateContent({
    model,
    contents: `Transform this content: "${sourceContent}"`,
    config: { systemInstruction }
  });

  return response.text;
};

export const generateImage = async (prompt: string, aspectRatio: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }]
    },
    config: {
      imageConfig: {
        aspectRatio: aspectRatio as any || "1:1"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
