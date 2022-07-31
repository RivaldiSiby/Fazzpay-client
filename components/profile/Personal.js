import { useState } from "react";

const Personal = ({ styles, user }) => {
  const [manage, setManage] = useState(false);
  return (
    <div>
      <section className={`${styles.boxWrap} `}>
        {manage === false ? (
          <>
            <h5>Personal Information</h5>
            <p className={styles.textProfile}>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </p>
            <section className={styles.boxForm}>
              <section className={styles.boxInputProfile}>
                <h4 className={styles.textProfile}>First Name</h4>
                <h5>Robert</h5>
              </section>
              <section className={styles.boxInputProfile}>
                <h4 className={styles.textProfile}>Last Name</h4>
                <h5>Chandler</h5>
              </section>
              <section className={styles.boxInputProfile}>
                <h4 className={styles.textProfile}>Verified E-mail</h4>
                <h5>pewdiepie1@gmail.com</h5>
              </section>
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>Phone Number</h4>
                  <h5>+62 813-9387-7946</h5>
                </section>
                <button
                  onClick={() => setManage(true)}
                  className={styles.btnManage}
                >
                  Manage
                </button>
              </section>
            </section>
          </>
        ) : (
          <>
            <h5>Personal Information</h5>
            <p className={styles.textProfile}>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </p>
            <section className={styles.boxForm}>
              <section className={styles.boxInputProfile}>
                <h4 className={styles.textProfile}>First Name</h4>
                <input type="text" value={"Robert"} />
              </section>
              <section className={styles.boxInputProfile}>
                <h4 className={styles.textProfile}>Last Name</h4>
                <input type="text" value={"Chandler"} />
              </section>
              <section className={styles.boxInputProfile}>
                <h4 className={styles.textProfile}>Verified E-mail</h4>
                <input type="text" value={"pewdiepie1@gmail.com"} />
              </section>
              <section
                className={`${styles.boxInputProfile} d-flex justify-content-between`}
              >
                <section className={styles.boxFoot}>
                  <h4 className={styles.textProfile}>Phone Number</h4>
                  <input type="text" value={"+62 813-9387-7946"} />
                </section>
                <button
                  onClick={() => setManage(false)}
                  className={styles.btnManage}
                >
                  Save Changes
                </button>
              </section>
            </section>
          </>
        )}
      </section>
    </div>
  );
};

export default Personal;
