import Head from "next/head";
import { useRouter } from "next/router";

function CardPage() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Head>
        <title>{`${username} eCard`}</title>
      </Head>
      <div></div>
    </>
  );
}

export default CardPage;
