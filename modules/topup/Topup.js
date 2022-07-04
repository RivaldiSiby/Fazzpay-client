import axios from "axios";
const Topup = async (token, amount) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/transaction/top-up`,
      { amount: amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default Topup;
