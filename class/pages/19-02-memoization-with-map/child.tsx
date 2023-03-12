import { memo } from "react";

function Word(props: any) {
  console.log("자식", props.el);
  return (
    <>
      <span>{props.el}</span>
    </>
  );
}

// memo로 HOC 하면 자식은 리렌더링 되지 않는다.
export default memo(Word);
