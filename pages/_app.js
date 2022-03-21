import "../styles/globals.css";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Guwop,James Cameron,James Guwop Cameron,social media manager,social media"
        />

        {/* Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guwop.cc/" />
        <meta property="og:title" content="Guwop — Social Media Manager" />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://guwop.cc/" />
        <meta property="twitter:title" content="Guwop — Social Media Manager" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
      />
    </>
  );
}

export default App;
