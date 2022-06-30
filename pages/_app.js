// style
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
// style

function MainWrapper({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MainWrapper;
