import { useState } from "react";
import errorLogin from "../../helper/errorLogin";
import Updateprofile from "../../modules/profile/Updateprofile";
import Getuser from "../../modules/user/Getuser";
import { addUser } from "../../redux/actionCreator/user";
import Image from "next/image";
import Updatepassword from "../../modules/profile/Updatepassword";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { notifSuccess } from "../../helper/notif";
import Checkpin from "../../modules/auth/Checkpin";
import Updatepin from "../../modules/user/Updatepin";

const Pin = ({ styles, boxpage, user, loading, auth, dispatch }) => {
  const router = useRouter();
  const [pinCheck, setPinCheck] = useState(false);
  const [error, setError] = useState(false);
  const [Msg, setMsg] = useState("");
  const [Load, setLoad] = useState(false);
  // pin
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const pinHandler = async () => {
    try {
      setLoad(true);
      const pin = `${input1}${input2}${input3}${input4}${input5}${input6}`;
      await Checkpin(pin, auth.token);
      setPinCheck(true);
      setInput1("");
      setInput2("");
      setInput3("");
      setInput4("");
      setInput5("");
      setInput6("");
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
      setError(true);
      setMsg(error.response.data.msg);
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }
    }
  };
  const updatePinHandler = async () => {
    try {
      setLoad(true);
      const pin = `${input1}${input2}${input3}${input4}${input5}${input6}`;
      console.log(pin);
      await Updatepin(pin, auth.token, user.id);
      setPinCheck(true);
      setInput1("");
      setInput2("");
      setInput3("");
      setInput4("");
      setInput5("");
      setInput6("");
      loading(true);
      await notifSuccess("Pin has been change");
      setLoad(false);
      boxpage("main");
      loading(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
      setError(true);
      setMsg(error.response.data.msg);
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }
    }
  };

  return (
    <div>
      <section className={`${styles.boxWrap}`}>
        <h5>Change PIN</h5>

        <p className={styles.textProfile}>
          {pinCheck === false
            ? "Enter your current 6 digits Fazzpay PIN below to continue to the next steps."
            : "Type your new 6 digits security PIN to use in Fazzpay."}
        </p>
        <>
          <section>
            <section className={`${styles.boxWrapPin} mx-auto`}>
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
              {Msg !== "" ? (
                <>
                  <h5 className={`${styles.errMsg} text-center w-100`}>
                    {Msg}
                  </h5>
                </>
              ) : (
                ""
              )}
              <section className="d-flex ">
                {input1.length > 0 &&
                input2.length > 0 &&
                input3.length > 0 &&
                input4.length > 0 &&
                input5.length > 0 &&
                input6.length &&
                Load === false ? (
                  <button
                    onClick={() =>
                      pinCheck === true ? updatePinHandler() : pinHandler()
                    }
                    className={`${styles.btnForm} ${styles.btnActive} w-100`}
                  >
                    {pinCheck === true ? "Change PIN" : "Continue"}
                  </button>
                ) : (
                  <button
                    className={`${styles.btnForm} ${styles.btnDisable} w-100`}
                  >
                    {Load === true
                      ? "Loading"
                      : pinCheck === true
                      ? "Change PIN"
                      : "Continue"}
                  </button>
                )}
              </section>
            </section>
          </section>
        </>
      </section>
    </div>
  );
};

export default Pin;
