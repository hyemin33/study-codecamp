import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // conponentDidMount() {
  //   console.log("그려지고 나서 실행!");
  // }

  // componenentDidUpdate() {
  //   console.log("변경되고 나서 실행!");
  // }

  // conponentWillUnmount() {
  //   console.log("사라질때 실행!");
  // }

  useEffect(() => {
    return () => {
      console.log("사라질때 실행!");
    };
  }, []);

  const onClickCountUp = () => {
    setCount((prevState) => prevState + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
