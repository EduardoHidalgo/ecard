import { useRouter } from "next/router";

function CardPage() {
  const router = useRouter();
  const { pid } = router.query;

  return <p>CardPage: {pid}</p>;
}

export default CardPage;
