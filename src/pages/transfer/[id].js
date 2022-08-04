// img
import edit from "../../../public/img/transfer/edit.png";
import tsuccess from "../../../public/img/transfer/tsuccess.png";
import iconUser from "../../../public/img/layout/iconuser.jpg";
// img

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import cekLogin from "../../helper/cekLogin";
import styles from "../../styles/transfer.module.css";
import Menubar from "../../components/layout/Menubar";
import LoadingPage from "../Loading";
import errorLogin from "../../helper/errorLogin";
import Modaluser from "../../components/layout/Modaluser";
import Topup from "../../modules/topup/Topup";
import { notifSuccess } from "../../helper/notif";
import Getuser from "../../modules/user/Getuser";
import Swal from "sweetalert2";
import TransferDana from "../../modules/transfer/Transfer";
import Head from "next/head";
import { addUser } from "../../redux/actionCreator/user";
import Export from "../../modules/transfer/export";

const Transfer = () => {
  const router = useRouter();
  const pin = useSelector((state) => state.pin);
  const auth = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [datasearch, setDatasearch] = useState(false);
  const [modaluser1, setModaluser1] = useState(false);
  const [modaluser2, setModaluser2] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");
  const [user, setUser] = useState(false);
  const [mydata, setMydata] = useState(false);
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [progress, setProgress] = useState(false);
  const [Transaction, setTransaction] = useState(false);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    setLoading(true);
    setMydata(userData);
    cekLogin(auth.isLogin, dispatch, router);
    const getUser = async () => {
      try {
        const userData = await Getuser(router.query.id, auth.token);
        if (userData.status === 200) {
          setLoading(false);
          setUser(userData.data.data);
        }
      } catch (error) {
        if (error.response.data.status !== undefined) {
          errorLogin(error.response.data.status, dispatch, router);

          setLoading(false);
        }

        setLoading(false);
      }
    };
    getUser();
    setLoading(false);
  }, []);

  const transferHandler = async () => {
    try {
      setLoading(true);
      const data = {
        receiverId: router.query.id,
        amount: amount,
        notes: note,
      };
      const result = await TransferDana(data, auth.token);
      console.log(result);
      setSuccess(true);
      let newData = { ...mydata };
      newData.balance = result.data.data.balance;
      setTransaction(result.data.data.id);
      dispatch(addUser(newData));
      setLoading(false);
    } catch (error) {
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }
      setFail(true);
      setLoading(false);
    }
  };
  const exportHandler = async () => {
    try {
      const result = await Export(Transaction, auth.token);
      console.log(result);
      window.open(result.data.data.url);
    } catch (error) {
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }
      setFail(true);
      setLoading(false);
    }
  };

  const topupHandler = async (amount) => {
    try {
      setLoading(true);
      const result = await Topup(auth.token, amount);
      if (result.status === 200) {
        router.push(result.data.data.redirectUrl);
        notifSuccess("Please pay topup");
        setModaluser2(false);
        setLoading(false);
      }
    } catch (error) {
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }

      setLoading(false);
    }
  };
  return (
    <div>
      <Head>
        <title>Transfer</title>
      </Head>
      {loading === false && user !== false && mydata !== false ? (
        <>
          {modaluser1 === true ? (
            <>
              <Modaluser
                setLoading={setLoading}
                dispatch={dispatch}
                token={auth.token}
                transferHandler={transferHandler}
                modal="transfer"
                setModal={setModaluser1}
                Image={Image}
              />
            </>
          ) : (
            ""
          )}
          {modaluser2 === true ? (
            <>
              <Modaluser
                dispatch={dispatch}
                token={auth.token}
                topup={topupHandler}
                modal="topup"
                setModal={setModaluser2}
                Image={Image}
              />
            </>
          ) : (
            ""
          )}
          <Navbar user={mydata} />
          <main className={styles.userHome}>
            <section className="container h-100 d-flex align-items-center">
              <section className={`${styles.menuBar} mt-5`}>
                <Menubar
                  setLoading={setLoading}
                  dispatch={dispatch}
                  setModal2={setModaluser2}
                  setModal1={setModaluser1}
                  page={`${modaluser2 === true ? "menu3" : ""}${
                    modaluser1 === true ? "menu2" : ""
                  }${
                    modaluser2 === false && modaluser1 === false ? "menu2" : ""
                  }`}
                  styles={styles}
                  Image={Image}
                />
              </section>
              {success !== false || fail !== false ? (
                <>
                  <section className={`${styles.mainBox} mt-5`}>
                    <section className="d-flex justify-content-center">
                      <Image
                        className="img-navbar-user"
                        src={tsuccess}
                        alt="user-icon"
                        layout={`fixed`}
                        width={"70px"}
                        height={"70px"}
                      />
                    </section>
                    <h3>Transfer Success</h3>
                    <section className={styles.detailTransfer}>
                      <p>Amount</p>
                      <h4>Rp {amount}</h4>
                    </section>
                    <section className={styles.detailTransfer}>
                      <p>Balance Left</p>
                      <h4>Rp {mydata.balance - parseInt(amount)}</h4>
                    </section>
                    <section className={styles.detailTransfer}>
                      <p>Date & Time</p>
                      <h4>{`${month[
                        new Date().getMonth()
                      ].toUpperCase()} ${new Date().getDate()}, ${new Date().getFullYear()} - ${new Date().getHours()}.${new Date().getMinutes()}`}</h4>
                    </section>
                    <section className={styles.detailTransfer}>
                      <p>Notes</p>
                      <h4>{note}</h4>
                    </section>
                    <h5 className="pt-5">Transfer to</h5>
                    <section className="w-100">
                      <section className={`${styles.listHistory} row `}>
                        <section className={`col-sm-7 d-flex`}>
                          <section className={styles.imgBoxHistory}>
                            {user.image === null ? (
                              <Image
                                className="img-navbar-user"
                                src={iconUser}
                                alt="user-icon"
                                layout={`intrinsic`}
                                width={"70px"}
                                height={"70px"}
                              />
                            ) : (
                              <Image
                                src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${user.image}`}
                                alt="user-icon"
                                layout={`intrinsic`}
                                width={"70px"}
                                height={"70px"}
                              />
                            )}
                          </section>

                          <section className={styles.historyUserInfo}>
                            <h5>{user.firstName + " " + user.lastName}</h5>
                            <p>
                              {user.noTelp === null
                                ? "+62"
                                : user.noTelp.slice(1)}
                            </p>
                          </section>
                        </section>
                      </section>
                    </section>
                    <section className="d-flex justify-content-end w-100">
                      <section
                        onClick={() => exportHandler()}
                        className={`${styles.btnDownload} d-flex justify-content-center align-items-center`}
                      >
                        Download PDF
                      </section>
                      <button onClick={() => router.push("/home")}>
                        Back to Home
                      </button>
                    </section>
                  </section>
                </>
              ) : (
                <>
                  <section className={`${styles.mainBox}`}>
                    <h5>
                      {progress === true ? "Transfer To" : "Transfer Money"}
                    </h5>

                    <section className="w-100">
                      <section className={`${styles.listHistory} row `}>
                        <section className={`col-sm-7 d-flex`}>
                          <section className={styles.imgBoxHistory}>
                            {user.image === null ? (
                              <Image
                                className="img-navbar-user"
                                src={iconUser}
                                alt="user-icon"
                                layout={`intrinsic`}
                                width={"70px"}
                                height={"70px"}
                              />
                            ) : (
                              <Image
                                src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${user.image}`}
                                alt="user-icon"
                                layout={`intrinsic`}
                                width={"70px"}
                                height={"70px"}
                              />
                            )}
                          </section>

                          <section className={styles.historyUserInfo}>
                            <h5>{user.firstName + " " + user.lastName}</h5>
                            <p>
                              {user.noTelp === null
                                ? "+62"
                                : user.noTelp.slice(1)}
                            </p>
                          </section>
                        </section>
                      </section>
                    </section>
                    {progress === false ? (
                      <>
                        <p>
                          Type the amount you want to transfer and then <br />
                          press continue to the next steps.
                        </p>
                        <div className="mb-3 w-100 d-flex justify-content-center">
                          <input
                            type="number"
                            className={`form-control ${styles.inputStyle} ${
                              amount.length > 0
                                ? styles.inputColor2
                                : styles.inputColor1
                            } `}
                            placeholder="0.00"
                            min={0}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <h4>Rp {mydata.balance} Available</h4>
                        <section
                          className={`d-flex mx-auto align-items-center ${styles.boxArea}`}
                        >
                          <Image
                            className="img-navbar-user"
                            src={edit}
                            alt="user-icon"
                            layout={`fixed`}
                            width={"24px"}
                            height={"24px"}
                          />
                          <div className="mb-3 w-100">
                            <textarea
                              className={`form-control ${styles.textNote} ${
                                note.length > 0
                                  ? styles.inputColor2
                                  : styles.inputColor1
                              }`}
                              rows="3"
                              placeholder="Add some notes"
                              onChange={(e) => setNote(e.target.value)}
                              value={note}
                            ></textarea>
                          </div>
                        </section>
                      </>
                    ) : (
                      <>
                        <h5>Details</h5>
                        <section className={styles.detailTransfer}>
                          <p>Amount</p>
                          <h4>Rp {amount}</h4>
                        </section>
                        <section className={styles.detailTransfer}>
                          <p>Balance Left</p>
                          <h4>Rp {mydata.balance - parseInt(amount)}</h4>
                        </section>
                        <section className={styles.detailTransfer}>
                          <p>Date & Time</p>

                          <h4>{`${month[
                            new Date().getMonth()
                          ].toUpperCase()} ${new Date().getDate()}, ${new Date().getFullYear()} - ${new Date().getHours()}.${new Date().getUTCMinutes()}`}</h4>
                        </section>
                        <section className={styles.detailTransfer}>
                          <p>Notes</p>
                          <h4>{note}</h4>
                        </section>
                      </>
                    )}
                    <section className="d-flex justify-content-end w-100">
                      {progress === false ? (
                        <>
                          <button
                            onClick={() => {
                              if (amount.length === 0 || note.length === 0) {
                                Swal.fire({
                                  icon: "error",
                                  title: "error",
                                  text: "note and amount must be required",
                                  footer: "",
                                });
                                return;
                              }
                              setProgress(true);
                            }}
                          >
                            Continue
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => setModaluser1(true)}>
                            Continue
                          </button>
                        </>
                      )}
                    </section>
                  </section>
                </>
              )}
            </section>
          </main>
          <Footer />
        </>
      ) : (
        <>
          <LoadingPage />
        </>
      )}
    </div>
  );
};

export default Transfer;
