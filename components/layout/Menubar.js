// img
import menu1 from "../../public/img/layout/menu1.png";
import menu1active from "../../public/img/layout/menu1active.png";
import menu2 from "../../public/img/layout/menu2.png";
import menu2active from "../../public/img/layout/menu2active.png";
import menu3 from "../../public/img/layout/menu3.png";
import menu3active from "../../public/img/layout/menu3active.png";
import menu4 from "../../public/img/layout/menu4.png";
import menu4active from "../../public/img/layout/menu4active.png";
import logout from "../../public/img/layout/logout.png";
import { failLogin } from "../../redux/actionCreator/auth";
import Logout from "../../modules/auth/Logout";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
// img

const Menubar = ({
  setLoading,
  Image,
  page,
  setModal1,
  setModal2,
  token,
  dispatch,
  setBoxpage,
}) => {
  const router = useRouter();
  const openHandler1 = () => {
    setModal1(true);
  };
  const openHandler2 = () => {
    setModal2(true);
  };
  const logoutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "for logout now",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          await Logout(token);
          dispatch(failLogin());
          router.push("/login");
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    });
  };
  return (
    <div className="h-100 d-flex justify-content-between flex-column">
      <section className={`menuGroup1`}>
        <section
          onClick={() => router.push("/home")}
          className={`listMenu oncursor`}
        >
          <section className={`imgIconMenu`}>
            <Image
              className="img-navbar-user"
              src={page === "menu1" ? menu1active : menu1}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <h4
            className={`listMenuText ${
              page === "menu1" ? "textMenuActive" : ""
            }`}
          >
            Dashboard
          </h4>
        </section>
        <section
          onClick={page === "menu2" ? "" : openHandler1}
          className={`listMenu oncursor`}
        >
          <section className={`imgIconMenu`}>
            <Image
              className="img-navbar-user"
              src={page === "menu2" ? menu2active : menu2}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <h4
            className={`listMenuText ${
              page === "menu2" ? "textMenuActive" : ""
            }`}
          >
            Transfer
          </h4>
        </section>
        <section onClick={openHandler2} className={`listMenu oncursor`}>
          <section className={`imgIconMenu`}>
            <Image
              className="img-navbar-user"
              src={page === "menu3" ? menu3active : menu3}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <h4
            className={`listMenuText ${
              page === "menu3" ? "textMenuActive" : ""
            }`}
          >
            Top Up
          </h4>
        </section>
        <section
          onClick={() => {
            page === "menu4" ? setBoxpage("main") : "";
            router.push("/profile");
          }}
          className={`listMenu oncursor`}
        >
          <section className={`imgIconMenu`}>
            <Image
              className="img-navbar-user"
              src={page === "menu4" ? menu4active : menu4}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <h4
            className={`listMenuText ${
              page === "menu4" ? "textMenuActive" : ""
            }`}
          >
            Profile
          </h4>
        </section>
      </section>
      <section className={`menuGroup2`}>
        <section onClick={logoutHandler} className={`listMenu oncursor`}>
          <section className={`imgIconMenu`}>
            <Image
              className="img-navbar-user"
              src={logout}
              alt="user-icon"
              layout={`intrinsic`}
            />
          </section>
          <h4 className="listMenuText">Logout</h4>
        </section>
      </section>
    </div>
  );
};

export default Menubar;
