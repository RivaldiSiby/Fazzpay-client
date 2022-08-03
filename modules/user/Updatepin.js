import axios from "axios";
const Updatepin = async (pin, token, id) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/user/pin/${id}`,
      { pin: pin },
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

export default Updatepin;
