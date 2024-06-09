import OpenAI from "openai";
import { openAiKey } from "./constants";

const openAi = new OpenAI({
  apiKey: openAiKey,
  dangerouslyAllowBrowser: true,
});

export default openAi;
