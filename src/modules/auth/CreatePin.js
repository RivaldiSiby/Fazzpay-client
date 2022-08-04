import axios from "axios";

const CreatePin = async (data, auth) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/user/pin/${auth.user.id}`,
      { pin: data},
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default CreatePin;
