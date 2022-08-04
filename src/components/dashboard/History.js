import iconUser from "../../../public/img/layout/iconuser.jpg";

const History = ({ styles, Image, data }) => {
  return (
    <>
      <section className={styles.historyInfo}>
        <h4>Transaction History</h4>
        <p>See all</p>
      </section>
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
                        <h5>{item.firstName + " " + item.lastName}</h5>
                        <p>{item.type}</p>
                      </section>
                    </section>
                    <section
                      className={`col-5 d-flex ${styles.historyInfoPrice}`}
                    >
                      <h5 className={styles.plusPrice}>+Rp {item.amount}</h5>
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
                        <h5>{item.firstName + " " + item.lastName}</h5>
                        <p>{item.type}</p>
                      </section>
                    </section>
                    <section
                      className={`col-5 d-flex ${styles.historyInfoPrice}`}
                    >
                      <h5 className={styles.minPrice}>-Rp {item.amount}</h5>
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
    </>
  );
};

export default History;
