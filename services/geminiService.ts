import { GoogleGenAI } from "@google/genai";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates an optimized Google Business Profile description based on user input.
 * Uses gemini-3-flash-preview for fast text generation.
 */
export const generateOptimizedDescription = async (
  businessName: string,
  segment: string,
  location: string
): Promise<string> => {
  try {
    const prompt = `
      Atue como um especialista em SEO Local e Google Meu Negócio.
      Escreva uma descrição comercial otimizada para o perfil do Google de uma empresa.
      
      Dados da empresa:
      - Nome: ${businessName}
      - Segmento/Nicho: ${segment}
      - Localização: ${location}
      
      Regras:
      1. A descrição deve ter entre 600 e 750 caracteres.
      2. Inclua palavras-chave relevantes para o nicho e a cidade.
      3. O tom deve ser profissional, convidativo e focado em converter clientes locais.
      4. Use formatação limpa (sem markdown complexo, apenas parágrafos).
      5. Retorne APENAS o texto da descrição, sem introduções ou conclusões.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "Não foi possível gerar a descrição no momento. Tente novamente.";
  } catch (error) {
    console.error("Error generating description:", error);
    throw new Error("Falha ao comunicar com a IA do Google.");
  }
};
