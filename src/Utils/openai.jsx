import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey:process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
  

});
console.log("OPENAI_KEY:", OPENAI_KEY);
export default openai;