import { memo } from "react";

function MemoizationChildPage(props) {
  return (
    <>
      <h1>저는 자식 컴포넌트입니다.</h1>
    </>
  );
}

// memo로 HOC 하면 자식은 리렌더링 되지 않는다.
export default memo(MemoizationChildPage);
