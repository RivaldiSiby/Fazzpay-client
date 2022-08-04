import axios from "axios";
const Signup = async (payload) => {
  const urlAPI = process.env.NEXT_PUBLIC_URL;
  console.log(urlAPI);
  try {
    const result = await axios.post(`${urlAPI}/auth/register`, payload);
    return result;
  } catch (error) {
    throw error;
  }
};

export default Signup;
