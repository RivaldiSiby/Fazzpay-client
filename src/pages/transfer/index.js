// img
import search from "../../../public/img/transfer/search.png";
import loadingSearch from "../../../public/img/loading.gif";
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
import Search from "../../modules/user/Search";
import Head from "next/head";
const Transfer = () => {
  const router = useRouter();
  const pin = useSelector((state) => state.pin);
  const auth = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [datasearch, setDatasearch] = useState(false);
  const [modaluser1, setModaluser1] = useState(false);
  const [modaluser2, setModaluser2] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");
  const Loader = (path) => {
    return `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449${path}`;
  };
  useEffect(() => {
    setLoading(true);
    setUser(userData);
    cekLogin(auth.isLogin, dispatch, router);
    setLoading(false);
  }, []);
  const searchHandler = async () => {
    try {
      setDatasearch(false);
      setLoad(true);
      const result = await Search(searchvalue, auth.token);

      if (result.status === 200) {
        setLoad(false);
        setDatasearch(result.data.data);
      }
    } catch (error) {
      setDatasearch([]);
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);

        setLoad(false);
      }

      setLoad(false);
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
      {loading === false && user !== false ? (
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
                  page={`${modaluser2 === true ? "menu3" : ""}${
                    modaluser1 === true ? "menu2" : ""
                  }${
                    modaluser2 === false && modaluser1 === false ? "menu2" : ""
                  }`}
                  styles={styles}
                  Image={Image}
                />
              </section>
              <section className={`${styles.mainBox} mt-5`}>
                <h5>Search Receiver</h5>
                <section className="w-100 mb-3">
                  <div className="input-group mb-3">
                    <span
                      onClick={searchHandler}
                      className={`oncursor input-group-text ${styles.inputSearch}`}
                      id="basic-addon1"
                    >
                      <Image src={search} alt="search-icon" layout={`fixed`} />
                    </span>
                    <input
                      type="text"
                      className={`form-control ${styles.inputSearch}`}
                      placeholder="Search receiver here"
                      aria-label="Search receiver here"
                      value={searchvalue}
                      onChange={(e) => setSearchvalue(e.target.value)}
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </section>
                {load === false ? (
                  <>
                    {Array.isArray(datasearch) ? (
                      <>
                        {" "}
                        <section className="w-100">
                          {datasearch.map((user) => (
                            <>
                              <section
                                onClick={() =>
                                  router.push("/transfer/" + user.id)
                                }
                                className={`${styles.listHistory} row oncursor`}
                              >
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
                                        className="img-navbar-user"
                                        alt="user-icon"
                                        layout={`intrinsic`}
                                        width={"70px"}
                                        height={"70px"}
                                      />
                                    )}
                                  </section>

                                  <section className={styles.historyUserInfo}>
                                    <h5>
                                      {user.firstName + " " + user.lastName}
                                    </h5>
                                    <p>
                                      {user.noTelp === null
                                        ? "+62"
                                        : user.noTelp.slice(1)}
                                    </p>
                                  </section>
                                </section>
                              </section>
                            </>
                          ))}
                        </section>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    <section className="text-center pt-5">
                      <Image
                        src={loadingSearch}
                        alt="user-icon"
                        layout={`fixed`}
                        width={"250px"}
                        height={"90px"}
                      />
                    </section>
                  </>
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

export default Transfer;
