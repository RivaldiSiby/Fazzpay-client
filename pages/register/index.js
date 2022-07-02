// img
import usericon from "../../public/img/authPage/vector/user.png";
import mailicon from "../../public/img/authPage/vector/mail.png";
import lockicon from "../../public/img/authPage/vector/lock.png";
import usericonActive from "../../public/img/authPage/vector/useractive.png";
import mailiconActive from "../../public/img/authPage/vector/mailactive.png";
import lockiconActive from "../../public/img/authPage/vector/lockactive.png";
import unshowicon from "../../public/img/authPage/vector/unshow.png";
import showicon from "../../public/img/authPage/vector/show.jpg";
// img
import { useEffect, useState } from "react";
import styles from "../../styles/auth.module.css";
import Image from "next/image";
import Leftauth from "../../components/auth/Leftauth";
import Link from "next/link";
import LoadingPage from "../Loading";
import Signup from "../../modules/auth/Signup";
import { notifSuccess } from "../../helper/notif";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const registerHandler = async () => {
    try {
      setLoading(true);
      if (
        firstname.length === 0 ||
        lastname.length === 0 ||
        mail.length === 0
      ) {
        setError("All fields must be required");
        setLoading(false);
        return;
      }
      const data = {
        firstName: firstname,
        lastName: lastname,
        email: mail,
        password: password,
      };
      await Signup(data);
      // axios.post("https://fazzpay.herokuapp.com/auth/register", );
      notifSuccess("Success Sign Up");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading === false ? (
        <>
          <main className={styles.authPage}>
            <div className="row">
              <section className="col-lg-6">
                <Leftauth style={styles} Image={Image} />
              </section>
              <section className="col-lg-6">
                <section className={styles.authRight}>
                  <h5 className={styles.authTitle}>
                    Start Accessing Banking Needs
                    <br /> With All Devices and All Platforms
                    <br />
                    With 30.000+ Users
                  </h5>
                  <p className={styles.authText}>
                    Transfering money is eassier than ever, you can access
                    FazzPay wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
                  </p>
                  <section>
                    <div className={`input-group mb-3 ${styles.configForm}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          firstname.length > 0 ? styles.inputStyleActive : ""
                        } input-group-text`}
                        id="basic-addon1"
                      >
                        <Image
                          className={styles.iconForm}
                          src={firstname.length > 0 ? usericonActive : usericon}
                          alt="user-icon"
                        />
                      </span>
                      <input
                        type="text"
                        className={`${styles.inputStyle} ${
                          firstname.length > 0 ? styles.inputStyleActive : ""
                        } form-control`}
                        placeholder="Enter your firstname"
                        aria-label="Enter your firstname"
                        value={firstname}
                        aria-describedby="basic-addon1"
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div className={`input-group mb-3 ${styles.configForm}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          lastname.length > 0 ? styles.inputStyleActive : ""
                        } input-group-text`}
                        id="basic-addon2"
                      >
                        <Image
                          className={styles.iconForm}
                          src={lastname.length > 0 ? usericonActive : usericon}
                          alt="user-icon"
                        />
                      </span>
                      <input
                        type="text"
                        className={`${styles.inputStyle} ${
                          lastname.length > 0 ? styles.inputStyleActive : ""
                        } form-control`}
                        placeholder="Enter your lasttname"
                        aria-label="Enter your lasttname"
                        aria-describedby="basic-addon2"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                    <div className={`input-group mb-3 ${styles.configForm}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          mail.length > 0 ? styles.inputStyleActive : ""
                        } input-group-text`}
                        id="basic-addon3"
                      >
                        <Image
                          className={styles.iconForm}
                          src={mail.length > 0 ? mailiconActive : mailicon}
                          alt="mail-icon"
                        />
                      </span>
                      <input
                        type="email"
                        className={`${styles.inputStyle} ${
                          mail.length > 0 ? styles.inputStyleActive : ""
                        } form-control`}
                        placeholder="Enter your e-mail"
                        aria-label="Enter your e-mail"
                        aria-describedby="basic-addon3"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </div>
                    <div className={`input-group mb-3 ${styles.configForm}`}>
                      <span
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } input-group-text`}
                      >
                        <Image
                          className={styles.iconForm}
                          src={password.length > 0 ? lockiconActive : lockicon}
                          alt="lock-icon"
                        />
                      </span>
                      <input
                        type={showPass === false ? "password" : "text"}
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } form-control`}
                        placeholder="Create your password"
                        aria-label="Create your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className={`${styles.inputStyle} ${
                          password.length > 0 ? styles.inputStyleActive : ""
                        } input-group-text`}
                      >
                        <Image
                          className={`${styles.iconForm} oncursor`}
                          src={showPass === false ? unshowicon : showicon}
                          alt="unshow-icon"
                          onClick={() =>
                            showPass === false
                              ? setShowPass(true)
                              : setShowPass(false)
                          }
                        />
                      </span>
                    </div>

                    {error !== false ? (
                      <>
                        <h5 className={`${styles.errMsg} text-center w-100`}>
                          {error}
                        </h5>
                      </>
                    ) : (
                      ""
                    )}
                    {mail.length > 0 &&
                    password.length > 0 &&
                    lastname.length > 0 &&
                    firstname.length > 0 ? (
                      <button
                        onClick={registerHandler}
                        className={`${styles.btnForm} w-100 ${styles.btnActive}`}
                      >
                        Sign Up
                      </button>
                    ) : (
                      <button
                        className={`${styles.btnForm} w-100 ${styles.btnDisable}`}
                      >
                        Sign Up
                      </button>
                    )}
                    <p>
                      Already have an account? Let’s{" "}
                      <Link href="/login">
                        <a className="BlueColorText">Login</a>
                      </Link>
                    </p>
                  </section>
                </section>
              </section>
            </div>
          </main>
        </>
      ) : (
        <>
          <LoadingPage />
        </>
      )}
    </div>
  );
};

export default Register;
