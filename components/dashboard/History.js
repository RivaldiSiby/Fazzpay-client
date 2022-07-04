const History = ({ styles, Image, usertes }) => {
  return (
    <>
      <section className={styles.historyInfo}>
        <h4>Transaction History</h4>
        <p>See all</p>
      </section>
      <section>
        <section className={`${styles.listHistory} row`}>
          <section className={`col-sm-7 d-flex`}>
            <section className={styles.imgBoxHistory}>
              <Image
                className="img-navbar-user"
                src={usertes}
                alt="user-icon"
                layout={`intrinsic`}
              />
            </section>

            <section className={styles.historyUserInfo}>
              <h5>Samuel Suhi</h5>
              <p>Accept</p>
            </section>
          </section>
          <section className={`col-sm-5 d-flex ${styles.historyInfoPrice}`}>
            <h5 className={styles.plusPrice}>+Rp50.000</h5>
          </section>
        </section>
        <section className={`${styles.listHistory} row`}>
          <section className={`col-sm-7 d-flex`}>
            <section className={styles.imgBoxHistory}>
              <Image
                className="img-navbar-user"
                src={usertes}
                alt="user-icon"
                layout={`intrinsic`}
              />
            </section>

            <section className={styles.historyUserInfo}>
              <h5>Samuel Suhi</h5>
              <p>Accept</p>
            </section>
          </section>
          <section className={`col-sm-5 d-flex ${styles.historyInfoPrice}`}>
            <h5 className={styles.minPrice}>-Rp149.000</h5>
          </section>
        </section>
        <section className={`${styles.listHistory} row`}>
          <section className={`col-sm-7 d-flex`}>
            <section className={styles.imgBoxHistory}>
              <Image
                className="img-navbar-user"
                src={usertes}
                alt="user-icon"
                layout={`intrinsic`}
              />
            </section>

            <section className={styles.historyUserInfo}>
              <h5>Samuel Suhi</h5>
              <p>Accept</p>
            </section>
          </section>
          <section className={`col-sm-5 d-flex ${styles.historyInfoPrice}`}>
            <h5 className={styles.plusPrice}>+Rp50.000</h5>
          </section>
        </section>
        <section className={`${styles.listHistory} row`}>
          <section className={`col-sm-7 d-flex`}>
            <section className={styles.imgBoxHistory}>
              <Image
                className="img-navbar-user"
                src={usertes}
                alt="user-icon"
                layout={`intrinsic`}
              />
            </section>

            <section className={styles.historyUserInfo}>
              <h5>Samuel Suhi</h5>
              <p>Accept</p>
            </section>
          </section>
          <section className={`col-sm-5 d-flex ${styles.historyInfoPrice}`}>
            <h5 className={styles.minPrice}>-Rp149.000</h5>
          </section>
        </section>
      </section>
    </>
  );
};

export default History;
