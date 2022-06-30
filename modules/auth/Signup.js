import axios from "axios";
const Signup = async (payload) => {
  try {
    const result = await axios.post(
      `${process.env.URL}/auth/register`,
      payload
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export default Signup;
