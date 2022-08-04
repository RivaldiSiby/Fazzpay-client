import axios from "axios";

const Logout = async (token) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export default Logout;
