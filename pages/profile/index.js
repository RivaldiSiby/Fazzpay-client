// img
import search from "../../public/img/transfer/search.png";
import loadingSearch from "../../public/img/loading.gif";
import iconUser from "../../public/img/layout/iconuser.jpg";
import iconLeft from "../../public/img/profilePage/left.png";

// img

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import cekLogin from "../../helper/cekLogin";
import styles from "../../styles/profile.module.css";
import Menubar from "../../components/layout/Menubar";
import LoadingPage from "../Loading";
import errorLogin from "../../helper/errorLogin";
import Modaluser from "../../components/layout/Modaluser";
import Topup from "../../modules/topup/Topup";
import { notifSuccess } from "../../helper/notif";
import Search from "../../modules/user/Search";
import Head from "next/head";

import Personal from "../../components/profile/personal";
import Password from "../../components/profile/Password";
const Profile = () => {
  const router = useRouter();
  const pin = useSelector((state) => state.pin);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [modaluser1, setModaluser1] = useState(false);
  const [modaluser2, setModaluser2] = useState(false);
  const [profilepage, setProfilepage] = useState(true);
  const [boxpage, setBoxpage] = useState("main");

  const Loader = (path) => {
    return `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449${path}`;
  };
  useEffect(() => {
    setBoxpage("main");
    setLoading(true);
    cekLogin(auth.isLogin, dispatch, router);
    setLoading(false);
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
        <title>Profile</title>
      </Head>
      {loading === false ? (
        <>
          {modaluser1 === true ? (
            <>
              <Modaluser
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
              <section className={`${styles.menuBar} mt-5`}>
                <Menubar
                  setLoading={setLoading}
                  dispatch={dispatch}
                  setModal2={setModaluser2}
                  setModal1={setModaluser1}
                  setBoxpage={setBoxpage}
                  page={`${modaluser2 === true ? "menu3" : ""}${
                    modaluser1 === true ? "menu2" : ""
                  }
                  ${profilepage === true ? "menu4" : ""}
                  ${
                    modaluser2 === false &&
                    modaluser1 === false &&
                    profilepage === false
                      ? "menu2"
                      : ""
                  }`}
                  styles={styles}
                  Image={Image}
                />
              </section>
              <section
                className={`${styles.mainBox} mt-5 d-flex flex-column align-items-center `}
              >
                {boxpage === "main" ? (
                  <>
                    <section className={`${styles.imgBoxUser}`}>
                      <Image
                        className="img-navbar-user"
                        src={user.img === undefined ? iconUser : user.img}
                        alt="user-icon"
                        layout="responsive"
                      />
                    </section>
                    <h3>{user.firstName + " " + user.lastName}</h3>
                    <h4>+62 {user.noTelp.slice(1)}</h4>
                    <section
                      onClick={() => setBoxpage("personal")}
                      className={`${styles.boxListProfile} d-flex align-items-center oncursor`}
                    >
                      <p>Personal Information</p>
                      <Image
                        className="img-navbar-user"
                        src={iconLeft}
                        width={28}
                        height={28}
                        alt="user-icon"
                      />
                    </section>
                    <section
                      onClick={() => setBoxpage("password")}
                      className={`${styles.boxListProfile} d-flex align-items-center oncursor`}
                    >
                      <p>Change Password</p>
                      <Image
                        className="img-navbar-user"
                        src={iconLeft}
                        width={28}
                        height={28}
                        alt="user-icon"
                      />
                    </section>
                    <section
                      onClick={() => setBoxpage("pin")}
                      className={`${styles.boxListProfile} d-flex align-items-center oncursor`}
                    >
                      <p>Change PIN</p>
                      <Image
                        className="img-navbar-user"
                        src={iconLeft}
                        width={28}
                        height={28}
                        alt="user-icon"
                      />
                    </section>
                    <section
                      className={`${styles.boxListProfile} d-flex align-items-center oncursor`}
                    >
                      <p>Logout</p>
                    </section>
                  </>
                ) : (
                  ""
                )}
                {boxpage === "personal" ? (
                  <>
                    <Personal
                      dispatch={dispatch}
                      auth={auth}
                      loading={setLoading}
                      user={user}
                      styles={styles}
                    />
                  </>
                ) : (
                  ""
                )}
                {boxpage === "password" ? (
                  <>
                    <Password
                      dispatch={dispatch}
                      auth={auth}
                      loading={setLoading}
                      user={user}
                      styles={styles}
                    />
                  </>
                ) : (
                  ""
                )}
                {boxpage === "pin" ? (
                  <>
                    <section className={`${styles.boxWrap} bg-light`}>
                      <h5>Change PIN</h5>
                      <p className={styles.textProfile}>
                        Enter your current 6 digits Zwallet PIN below to
                        continue to the next steps.
                      </p>
                    </section>
                  </>
                ) : (
                  ""
                )}
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

export default Profile;
