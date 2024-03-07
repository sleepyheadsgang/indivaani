import backend from "./base";

type TranslationResponse = {
  original_text: string;
  translated_text: string;
  from_lang: string;
  to_lang: string;
  datetime: string;
}

const history = async (): Promise<TranslationResponse[]> => {

  const userId = localStorage.getItem('userId');

  if(!userId) {
    throw new Error('No guest id was found!')
  }
  const formdata = new FormData();

  formdata.append('user_id', userId);

  const response  = await backend.post('translate-history', formdata)
  const result = response.data;
  return result.translations
}
export default history