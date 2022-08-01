import { useState } from "react";
import errorLogin from "../../helper/errorLogin";
import Updateprofile from "../../modules/profile/Updateprofile";
import Getuser from "../../modules/user/Getuser";

const Personal = ({ styles, user, loading, auth, dispatch }) => {
  const [managePhone, setManagePhone] = useState(false);
  const [manageFirst, setManageFirst] = useState(false);
  const [manageLast, setManageLast] = useState(false);
  const [first, setFirst] = useState(user.firstName);
  const [last, setLast] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.noTelp);

  const updatePersonalHanlder = async (key) => {
    try {
      loading(true);
      let value =
        key === "first"
          ? { firstName: first }
          : key === "last"
          ? { lastName: last }
          : key === "phone"
          ? { noTelp: phone }
          : "";
      const data = {
        ...value,
      };
      await Updateprofile(user.id, auth.token, data);
      const result = await Getuser(user.id, auth.token);
      dispatch(result.data.data);
      loading(false);
    } catch (error) {
      if (error.response.data.status !== undefined) {
        errorLogin(error.response.data.status, dispatch, router);
      }

      loading(false);
    }
  };
  return (
    <div>
      <section className={`${styles.boxWrap} `}>
        <>
          <h5>Personal Information</h5>
          <p className={styles.textProfile}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </p>
          <section className={styles.boxForm}>
            {manageFirst === false ? (
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>First Name</h4>
                  <h5>{user.firstName}</h5>
                </section>
                <button
                  onClick={() => setManageFirst(true)}
                  className={styles.btnManage}
                >
                  Manage
                </button>
              </section>
            ) : (
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>First Name</h4>
                  <input type="text" value={first} />
                </section>
                <button
                  onClick={() => {
                    setManageFirst(false);
                    updatePersonalHanlder("first");
                  }}
                  className={styles.btnManage}
                >
                  Save Changes
                </button>
              </section>
            )}

            {manageLast === false ? (
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>Last Name</h4>
                  <h5>{user.lastName}</h5>
                </section>
                <button
                  onClick={() => setManageLast(true)}
                  className={styles.btnManage}
                >
                  Manage
                </button>
              </section>
            ) : (
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>Last Name</h4>
                  <input type="text" value={last} />
                </section>
                <button
                  onClick={() => {
                    setManageLast(false);
                    updatePersonalHanlder("last");
                  }}
                  className={styles.btnManage}
                >
                  Save Changes
                </button>
              </section>
            )}

            <section className={styles.boxInputProfile}>
              <h4 className={styles.textProfile}>Verified E-mail</h4>
              <h5>{user.email}</h5>
            </section>
            {managePhone === false ? (
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>Phone Number</h4>
                  <h5>{user.noTelp}</h5>
                </section>
                <button
                  onClick={() => setManagePhone(true)}
                  className={styles.btnManage}
                >
                  Manage
                </button>
              </section>
            ) : (
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>Phone Number</h4>
                  <input
                    type="text"
                    value={phone}
                    placeholder="input your phone number here"
                  />
                </section>
                <button
                  onClick={() => {
                    setManagePhone(false);
                    updatePersonalHanlder("phone");
                  }}
                  className={styles.btnManage}
                >
                  Save Changes
                </button>
              </section>
            )}
          </section>
        </>
      </section>
    </div>
  );
};

export default Personal;
