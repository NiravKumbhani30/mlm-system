import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [com, setCom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCom(true);
    }, 1);
  }, []);

  return (
    <>
      {com && <Component {...pageProps} />}
    </>
  );
}
