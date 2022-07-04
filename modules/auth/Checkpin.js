import axios from "axios";
const Checkpin = async (pin, token) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/user/pin?pin=${pin}`,
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

export default Checkpin;
