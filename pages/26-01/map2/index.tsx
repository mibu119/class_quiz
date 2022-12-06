import { useRouter } from "next/router";
import Link from "next/link";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    void router.push("/26-01/map1");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>;
      <Link href="/26-01/map1">페이지 이동하기</Link>
    </>
  );
}
