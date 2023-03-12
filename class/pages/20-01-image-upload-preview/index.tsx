import { ChangeEvent, useState } from "react";

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    if (!file) {
      return;
    }

    // 1. 임시URL 생성 - (가짜 URL=> 내 브라우저에서만 접근 가능)
    // 브라우저마다 createObjectUrl 적용 가능한게 달라서 2번을 쓰는것을 추천
    // const result = URL.createObjectURL(file);
    // setImageUrl(result);

    // 2. 임시URL 생성 - (진짜 URL => 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // dataurl로 파일을 읽고
    fileReader.onload = (event) => {
      // 주소로 변환 onload가 될때까지 기다려야 함
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImageUrl(event.target?.result);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </>
  );
}
