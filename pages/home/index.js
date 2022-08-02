// img
import arrowUp from "../../public/img/homePage/arrow-up.png";
import plus from "../../public/img/homePage/plus.png";

// img

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import cekLogin from "../../helper/cekLogin";
import styles from "../../styles/user.module.css";
import History from "../../components/dashboard/History";
import Chart from "../../components/dashboard/Chart";
import Menubar from "../../components/layout/Menubar";
import Getdata from "../../modules/dashboard/Getdata";
import LoadingPage from "../Loading";
import errorLogin from "../../helper/errorLogin";
import Modaluser from "../../components/layout/Modaluser";
import Topup from "../../modules/topup/Topup";
import { notifSuccess } from "../../helper/notif";
import Getuser from "../../modules/user/Getuser";
import { successLogin } from "../../redux/actionCreator/auth";
import Head from "next/head";
import Gethistory from "../../modules/history/Gethistory";
import { addUser } from "../../redux/actionCreator/user";

const Home = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [datahistory, setDatahistory] = useState(false);
  const [modaluser1, setModaluser1] = useState(false);
  const [modaluser2, setModaluser2] = useState(false);
  useEffect(() => {
    setLoading(true);
    cekLogin(auth.isLogin, dispatch, router);
    const getData = async () => {
      try {
        const result = await Getdata(user.id, auth.token);
        const userData = await Getuser(user.id, auth.token);
        const history = await Gethistory(auth.token, 4);
        if (
          result.status === 200 &&
          userData.status === 200 &&
          history.status === 200
        ) {
          setData(result.data.data);
          setDatahistory(history.data.data);
          dispatch(addUser(userData.data.data));
          setLoading(false);
        }
      } catch (error) {
        if (error.response.data.status !== undefined) {
          errorLogin(error.response.data.status, dispatch, router);
        }

        setLoading(false);
      }
    };
    getData();
  }, []);
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
        <title>Home</title>
      </Head>
      {loading === false && data !== false ? (
        <>
          {modaluser1 === true ? (
            <>
              <Modaluser
                setLoading={setLoading}
                dispatch={dispatch}
                token={auth.token}
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
                setLoading={setLoading}
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
          <Navbar user={user} />
          <main className={styles.userHome}>
            <section className="container h-100 d-flex align-items-center">
              <section className={`${styles.menuBar}`}>
                <Menubar
                  setLoading={setLoading}
                  dispatch={dispatch}
                  setModal2={setModaluser2}
                  setModal1={setModaluser1}
                  page={`${modaluser2 === true ? "menu3" : ""}${
                    modaluser1 === true ? "menu2" : ""
                  }${
                    modaluser2 === false && modaluser1 === false ? "menu1" : ""
                  }`}
                  styles={styles}
                  Image={Image}
                />
              </section>
              <section className={`${styles.mainBox}`}>
                <section className={`${styles.balanceBox} d-flex `}>
                  <section className={styles.infoDana}>
                    <h5>Balance</h5>
                    <h2>Rp {user.balance}</h2>
                    <p>+62 {user.noTelp.slice(1)}</p>
                  </section>
                  <section className={`${styles.actionDana} d-flex`}>
                    <button
                      onClick={() => setModaluser1(true)}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Image src={arrowUp} alt="" />
                      {"   "}Transfer
                    </button>
                    <button
                      onClick={() => setModaluser2(true)}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Image src={plus} alt="" />
                      {"   "}Top Up
                    </button>
                  </section>
                </section>
                <section className={styles.chartBox}>
                  <Chart data={data} styles={styles} Image={Image} />
                </section>
                <section className={styles.historyBox}>
                  <History data={datahistory} styles={styles} Image={Image} />
                </section>
              </section>
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

export default Home;
