// 개발자일때

import axios from "axios";

export default function OpengraphDeveloperPage() {
  const onClickEnter = () => {
    // 1. 채팅데이터에 주소가 있는지 찾기 (http://로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const result = axios.get("https://www.gmarket.co.kr");
    console.log(result.data);

    // 3. 메타태그에서 오픈그래프 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og"))
    );
  };
  return <button onClick={onClickEnter}>채팅 후 엔터치기</button>;
}
