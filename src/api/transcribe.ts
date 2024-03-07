import backend from "./base";

const transcribe = async (file: File, language: string): Promise<string> => {

  const formdata = new FormData();

  formdata.append('file', file);
  formdata.append('lang_to', language);


  const response  = await backend.post('...', formdata)
  const result = response.data;
  return result.text
}
export default transcribe