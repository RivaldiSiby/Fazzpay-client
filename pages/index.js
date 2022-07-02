// img
import partner1 from "../public/img/landingPage/logo1.png";
import partner2 from "../public/img/landingPage/logo2.png";
import partner3 from "../public/img/landingPage/logo3.png";
import partner4 from "../public/img/landingPage/logo4.png";
import icon1 from "../public/img/landingPage/icon1.png";
import icon2 from "../public/img/landingPage/icon2.png";
import icon3 from "../public/img/landingPage/icon3.png";
import phoneMain1 from "../public/img/landingPage/phoneMain1.png";
import phoneMain2 from "../public/img/landingPage/phoneMain2.png";
import userTes from "../public/img/landingPage/userTes.png";
import arrowLeft from "../public/img/landingPage/arrow1.png";
import arrowRight from "../public/img/landingPage/arrow2.png";
// img

import react from "react";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <Header style={styles} Image={Image} Link={Link} />
      <main>
        <section className={styles.partners}>
          <Image src={partner1} alt="logo1" className={styles.imgLogo} />
          <Image src={partner2} alt="logo2" className={styles.imgLogo} />
          <Image src={partner3} alt="logo3" className={styles.imgLogo} />
          <Image src={partner4} alt="logo4" className={styles.imgLogo} />
        </section>
        <section className={styles.about}>
          <section className={styles.aboutHead}>
            <h2 className={styles.aboutHeadText}>
              <span className={"BlueColorText"}>About</span> the Application.
            </h2>
            <p className={styles.aboutHeadPara}>
              We have some great features from the application and it’s totally
              free
              <br /> to use by all users around the world.
            </p>
          </section>
          <section className={styles.aboutBody}>
            <section className={styles.listBox}>
              <section className={styles.bulletImg}>
                <Image src={icon1} alt="logo1" className={styles.aboutIcon} />
              </section>

              <h5>24/7 Support</h5>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </section>
            <section className={styles.listBox}>
              <section className={styles.bulletImg}>
                <Image src={icon2} alt="logo1" className={styles.aboutIcon} />
              </section>

              <h5>Data Privacy</h5>
              <p>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </section>
            <section className={styles.listBox}>
              <section className={styles.bulletImg}>
                <Image src={icon3} alt="logo1" className={styles.aboutIcon} />
              </section>

              <h5>Easy Download</h5>
              <p>
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </section>
          </section>
        </section>
        <section className={styles.features}>
          <div className="row">
            <div className="col-lg-6 ">
              <section className={styles.infoFeaturesImg}>
                <Image
                  src={phoneMain1}
                  alt="phoneMain1"
                  className={styles.phoneMain}
                />
                <Image
                  src={phoneMain2}
                  alt="phoneMain2"
                  className={styles.phoneMain}
                />
              </section>
            </div>
            <div className="col-lg-6 ">
              <section className={styles.infoFeaturesText}>
                <h2>
                  All The <span className={"BlueColorText"}>Great</span> FazzPay
                  Features.
                </h2>
                <section className={styles.listFeaturesBox}>
                  <h5>
                    <span className={"BlueColorText"}>1.</span> Small Fee
                  </h5>
                  <p>
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </section>
                <section className={styles.listFeaturesBox}>
                  <h5>
                    <span className={"BlueColorText"}>2.</span> Data Secured
                  </h5>
                  <p>
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </p>
                </section>
                <section className={styles.listFeaturesBox}>
                  <h5>
                    <span className={"BlueColorText"}>3.</span> User Friendly
                  </h5>
                  <p>
                    FazzPay come up with modern and sleek design and not
                    complicated.
                  </p>
                </section>
              </section>
            </div>
          </div>
        </section>
        <section className={styles.testimoni}>
          <h2>
            What Users are <span className={"BlueColorText"}>Saying.</span>
          </h2>
          <p className={styles.testimoniTextUp}>
            We have some great features from the application and it’s totally
            free <br />
            to use by all users around the world.
          </p>
          <section className="row d-flex align-items-center">
            <section className="col-2">
              {" "}
              <Image
                src={arrowLeft}
                alt="userTes"
                className={styles.arrowImg}
              />
            </section>
            <section className="col-8">
              <section className={styles.boxTestimoni}>
                <Image
                  src={userTes}
                  alt="userTes"
                  className={styles.userTesImg}
                />
                <h5>Alex Hansinburg</h5>
                <span>Alex Hansinburg</span>
                <p className={styles.testimoniTextDown}>
                  “This is the most outstanding app that I’ve ever try in my
                  live, this app is such an amazing masterpiece and it’s
                  suitable for you who is bussy with their bussiness and must
                  transfer money to another person aut there. Just try this app
                  and see the power!”
                </p>
              </section>
            </section>
            <section className="col-2 d-flex justify-content-end">
              {" "}
              <Image
                src={arrowRight}
                className={styles.arrowImg}
                alt="userTes"
              />{" "}
            </section>
          </section>
        </section>
      </main>
      <Footer style={styles} Image={Image} />
    </div>
  );
}
