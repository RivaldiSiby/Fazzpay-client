const Footer = ({ style }) => {
  return (
    <div className={style.Footer}>
      <section className={style.FooterUp}>
        <h5>FazzPay</h5>
        <p>
          Simplify financial needs and saving <br /> much time in banking needs
          with
          <br /> one single app.
        </p>
      </section>
      <section className={style.FooterDown}>
        <p>2020 FazzPay. All right reserved.</p>
        <section className="d-flex justify-content-between">
          <p>+62 5637 8882 9901</p>
          <p>contact@fazzpay.com</p>
        </section>
      </section>
    </div>
  );
};

export default Footer;
