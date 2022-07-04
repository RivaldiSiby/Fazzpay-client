import axios from "axios";
const TransferDana = async (data, token) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/transaction/transfer`,
      data,
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

export default TransferDana;
