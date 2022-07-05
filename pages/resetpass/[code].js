// img

import lockicon from "../../public/img/authPage/vector/lock.png";
import lockerr from "../../public/img/authPage/vector/lockerr.png";
import lockiconActive from "../../public/img/authPage/vector/lockactive.png";
import unshowicon from "../../public/img/authPage/vector/unshow.png";
import showicon from "../../public/img/authPage/vector/show.jpg";
// img
import { useEffect, useState } from "react";
import styles from "../../styles/auth.module.css";
import Image from "next/image";
import Leftauth from "../../components/auth/Leftauth";
import Link from "next/link";
import LoadingPage from "../Loading";
import LoginUser from "../../modules/auth/Login";
import { notifSuccess } from "../../helper/notif";
import ResetPass from "../../modules/auth/Resetpass";
import { useSelector, useDispatch } from "react-redux";
import { successLogin } from "../../redux/actionCreator/auth";
import { useRouter } from "next/router";
import Head from "next/head";

const Resetpass = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const resetHandler = async () => {
    try {
      setLoading(true);
      if (password !== cpassword) {
        setError("new password and confirm password must match");
        setLoading(false);
        return;
      }
      const data = {
        keysChangePassword: router.query.code,
        newPassword: password,
        confirmPassword: cpassword,
      };
      const result = await ResetPass(data);
      console.log(result.status);
      if (result.status === 200) {
        notifSuccess("Password has been changed successfully");
        setLoading(false);
        router.push("/login");
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
        <title>Reset Password</title>
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
                    Did You Forgot Your Password?
                    <br />
                    Don’t Worry, You Can Reset Your
                    <br />
                    Password In a Minutes.
                  </h5>
                  <p className={styles.authText}>
                    Now you can create a new password for your Zwallet account.
                    Type your password twice so we can confirm your new
                    passsword.
                  </p>
                  <section>
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
                        type={showPass1 === false ? "password" : "text"}
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } form-control`}
                        placeholder="Create new password"
                        aria-label="Create new password"
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
                          src={showPass1 === false ? unshowicon : showicon}
                          alt="unshow-icon"
                          onClick={() =>
                            showPass1 === false
                              ? setShowPass1(true)
                              : setShowPass1(false)
                          }
                        />
                      </span>
                    </div>

                    <div className={`input-group mb-3 ${styles.configForm}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          cpassword.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } input-group-text`}
                      >
                        {error !== false ? (
                          <>
                            <Image
                              className={styles.iconForm}
                              src={lockerr}
                              alt="cpassword-icon"
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              className={styles.iconForm}
                              src={
                                cpassword.length > 0 ? lockiconActive : lockicon
                              }
                              alt="cpassword-icon"
                            />
                          </>
                        )}
                      </span>
                      <input
                        type={showPass2 === false ? "password" : "text"}
                        className={`${styles.inputStyle} ${
                          cpassword.length > 0 ? styles.inputStyleActive : ""
                        } ${
                          error !== false ? styles.inputStyleError : ""
                        } form-control`}
                        placeholder="Confirm new password"
                        aria-label="Confirm new password"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
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
                          src={showPass2 === false ? unshowicon : showicon}
                          alt="unshow-icon"
                          onClick={() =>
                            showPass2 === false
                              ? setShowPass2(true)
                              : setShowPass2(false)
                          }
                        />
                      </span>
                    </div>

                    {error !== false ? (
                      <>
                        <h5 className={`${styles.errMsg} text-center w-100`}>
                          {error}
                        </h5>
                      </>
                    ) : (
                      ""
                    )}
                    {cpassword.length > 0 && password.length > 0 ? (
                      <button
                        onClick={resetHandler}
                        className={`${styles.btnForm} w-100 ${styles.btnActive}`}
                      >
                        Reset Password
                      </button>
                    ) : (
                      <button
                        className={`${styles.btnForm} w-100 ${styles.btnDisable}`}
                      >
                        Reset Password
                      </button>
                    )}
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

export default Resetpass;
