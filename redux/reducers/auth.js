const initialState = {
  isLogin: false,
  havePin: false,
  token: null,
};

const auth = (prevState = initialState, action) => {
  // action
  switch (action.type) {
    case "SUCCESS_LOGIN":
      return {
        isLogin: true,
        havePin: action.pin,
        token: action.token,
      };
    case "FAIL_LOGIN":
      return { isLogin: false, havePin: false, token: null, user: [] };
    default:
      return prevState;
  }
};

export default auth;
