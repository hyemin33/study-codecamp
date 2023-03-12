import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutaionUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $crateBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState(""); // 미리보기용
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutaionUploadFileArgs
  >(UPLOAD_FILE);

  const [my] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await my({
      variables: {
        // variables 가 $ 역할을 함.
        writer: "철수", // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
        title: "안녕",
        password: "1234",
        contents: "반갑습니다",
        images: [url],
      },
    });
    alert(result.data.createBoard.message);
    console.log(result.data.createBoard);
  };

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
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록</button>
    </>
  );
}
