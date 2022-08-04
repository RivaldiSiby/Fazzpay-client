import loading from "../../public/img/loading.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <main className="styleLoading">
        <section className="boxImgLoad ">
          <h2 className="titleApp">FazzPay</h2>
          <Image src={loading} alt="imgload" width={"250px"} height={"100px"} />
        </section>
      </main>
    </div>
  );
};

export default Loading;
