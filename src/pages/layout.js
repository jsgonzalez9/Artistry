import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lux Haven Infrastructure | Architectural-Grade Wellness</title>
        <meta name="description" content="Premium sauna and cold plunge infrastructure. White-glove delivery and expert installation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
