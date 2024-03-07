import backend from "./base";

const translate = async (text: string, lang_to: string, userId: string): Promise<string> => {

  const formdata = new FormData();

  formdata.append('text', text);
  formdata.append('lang_to', lang_to);
  formdata.append('user_id', userId);


  const response  = await backend.post('translate', formdata)
  const result = response.data;
  return result.text
}
export default translate