import axios from "axios";

const Resetpass = async (data) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/auth/reset-password`,
      data
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export default Resetpass;
