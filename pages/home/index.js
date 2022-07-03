// img
import arrowUp from "../../public/img/homePage/arrow-up.png";
import plus from "../../public/img/homePage/plus.png";
// img

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import cekLogin from "../../helper/cekLogin";
import styles from "../../styles/user.module.css";

const Home = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    cekLogin(auth.isLogin, dispatch, router);
  }, []);
  return (
    <div>
      <Navbar />
      <main className={styles.userHome}>
        <section className="container h-100 d-flex align-items-center">
          <section className={`${styles.menuBar}`}></section>
          <section className={`border ${styles.mainBox}`}>
            <section className={`${styles.balanceBox} d-flex `}>
              <section className={styles.infoDana}>
                <h5>Balance</h5>
                <h2>Rp120.000</h2>
                <p>+62 813-9387-7946</p>
              </section>
              <section className={`${styles.actionDana} d-flex`}>
                <button className="d-flex align-items-center justify-content-center">
                  <Image src={arrowUp} alt="" />
                  {"   "}Transfer
                </button>
                <button className="d-flex align-items-center justify-content-center">
                  <Image src={plus} alt="" />
                  {"   "}Top Up
                </button>
              </section>
            </section>
            <section className={styles.cartBox}></section>
            <section className={styles.historyBox}>
              <section className={styles.historyInfo}>
                <h4>Transaction History</h4>
              </section>
              <section>
                <section className={`${styles.listHistory} row`}>
                  <section className={`col-sm-7 border`}></section>
                  <section className={`col-sm-5 border`}></section>
                </section>
                <section className={`${styles.listHistory} row`}>
                  <section className={`col-sm-7 border`}></section>
                  <section className={`col-sm-5 border`}></section>
                </section>
                <section className={`${styles.listHistory} row`}>
                  <section className={`col-sm-7 border`}></section>
                  <section className={`col-sm-5 border`}></section>
                </section>
                <section className={`${styles.listHistory} row`}>
                  <section className={`col-sm-7 border`}></section>
                  <section className={`col-sm-5 border`}></section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
