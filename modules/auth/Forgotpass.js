import axios from "axios";

const Forgotpass = async (email) => {
  try {
    const data = {
      email: email,
      linkDirect: `${process.env.NEXT_PUBLIC_APP}/resetpass`,
    };
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/forgot-password`,
      data
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export default Forgotpass;
