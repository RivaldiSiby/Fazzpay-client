export const successLogin = (havePin, token) => {
  return {
    type: "SUCCESS_LOGIN",
    pin: havePin,
    token: token,
  };
};
export const failLogin = () => {
  return {
    type: "FAIL_LOGIN",
  };
};
