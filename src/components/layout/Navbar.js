import iconUser from "../../../public/img/layout/iconuser.jpg";
import iconNotif from "../../../public/img/layout/notif.png";

import Image from "next/image";
const Navbar = ({ user }) => {
  const Loader = (path) => {
    return `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${path}`;
  };
  return (
    <div>
      <section className="navbar-user ">
        <div className="container navbar-main-user h-100 ">
          <section className="navbar-title-user">
            <h2>FazzPay</h2>
          </section>
          <section className="navbar-profile-user row h-100 d-flex">
            <section className="col-3 d-flex justify-content-center align-items-center">
              <Image
                className="img-navbar-user"
                src={user.image === undefined ? iconUser : Loader(user.image)}
                alt="user-icon"
                layout="intrinsic"
                width={75}
                height={75}
              />
            </section>
            <section className="col-7 info-user-navbar d-flex justify-content-center flex-column">
              <h5>{user.firstName + " " + user.lastName}</h5>
              <p>+62 {user.noTelp.slice(1)}</p>
            </section>
            <section className="col-2 d-flex justify-content-center align-items-center">
              <Image
                src={iconNotif}
                alt="user-icon"
                width={"24px"}
                height={"24px"}
              />
            </section>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
