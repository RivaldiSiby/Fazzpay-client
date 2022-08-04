import axios from "axios";

const Login = async (payload) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/login`,
      payload
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export default Login;
