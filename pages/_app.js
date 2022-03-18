import "../styles/globals.css";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
