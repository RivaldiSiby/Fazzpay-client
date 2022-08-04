// img
import iconSuccess from "../../../public/img/authPage/vector/success.png";
// img

import { useEffect, useState } from "react";
import styles from "../../styles/auth.module.css";
import Image from "next/image";
import Leftauth from "../../components/auth/Leftauth";
import { useRouter } from "next/router";
import LoadingPage from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import CreatePin from "../../modules/auth/CreatePin";
import { successLogin } from "../../redux/actionCreator/auth";
import cekLogin from "../../helper/cekLogin";
import Head from "next/head";

const Pin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pincreated, setPincreated] = useState(false);

  useEffect(() => {
    cekLogin(auth.isLogin, dispatch, router);
    if (auth.havePin === true) {
      router.push("/home");
    }
  }, []);

  const pinHandler = async () => {
    try {
      setLoading(true);
      const checkInput1 = parseInt(input1) + 1 >= 0;
      const checkInput2 = parseInt(input2) + 1 >= 0;
      const checkInput3 = parseInt(input3) + 1 >= 0;
      const checkInput4 = parseInt(input4) + 1 >= 0;
      const checkInput5 = parseInt(input5) + 1 >= 0;
      const checkInput6 = parseInt(input6) + 1 >= 0;
      if (
        checkInput1 === false ||
        checkInput2 === false ||
        checkInput3 === false ||
        checkInput4 === false ||
        checkInput5 === false ||
        checkInput6 === false
      ) {
        setError("All fields must be number");
        setLoading(false);
        return;
      }
      const data = `${input1}${input2}${input3}${input4}${input5}${input6}`;

      await CreatePin(data, auth);
      setPincreated(true);
      dispatch(successLogin(auth.user, true, auth.token));
      setLoading(false);
      return;
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Pin</title>
      </Head>
      {loading === false ? (
        <>
          <main className={styles.authPage}>
            {pincreated === false ? (
              <div className="row">
                <section className="col-lg-6">
                  <Leftauth style={styles} Image={Image} />
                </section>
                <section className="col-lg-6">
                  <section className={styles.authRight}>
                    <h5 className={styles.authTitle}>
                      Secure Your Account, Your Wallet,
                      <br />
                      and Your Data With 6 Digits PIN
                      <br />
                      That You Created Yourself.
                    </h5>
                    <p className={styles.authText}>
                      Create 6 digits pin to secure all your money and your data
                      in FazzPay app. Keep it secret and don’t tell anyone about
                      your FazzPay account password and the PIN.
                    </p>
                    <section>
                      <section className="d-flex justify-content-between">
                        <section
                          className={`${styles.boxPin} ${
                            input1.length > 0 ? styles.boxPinActive : ""
                          }`}
                        >
                          <input
                            type="text"
                            value={input1}
                            maxLength="1"
                            onChange={(e) => setInput1(e.target.value)}
                          />
                        </section>
                        <section
                          className={`${styles.boxPin} ${
                            input2.length > 0 ? styles.boxPinActive : ""
                          }`}
                        >
                          <input
                            type="text"
                            value={input2}
                            maxLength="1"
                            onChange={(e) => setInput2(e.target.value)}
                          />
                        </section>
                        <section
                          className={`${styles.boxPin} ${
                            input3.length > 0 ? styles.boxPinActive : ""
                          }`}
                        >
                          <input
                            type="text"
                            value={input3}
                            maxLength="1"
                            onChange={(e) => setInput3(e.target.value)}
                          />
                        </section>
                        <section
                          className={`${styles.boxPin} ${
                            input4.length > 0 ? styles.boxPinActive : ""
                          }`}
                        >
                          <input
                            type="text"
                            value={input4}
                            maxLength="1"
                            onChange={(e) => setInput4(e.target.value)}
                          />
                        </section>
                        <section
                          className={`${styles.boxPin} ${
                            input5.length > 0 ? styles.boxPinActive : ""
                          }`}
                        >
                          <input
                            type="text"
                            value={input5}
                            maxLength="1"
                            onChange={(e) => setInput5(e.target.value)}
                          />
                        </section>
                        <section
                          className={`${styles.boxPin} ${
                            input6.length > 0 ? styles.boxPinActive : ""
                          }`}
                        >
                          <input
                            type="text"
                            value={input6}
                            maxLength="1"
                            onChange={(e) => setInput6(e.target.value)}
                          />
                        </section>
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
                      {input1.length > 0 &&
                      input2.length > 0 &&
                      input3.length > 0 &&
                      input4.length > 0 &&
                      input5.length > 0 &&
                      input6.length > 0 ? (
                        <button
                          onClick={pinHandler}
                          className={`${styles.btnForm} w-100 ${styles.btnActive}`}
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          className={`${styles.btnForm} w-100 ${styles.btnDisable}`}
                        >
                          Confirm
                        </button>
                      )}
                    </section>
                  </section>
                </section>
              </div>
            ) : (
              <div className="row">
                <section className="col-lg-6">
                  <Leftauth style={styles} Image={Image} />
                </section>
                <section className="col-lg-6">
                  <section className={styles.authRight}>
                    <Image src={iconSuccess} alt="icon-success" />
                    <h5 className={styles.authTitle}>
                      Your PIN Was Successfully Created
                    </h5>
                    <p className={styles.authText}>
                      Your PIN was successfully created and you can now access
                      all the features in FazzPay.
                    </p>
                    <section>
                      <button
                        onClick={() => router.push("/home")}
                        className={`${styles.btnForm} w-100 ${styles.btnActive}`}
                      >
                        Go To Dashboard
                      </button>
                    </section>
                  </section>
                </section>
              </div>
            )}
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

export default Pin;
