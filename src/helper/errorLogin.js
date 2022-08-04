import { failLogin } from "../redux/actionCreator/auth";

const errorLogin = (status, dispatch, router) => {
  if (status === 401 || status === 403) {
    dispatch(failLogin());
    router.push("/login");
  }
  if (status === 404) {
    router.replace("/home");
  }
  return;
};

export default errorLogin;
