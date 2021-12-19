import Head from "next/head";
import AppLayout from "@components/layouts/basic/AppLayout";
import HomeContainer from "@components/features/home/HomeContainer";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>make web app</title>
      </Head>

      <AppLayout>
        <HomeContainer />
      </AppLayout>
    </>
  );
}
