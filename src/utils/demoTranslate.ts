
// This is a mock translation service that simulates Hinglish translations
// In a real implementation, this would call your actual translation model API

const demoTranslations: Record<string, string> = {
  "How are you?": "Aap kaise ho?",
  "What is your name?": "Tumhara naam kya hai?",
  "I like to eat pizza": "Mujhe pizza khana pasand hai",
  "Can you help me with this?": "Kya aap mujhe isme help kar sakte ho?",
  "Where is the nearest coffee shop?": "Nearest coffee shop kahan hai?",
  "The weather is nice today": "Weather aaj bohot achha hai",
  "I need to go to the airport": "Mujhe airport jana hai",
  "This is a great project": "Yeh ek great project hai",
  "Good morning": "Good morning",
  "What time is it?": "Kya time ho gaya hai?",
  "I am learning new skills": "Mai new skills seekh raha hoon",
  "The movie was fantastic": "Movie fantastic thi",
  "Did you finish your homework?": "Kya tumne homework finish kar liya?",
  "Let's meet tomorrow": "Kal milte hain",
  "Have a good day": "Aap ka din shubh ho",
};

export const translateToHinglish = async (text: string): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Check if we have a pre-defined translation
  if (demoTranslations[text]) {
    return demoTranslations[text];
  }
  
  // If not in our basic dictionary, perform a simple algorithmic conversion
  // This is just for demo purposes and won't produce accurate Hinglish
  const hinglishify = (english: string): string => {
    // Replace common words with Hinglish versions
    let result = english
      .replace(/\b(I|i)\b/g, "Mai")
      .replace(/\b(you)\b/gi, "tum")
      .replace(/\b(is|are|am)\b/gi, "hai")
      .replace(/\b(the)\b/gi, "")
      .replace(/\b(to)\b/gi, "ko")
      .replace(/\b(and)\b/gi, "aur")
      .replace(/\b(want)\b/gi, "chahta")
      .replace(/\b(help)\b/gi, "madad")
      .replace(/\b(good)\b/gi, "achha")
      .replace(/\b(need)\b/gi, "zaroorat");
      
    return result + (Math.random() > 0.5 ? " hai" : "");
  };
  
  return hinglishify(text);
};
