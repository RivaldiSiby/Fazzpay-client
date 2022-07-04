import phoneHeader from "../../public/img/landingPage/phoneHeader.png";

const Header = ({ style, Image, Link }) => {
  return (
    <div>
      <main className={style.header}>
        <section className={style.uphead}>
          <svg
            className={style.wave1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#798CF5"
              fillOpacity="1"
              d="M0,224L30,234.7C60,245,120,267,180,240C240,213,300,139,360,112C420,85,480,107,540,117.3C600,128,660,128,720,154.7C780,181,840,235,900,218.7C960,203,1020,117,1080,69.3C1140,21,1200,11,1260,26.7C1320,43,1380,85,1410,106.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
          <svg
            className={style.wave2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#6A7FF5"
              fillOpacity="1"
              d="M0,224L30,234.7C60,245,120,267,180,240C240,213,300,139,360,112C420,85,480,107,540,117.3C600,128,660,128,720,154.7C780,181,840,235,900,218.7C960,203,1020,117,1080,69.3C1140,21,1200,11,1260,26.7C1320,43,1380,85,1410,106.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className={style.mainHead}>
          <section className="row">
            <section className="col-12 d-flex justify-content-between">
              <h5 className={style.titleHead}>FazzPay</h5>
              <section>
                <Link href="/login">
                  <a className={style.btnLogin}>Login</a>
                </Link>
                <Link href="/register">
                  <a className={style.btnSignUp}>Sign Up</a>
                </Link>
              </section>
            </section>
            <section className="col-lg-6">
              <h2 className={style.textHeading}>
                Awesome App
                <br /> For Saving Time.
              </h2>
              <p className={style.textParagraph}>
                We bring you a mobile app for banking problems <br />
                that oftenly wasting much of your times.
              </p>
              <button className={style.btnHeading}>Try It Free</button>
            </section>
            <section className="col-lg-6">
              <section className={style.imgBox}>
                <Image
                  src={phoneHeader}
                  alt="Picture of the author"
                  className={style.imgHeader}
                />
              </section>
            </section>
          </section>
        </section>
        <section className={style.downhead}></section>
      </main>
    </div>
  );
};

export default Header;
