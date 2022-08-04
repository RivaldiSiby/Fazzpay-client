// img

import mailicon from "../../../public/img/authPage/vector/mail.png";
import lockicon from "../../../public/img/authPage/vector/lock.png";
import mailerr from "../../../public/img/authPage/vector/mailerr.png";
import lockerr from "../../../public/img/authPage/vector/lockerr.png";
import mailiconActive from "../../../public/img/authPage/vector/mailactive.png";
import lockiconActive from "../../../public/img/authPage/vector/lockactive.png";
import unshowicon from "../../../public/img/authPage/vector/unshow.png";
import showicon from "../../../public/img/authPage/vector/show.jpg";
// img
import { useEffect, useState } from "react";
import styles from "../../styles/auth.module.css";
import Image from "next/image";
import Leftauth from "../../components/auth/Leftauth";
import Link from "next/link";
import LoadingPage from "../Loading";
import LoginUser from "../../modules/auth/Login";
import { notifSuccess } from "../../helper/notif";
import Getuser from "../../modules/user/Getuser";
import { useSelector, useDispatch } from "react-redux";
import { successLogin } from "../../redux/actionCreator/auth";
import { addUser } from "../../redux/actionCreator/user";
import { useRouter } from "next/router";
import cekLogin from "../../helper/cekLogin";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    cekLogin(auth.isLogin, null, router);
  }, []);

  const loginHandler = async () => {
    try {
      setLoading(true);
      if (mail.length === 0 || password.length === 0) {
        setError("All fields must be required");
        setLoading(false);
        return;
      }
      const data = {
        email: mail,
        password: password,
      };
      const result = await LoginUser(data);
      if (result.status === 200) {
        const user = await Getuser(result.data.data.id, result.data.data.token);

        if (user.status === 200) {
          dispatch(
            successLogin(
              result.data.data.pin === null ? false : true,
              result.data.data.token
            )
          );
          dispatch(addUser(user.data.data));
          notifSuccess("Success Login");
          setLoading(false);
          result.data.data.pin === null
            ? router.push("/pin")
            : router.push("/home");
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
      setLoading(false);
    }
  };
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {loading === false ? (
        <>
          <main className={styles.authPage}>
            <div className="row">
              <section className="col-lg-6">
                <Leftauth style={styles} Image={Image} />
              </section>
              <section className="col-lg-6">
                <section className={styles.authRight}>
                  <h5 className={styles.authTitle}>
                    Start Accessing Banking Needs
                    <br /> With All Devices and All Platforms
                    <br />
                    With 30.000+ Users
                  </h5>
                  <p className={styles.authText}>
                    Transfering money is eassier than ever, you can access
                    FazzPay wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
                  </p>
                  <section>
                    <div className={`input-group mb-3 ${styles.configForm}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          mail.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } input-group-text`}
                        id="basic-addon3"
                      >
                        {error !== false ? (
                          <>
                            <Image
                              className={styles.iconForm}
                              src={mailerr}
                              alt="mail-icon"
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              className={styles.iconForm}
                              src={mail.length > 0 ? mailiconActive : mailicon}
                              alt="mail-icon"
                            />
                          </>
                        )}
                      </span>
                      <input
                        type="email"
                        className={`${styles.inputStyle} ${
                          mail.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } form-control`}
                        placeholder="Enter your e-mail"
                        aria-label="Enter your e-mail"
                        aria-describedby="basic-addon3"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </div>
                    <div className={`input-group mb-3 ${styles.forgotPass}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } input-group-text`}
                      >
                        {error !== false ? (
                          <>
                            <Image
                              className={styles.iconForm}
                              src={lockerr}
                              alt="password-icon"
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              className={styles.iconForm}
                              src={
                                password.length > 0 ? lockiconActive : lockicon
                              }
                              alt="password-icon"
                            />
                          </>
                        )}
                      </span>
                      <input
                        type={showPass === false ? "password" : "text"}
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } form-control`}
                        placeholder="Enter your password"
                        aria-label="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } input-group-text`}
                      >
                        <Image
                          className={`${styles.iconForm} oncursor`}
                          src={showPass === false ? unshowicon : showicon}
                          alt="unshow-icon"
                          onClick={() =>
                            showPass === false
                              ? setShowPass(true)
                              : setShowPass(false)
                          }
                        />
                      </span>
                    </div>
                    <section className="text-end pb-5 mb-5">
                      <Link href="/forgotpass">
                        <a className={styles.textForgot}>Forgot password?</a>
                      </Link>
                    </section>

                    {error !== false ? (
                      <>
                        <h5 className={`${styles.errMsg} text-center w-100`}>
                          {error}
                        </h5>
                      </>
                    ) : (
                      ""
                    )}
                    {mail.length > 0 && password.length > 0 ? (
                      <button
                        onClick={loginHandler}
                        className={`${styles.btnForm} w-100 ${styles.btnActive}`}
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        className={`${styles.btnForm} w-100 ${styles.btnDisable}`}
                      >
                        Login
                      </button>
                    )}

                    <p>
                      Don’t have an account? Let’s{" "}
                      <Link href="/register">
                        <a className="BlueColorText">Sign Up</a>
                      </Link>
                    </p>
                  </section>
                </section>
              </section>
            </div>
          </main>
        </>
      ) : (
        <>
          <LoadingPage />
        </>
      )}
    </div>
  );
};

export default Login;
