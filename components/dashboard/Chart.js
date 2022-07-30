import income from "../../public/img/homePage/income.png";
import expense from "../../public/img/homePage/expense.png";
const Chart = ({ styles, Image, data }) => {
  const incomeData = data.listIncome;
  const ExpenseData = data.listExpense;

  console.log(ExpenseData);
  return (
    <>
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
          {/* <section
            className={`${styles.bulletChart} d-flex justify-content-center align-items-end `}
          >
            <section
              className={`${styles.bulletViewBlue} bullet1-chart`}
            ></section>
          </section> */}
          {Array.isArray(incomeData) && Array.isArray(ExpenseData)
            ? incomeData.map((item, index) => (
                <>
                  {console.log(index)}
                  <style jsx>
                    {`
                      .bullet${index}-chart {
                        height: ${(item.total / 3000000) * 100};
                      }
                      .Expense${index}-chart {
                        height: ${(ExpenseData[index].total / 3000000) * 100};
                      }
                    `}
                  </style>
                  <section
                    className={`${styles.bulletChart} d-flex justify-content-center align-items-end `}
                  >
                    <section
                      className={`${styles.bulletViewBlue} bullet${index}-chart`}
                    ></section>
                    <section
                      className={`${styles.bulletViewSilver} Expense${index}-chart`}
                    ></section>
                  </section>
                </>
              ))
            : ""}
        </section>
        <section className={styles.textView}>
          {Array.isArray(incomeData)
            ? incomeData.map((item) => (
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
