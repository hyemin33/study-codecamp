import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";

export default function MemoiationParentPage() {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // useMemo로 변수 기억
  const aaa = useMemo(() => {
    Math.random();
    // countState 가 바뀔때 리렌더링 시켜줌. 그 외에는 리렌더링할때 memo에 있는 변수 가져다 씀
  }, [countState]);

  console.log(aaa);

  // usememo처럼 함수를 기억할때 useCallback 사용
  const onCLickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // usecallback 사용시 주의 사항
  // 안에 있는 countState도 같이 기억하기 때문에 useCallback을 사용하면 문제가 생길 수 있다.
  // useCallback을 하려면 countState가 아닌 prev를 사용해야한다.
  //   const onClickCountState = () => {
  //     console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   };

  // useMemo로 나만의 useCallback 만들어보기
  const onClickCountState = useMemo(
    () => () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    },
    []
  );

  return (
    <>
      <h1>저는 부모 컴포넌트 입니다</h1>
      <div>카운트 (let) : {countLet}</div>
      <button onClick={onCLickCountLet}>카운트 (let) +1 올리기</button>
      <div>카운트 (state) : {countState}</div>
      <button onClick={onClickCountState}>카운트 (state) +1 올리기</button>

      <div>
        =====위의 state가 리렌더링 될때마다 아래 자식 컴포넌트도 리렌더링 되는게
        문제다.===
      </div>
      <MemoizationChildPage />
    </>
  );
}
