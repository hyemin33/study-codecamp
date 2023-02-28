import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
    /**
     * 동기 비동기에 대해 배우고 REST 통신 하는 실습을 진행한다.
     */
  const [title,setTitle] = useState('')

  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  const onClicksync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    setTitle(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API 비동기 요청하기</button>
      <button onClick={onClicksync}>REST-API 동기 요청하기</button>
      {title}
    </>
  );
}
