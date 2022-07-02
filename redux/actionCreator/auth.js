export const successLogin = (auth, havePin, token) => {
  return {
    type: "SUCCESS_LOGIN",
    payload: { ...auth },
    pin: havePin,
    token: token,
  };
};
export const failLogin = () => {
  return {
    type: "FAIL_LOGIN",
  };
};
