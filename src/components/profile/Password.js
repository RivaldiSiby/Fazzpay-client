// img
import lockicon from "../../../public/img/authPage/vector/lock.png";
import lockerr from "../../../public/img/authPage/vector/lockerr.png";
import unshowicon from "../../../public/img/authPage/vector/unshow.png";
import showicon from "../../../public/img/authPage/vector/show.jpg";
import lockiconActive from "../../../public/img/authPage/vector/lockactive.png";
// img
import { useState } from "react";
import errorLogin from "../../helper/errorLogin";
import Updateprofile from "../../modules/profile/Updateprofile";
import Getuser from "../../modules/user/Getuser";
import { addUser } from "../../redux/actionCreator/user";
import Image from "next/image";
import Updatepassword from "../../modules/profile/Updatepassword";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { notifSuccess } from "../../helper/notif";

const Password = ({ styles, boxpage, user, loading, auth, dispatch }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [error, setError] = useState(false);
  const [Msg, setMsg] = useState("");
  const [Load, setLoad] = useState(false);

  const updatePassHandler = async () => {
    try {
      setLoad(true);
      const data = {
        oldPassword: password,
        newPassword: Newpassword,
        confirmPassword: ConfirmPassword,
      };
      await Updatepassword(user.id, auth.token, data);
      loading(true);
      await notifSuccess("Password has been change");
      setLoad(false);
      boxpage("main");
      loading(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
      setError(true);
      setMsg(error.response.data.msg);
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }
    }
  };
  return (
    <div>
      <section className={`${styles.boxWrap}`}>
        <h5>Change Password</h5>
        <p className={styles.textProfile}>
          You must enter your current password and then type your new password
          twice.
        </p>
        <section className={`${styles.boxPassword} mx-auto`}>
          <div className={`input-group mb-3 ${styles.boxformPass}`}>
            <span
              className={`${styles.inputStyle} ${
                password.length > 0 ? styles.inputStyleActive : ""
              } ${
                error !== false ? styles.inputStyleError : ""
              } input-group-text`}
            >
              {error !== false ? (
                <>
                  <Image
                    className={styles.iconForm}
                    src={lockerr}
                    alt="password-icon"
                  />
                </>
              ) : (
                <>
                  <Image
                    className={styles.iconForm}
                    src={password.length > 0 ? lockiconActive : lockicon}
                    alt="password-icon"
                  />
                </>
              )}
            </span>
            <input
              type={showPass1 === false ? "password" : "text"}
              className={`${styles.inputStyle} ${
                password.length > 0 ? styles.inputStyleActive : ""
              } ${error !== false ? styles.inputStyleError : ""} form-control`}
              placeholder="Current password"
              aria-label="Current password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={`${styles.inputStyle} ${
                password.length > 0 ? styles.inputStyleActive : ""
              } ${
                error !== false ? styles.inputStyleError : ""
              } input-group-text`}
            >
              <Image
                className={`${styles.iconForm} oncursor`}
                src={showPass1 === false ? unshowicon : showicon}
                alt="unshow-icon"
                onClick={() =>
                  showPass1 === false ? setShowPass1(true) : setShowPass1(false)
                }
              />
            </span>
          </div>
          <div className={`input-group mb-3 ${styles.boxformPass}`}>
            <span
              className={`${styles.inputStyle} ${
                password.length > 0 ? styles.inputStyleActive : ""
              } ${
                error !== false ? styles.inputStyleError : ""
              } input-group-text`}
            >
              {error !== false ? (
                <>
                  <Image
                    className={styles.iconForm}
                    src={lockerr}
                    alt="password-icon"
                  />
                </>
              ) : (
                <>
                  <Image
                    className={styles.iconForm}
                    src={Newpassword.length > 0 ? lockiconActive : lockicon}
                    alt="password-icon"
                  />
                </>
              )}
            </span>
            <input
              type={showPass2 === false ? "password" : "text"}
              className={`${styles.inputStyle} ${
                Newpassword.length > 0 ? styles.inputStyleActive : ""
              } ${error !== false ? styles.inputStyleError : ""} form-control`}
              placeholder="New password"
              aria-label="New password"
              value={Newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              className={`${styles.inputStyle} ${
                Newpassword.length > 0 ? styles.inputStyleActive : ""
              } ${
                error !== false ? styles.inputStyleError : ""
              } input-group-text`}
            >
              <Image
                className={`${styles.iconForm} oncursor`}
                src={showPass2 === false ? unshowicon : showicon}
                alt="unshow-icon"
                onClick={() =>
                  showPass2 === false ? setShowPass2(true) : setShowPass2(false)
                }
              />
            </span>
          </div>
          <div className={`input-group mb-3 ${styles.boxformPass}`}>
            <span
              className={`${styles.inputStyle} ${
                ConfirmPassword.length > 0 ? styles.inputStyleActive : ""
              } ${
                error !== false ? styles.inputStyleError : ""
              } input-group-text`}
            >
              {error !== false ? (
                <>
                  <Image
                    className={styles.iconForm}
                    src={lockerr}
                    alt="password-icon"
                  />
                </>
              ) : (
                <>
                  <Image
                    className={styles.iconForm}
                    src={ConfirmPassword.length > 0 ? lockiconActive : lockicon}
                    alt="password-icon"
                  />
                </>
              )}
            </span>
            <input
              type={showPass3 === false ? "password" : "text"}
              className={`${styles.inputStyle} ${
                ConfirmPassword.length > 0 ? styles.inputStyleActive : ""
              } ${error !== false ? styles.inputStyleError : ""} form-control`}
              placeholder="Repeat new password"
              aria-label="Repeat new password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className={`${styles.inputStyle} ${
                password.length > 0 ? styles.inputStyleActive : ""
              } ${
                error !== false ? styles.inputStyleError : ""
              } input-group-text`}
            >
              <Image
                className={`${styles.iconForm} oncursor`}
                src={showPass3 === false ? unshowicon : showicon}
                alt="unshow-icon"
                onClick={() =>
                  showPass3 === false ? setShowPass3(true) : setShowPass3(false)
                }
              />
            </span>
          </div>
          {Msg !== "" ? (
            <>
              <h5 className={`${styles.errMsg} text-center w-100`}>{Msg}</h5>
            </>
          ) : (
            ""
          )}
          {password.length > 0 &&
          Newpassword.length > 0 &&
          ConfirmPassword.length > 0 &&
          Load === false ? (
            <button
              onClick={() => updatePassHandler()}
              className={`${styles.btnForm} w-100 ${styles.btnActive}`}
            >
              Change Password
            </button>
          ) : (
            <button className={`${styles.btnForm} w-100 ${styles.btnDisable}`}>
              {Load === true ? "Loading" : "Change Password"}
            </button>
          )}
        </section>
      </section>
    </div>
  );
};

export default Password;
