import { failLogin } from "../redux/actionCreator/auth";

const cekLogin = (isLogin, dispatch = null, router) => {
  if (isLogin === false && dispatch !== null) {
    dispatch(failLogin());
    router.push("/login");
  }
  if (isLogin === true && dispatch === null) {
    router.push("/home");
  }
  return;
};

export default cekLogin;
