export const checkedPin = () => {
  return {
    type: "CHECKED_PIN",
    pin: true,
  };
};
export const uncheckedPin = () => {
  return {
    type: "UNCHECKED_PIN",
  };
};
