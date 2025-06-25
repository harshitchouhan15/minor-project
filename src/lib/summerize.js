// app/actions/summarizeBlog.ts
'use server';

import { OpenAI } from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: (`Summarize this blog post:\n${content}`),
  });
//   console.log(response);

  return response.text
}

// const openai = new OpenAI({
//   baseURL: 'https://openrouter.ai/api/v1', // ✅ this is key
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     'HTTP-Referer': 'http://localhost:3000', // your app URL
//     'X-Title': 'Blog Summarizer',
//   },
// });

export async function summarizeBlog( prevState, formData) {

    const {desc:content} = Object.fromEntries(formData)



     return await main(content)

   


//   try {
//     const res = await openai.chat.completions.create({
//        model: 'mistral/mistral-7b-instruct',

//       messages: [
//         { role: 'system', content: 'You are a helpful assistant that summarizes blog posts.' },
//         { role: 'user', content: `Summarize this blog post:\n\n${content}` },
//       ],
//       temperature: 0.7,
//     });

//     return {summerizedText:  res.choices[0].message.content};
//   } catch (error) {
//     console.error('Summarization error:', error);
//     return {error:'Failed to summarize the blog.'};
//   }
}




const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function summarizeUisngGenAI(desc) {

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent(`Summarize this blog post:\n${desc}`);
  const response =  result.response;
  return response.text();
}