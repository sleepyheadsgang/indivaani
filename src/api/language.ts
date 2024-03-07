import backend from "./base";

const language = async () => {
  const response  = await backend.get('languages')
  const result = response.data;
  return result;
}
export default language