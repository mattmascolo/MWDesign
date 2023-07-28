import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MWDesign</title>
        <meta name="description" content="MWDesign offers state-of-the-art web design and full-stack development services, delivering responsive, SEO-optimized, and user-centric digital solutions that transform businesses online." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout />
    </>
  );
}
