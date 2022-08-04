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
import styles from "../../styles/user.module.css";
import Menubar from "../../components/layout/Menubar";
import LoadingPage from "../Loading";
import errorLogin from "../../helper/errorLogin";
import Modaluser from "../../components/layout/Modaluser";
import Topup from "../../modules/topup/Topup";
import { notifSuccess } from "../../helper/notif";
import Search from "../../modules/user/Search";
import Head from "next/head";
import Gethistory from "../../modules/history/Gethistory";
const History = () => {
  const router = useRouter();
  const pin = useSelector((state) => state.pin);
  const auth = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);
  const [modaluser1, setModaluser1] = useState(false);
  const [modaluser2, setModaluser2] = useState(false);
  const [Filter, setFilter] = useState("WEEK");
  const [Pagination, setPagination] = useState([]);
  const [Page, setPage] = useState(1);
  const Loader = (path) => {
    return `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449${path}`;
  };
  useEffect(() => {
    setLoading(true);
    setUser(userData);
    cekLogin(auth.isLogin, dispatch, router);
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        let page = Page;
        const history = await Gethistory(auth.token, 6, page, Filter);

        if (history.status === 200) {
          setData(history.data.data);
          setPage(history.data.pagination.page);
          // pagination
          const totalPage = history.data.pagination.totalPage;
          let num = [];
          for (let i = 1; i <= totalPage; i++) {
            num.push(i);
          }
          setPagination(num);
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
  }, [Filter, Page]);
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
        <title>History</title>
      </Head>
      {loading === false && user !== false && data !== false ? (
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
                    modaluser1 === true ? "menu1" : ""
                  }${
                    modaluser2 === false && modaluser1 === false ? "menu2" : ""
                  }`}
                  styles={styles}
                  Image={Image}
                />
              </section>
              <section
                className={`${styles.mainBoxHistory} mt-5 d-flex flex-column`}
              >
                <section className={`${styles.boxSelect}`}>
                  <h5>Transaction History</h5>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option selected> --Select Filter-- </option>
                    <option value="WEEK">WEEK</option>
                    <option value="MONTH">MONTH</option>
                    <option value="YEAR">YEAR</option>
                  </select>
                </section>
                <section
                  className={`${styles.boxList} d-flex flex-column justify-content-between `}
                >
                  <section>
                    {Array.isArray(data) ? (
                      <>
                        {data.map((item) =>
                          item.type === "topup" || item.type === "accept" ? (
                            <>
                              <section className={`${styles.listHistory} row`}>
                                <section className={`col-7 d-flex`}>
                                  <section className={styles.imgBoxHistory}>
                                    {item.image === null ? (
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
                                        src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${item.image}`}
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
                                      {item.firstName + " " + item.lastName}
                                    </h5>
                                    <p>{item.type}</p>
                                  </section>
                                </section>
                                <section
                                  className={`col-5 d-flex ${styles.historyInfoPrice}`}
                                >
                                  <h5 className={styles.plusPrice}>
                                    +Rp {item.amount}
                                  </h5>
                                </section>
                              </section>
                            </>
                          ) : (
                            <>
                              <section className={`${styles.listHistory} row`}>
                                <section className={`col-7 d-flex`}>
                                  <section className={styles.imgBoxHistory}>
                                    <Image
                                      className="img-navbar-user"
                                      src={iconUser}
                                      alt="user-icon"
                                      layout={`intrinsic`}
                                    />
                                  </section>

                                  <section className={styles.historyUserInfo}>
                                    <h5>
                                      {item.firstName + " " + item.lastName}
                                    </h5>
                                    <p>{item.type}</p>
                                  </section>
                                </section>
                                <section
                                  className={`col-5 d-flex ${styles.historyInfoPrice}`}
                                >
                                  <h5 className={styles.minPrice}>
                                    -Rp {item.amount}
                                  </h5>
                                </section>
                              </section>
                            </>
                          )
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </section>
                  <section className="w-100 d-flex justify-content-center">
                    <nav aria-label="...">
                      <ul className="pagination">
                        {Page !== 1 ? (
                          <li
                            onClick={() => setPage(Page - 1)}
                            className="page-item "
                          >
                            <span className="page-link">Previous</span>
                          </li>
                        ) : (
                          ""
                        )}
                        {Pagination.map((item) =>
                          item === Page ? (
                            <li
                              onClick={() => setPage(item)}
                              className="page-item active"
                            >
                              <p className="page-link">{item}</p>
                            </li>
                          ) : (
                            <li
                              onClick={() => setPage(item)}
                              className="page-item"
                            >
                              <p className="page-link">{item}</p>
                            </li>
                          )
                        )}
                        {Page !== Pagination.length ? (
                          <li
                            onClick={() => setPage(Page + 1)}
                            className="page-item "
                          >
                            <p className="page-link">Next</p>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </nav>
                  </section>
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

export default History;
