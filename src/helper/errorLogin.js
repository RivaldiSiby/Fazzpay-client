import { failLogin } from "../redux/actionCreator/auth";

const errorLogin = (status, dispatch, router) => {
  if (status === 401 || status === 403) {
    dispatch(failLogin());
    router.push("/login");
  }
  return;
};

export default errorLogin;
