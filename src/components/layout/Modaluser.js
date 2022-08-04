import { useRouter } from "next/router";
import { useState } from "react";
import Checkpin from "../../modules/auth/Checkpin";
import close from "../../../public/img/layout/x.png";
import { checkedPin } from "../../redux/actionCreator/pin";
import styles from "../../styles/auth.module.css";
const Modaluser = ({
  setLoading,
  dispatch,
  token,
  topup,
  modal,
  Image,
  setModal,
  transferHandler,
}) => {
  const router = useRouter();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState(false);

  const closeHandler = () => {
    setModal(false);
  };
  const pinHandler = async () => {
    try {
      const pin = `${input1}${input2}${input3}${input4}${input5}${input6}`;
      await Checkpin(pin, token);
      dispatch(checkedPin());
      setLoading(true);
      await transferHandler();
      setModal(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErr(error.response.data.msg);
    }
  };
  return (
    <>
      <section className="topup-main d-flex justify-content-center align-items-center ">
        <section className="box-topup">
          {modal === "topup" ? (
            <>
              <section className="d-flex justify-content-between">
                <h5>Topup</h5>
                <Image
                  onClick={closeHandler}
                  src={close}
                  className="oncursor"
                  layout={`fixed`}
                  alt="close"
                />
              </section>
              <p>Enter the amount of money, and click submit</p>
              <section className="box-input-topup d-flex align-items-center justify-content-center">
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </section>
              <section className="d-flex justify-content-end">
                <button
                  onClick={() => topup(amount)}
                  className="btn-modal-user"
                >
                  Submit
                </button>
              </section>
            </>
          ) : (
            <>
              <section className="d-flex justify-content-between">
                <h5>Enter PIN to Transfer</h5>
                <Image
                  onClick={closeHandler}
                  src={close}
                  className="oncursor"
                  layout={`fixed`}
                  alt="close"
                />
              </section>
              <p>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.{" "}
              </p>
              <section>
                <section className="d-flex justify-content-between">
                  <section
                    className={`${styles.boxPin} ${
                      input1.length > 0 ? styles.boxPinActive : ""
                    }`}
                  >
                    <input
                      type="password"
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
                      type="password"
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
                      type="password"
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
                      type="password"
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
                      type="password"
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
                      type="password"
                      value={input6}
                      maxLength="1"
                      onChange={(e) => setInput6(e.target.value)}
                    />
                  </section>
                </section>
              </section>
              {err !== false ? (
                <>
                  <h5 className={`${styles.errMsg} text-center w-100`}>
                    {err}
                  </h5>
                </>
              ) : (
                ""
              )}
              <section className="d-flex justify-content-end">
                <button
                  onClick={pinHandler}
                  className="btn-modal-user btn-modal-transfer"
                >
                  Continue
                </button>
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default Modaluser;
