import Head from "next/head";

export const siteTitle = "La Revueltería";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Pide tus frutas y verduras a domicilio en Cartago, Valle del Cauca'
        />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <>{children}</>
    </>
  );
}
