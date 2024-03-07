import backend from "./base";

const file = async () => {
  const response  = await backend.post('translate-file')
  const result = response.data;
  return result.text;
}
export default file