import { useState } from "react";
import Word from "./child";

export default function MemoiationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");
  setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  const onClickChange = () => {};

  return (
    <>
      {data.split(" ").map((el, index) => (
        <Word key={index} el={el} />
        // memo시 key 또는 el이 변경된 부분만 리렌더링 됨(즉, '오늘'과 '먹었습니다.'는 제외)
        // uuid를 사용하면 memo를 해도 key자체가 변경되어 props로 넘어가므로 모두 리렌더링 됨
      ))}
      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
