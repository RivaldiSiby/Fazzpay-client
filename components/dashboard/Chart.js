import income from "../../public/img/homePage/income.png";
import expense from "../../public/img/homePage/expense.png";
const Chart = ({ styles, Image, data }) => {
  const days = data.listIncome;
  const bullet1 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[0].total / 3000000) * 100
      : "1"
  }%`;
  const bullet2 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[1].total / 3000000) * 100
      : "1"
  }%`;
  const bullet3 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[2].total / 3000000) * 100
      : "1"
  }%`;
  const bullet4 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[3].total / 3000000) * 100
      : "1"
  }%`;
  const bullet5 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[4].total / 3000000) * 100
      : "1"
  }%`;
  const bullet6 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[5].total / 3000000) * 100
      : "1"
  }%`;
  const bullet7 = `${
    Array.isArray(days) && days[0].total > 0
      ? (days[6].total / 3000000) * 100
      : "1"
  }%`;
  return (
    <>
      <style jsx>
        {`
          .bullet1-chart {
            height: ${bullet1};
          }
          .bullet2-chart {
            height: ${bullet2};
          }
          .bullet3-chart {
            height: ${bullet3};
          }
          .bullet4-chart {
            height: ${bullet4};
          }
          .bullet5-chart {
            height: ${bullet5};
          }
          .bullet6-chart {
            height: ${bullet6};
          }
          .bullet7-chart {
            height: ${bullet7};
          }
        `}
      </style>
      <div className={styles.headChart}>
        <section className={styles.headInfo}>
          <section className={styles.imgBoxChart}>
            <Image
              className="img-navbar-user"
              src={income}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <section className={styles.textInfoHead}>
            <p>Income</p>
            <h5>Rp {data.totalIncome}</h5>
          </section>
        </section>
        <section className={styles.headInfo}>
          <section className={styles.imgBoxChart}>
            <Image
              className="img-navbar-user"
              src={expense}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <section className={styles.textInfoHead}>
            <p>Expense</p>
            <h5>Rp {data.totalExpense}</h5>
          </section>
        </section>
      </div>
      <div className={styles.mainChart}>
        <section className={styles.chartView}>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end `}
          >
            <section
              className={`${styles.bulletViewBlue} bullet1-chart`}
            ></section>
          </section>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end`}
          >
            <section
              className={`${styles.bulletViewBlue} bullet2-chart`}
            ></section>
          </section>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end`}
          >
            <section
              className={`${styles.bulletViewSilver} bullet3-chart`}
            ></section>
          </section>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end`}
          >
            <section
              className={`${styles.bulletViewSilver} bullet4-chart`}
            ></section>
          </section>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end`}
          >
            <section
              className={`${styles.bulletViewSilver} bullet5-chart`}
            ></section>
          </section>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end`}
          >
            <section
              className={`${styles.bulletViewBlue} bullet6-chart`}
            ></section>
          </section>
          <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end`}
          >
            <section
              className={`${styles.bulletViewSilver} bullet7-chart`}
            ></section>
          </section>
        </section>
        <section className={styles.textView}>
          {Array.isArray(days)
            ? days.map((item) => (
                <>
                  {" "}
                  <section className={styles.daysView}>
                    {item.day.slice(0, 3)}
                  </section>
                </>
              ))
            : ""}
        </section>
      </div>
    </>
  );
};

export default Chart;
