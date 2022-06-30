import phoneGroup from "../../public/img/authPage/groupPhone.png";

const Leftauth = ({ style, Image }) => {
  return (
    <div>
      <main className={style.authleft}>
        <section className={style.uphead}>
          <svg
            className={style.wave1}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#778AF5"
              fill-opacity="1"
              d="M0,320L30,288C60,256,120,192,180,144C240,96,300,64,360,69.3C420,75,480,117,540,112C600,107,660,53,720,64C780,75,840,149,900,170.7C960,192,1020,160,1080,160C1140,160,1200,192,1260,213.3C1320,235,1380,245,1410,250.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
          <svg
            className={style.wave2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#6A7FF5"
              fill-opacity="1"
              d="M0,320L30,288C60,256,120,192,180,144C240,96,300,64,360,69.3C420,75,480,117,540,112C600,107,660,53,720,64C780,75,840,149,900,170.7C960,192,1020,160,1080,160C1140,160,1200,192,1260,213.3C1320,235,1380,245,1410,250.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className={style.mainHead}>
          <section className="row">
            <section className="col-12 d-flex ">
              <h5 className={style.titleHead}>FazzPay</h5>
            </section>
            <section className={style.imgBox}>
              <Image
                src={phoneGroup}
                alt="Picture of the author"
                className={style.imgHeader}
              />
            </section>
            <section className={style.infoAuth}>
              <h5>App that Covering Banking Needs.</h5>
              <p>
                Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage.
              </p>
            </section>
          </section>
        </section>
        <section className={style.downhead}></section>
      </main>
    </div>
  );
};

export default Leftauth;
