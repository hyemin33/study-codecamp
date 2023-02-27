import { useRouter } from "next/router";

export default function DynamicRoutingPage() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push("/03-03-dynamic-routed-board-query/500")}
      >
        500번 게시물 이동하기
      </button>
    </>
  );
}
