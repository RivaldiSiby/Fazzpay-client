import { failLogin } from "../redux/actionCreator/auth";

const cekLogin = (isLogin, dispatch, router) => {
  if (isLogin === false) {
    dispatch(failLogin());
    router.push("/login");
  }
  return;
};

export default cekLogin;
