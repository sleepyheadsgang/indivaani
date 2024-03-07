import { toast } from "react-toastify";
import backend from "./base";

const transcribe = async (file: File, language: string): Promise<string> => {
  const userId = localStorage.getItem('userId') as string  | null

  if(!userId) {
    toast('No user id found, refresh the page!', {type: 'error'})
    throw new Error('User id not found')
  }

  const formdata = new FormData();

  formdata.append('file', file);
  formdata.append('lang_to', language);
  formdata.append('user_id', userId);

  const response  = await backend.post('translate-audio', formdata)
  const result = response.data;
  return result.text;
}
export default transcribe