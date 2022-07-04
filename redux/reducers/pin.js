const initialState = {
  checkedPin: false,
};

const pin = (prevState = initialState, action) => {
  // action
  switch (action.type) {
    case "CHECKED_PIN":
      return {
        checkedPin: action.pin,
      };
    case "UNCHECKED_PIN":
      return { checkedPin: false };
    default:
      return prevState;
  }
};

export default pin;
