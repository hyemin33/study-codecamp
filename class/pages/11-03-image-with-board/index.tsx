import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";
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

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutaionUploadFileArgs
  >(UPLOAD_FILE);

  const [my] = useMutation(CREATE_BOARD);

  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await my({
        variables: {
          // variables 가 $ 역할을 함.
          writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
          title: title,
          password: "1234",
          contents: contents,
          images: [imageUrl],
        },
      });
      alert(result.data.createBoard.message);
      console.log(result.data.createBoard);

      //완료 후 상세페이지로 이동 시키기 추가
      router.push(
        `/03-03-dynamic-routed-board-query/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result?.data?.uploadFile?.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} value={writer} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} value={title} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} value={contents} />
      <br />
      <div
        style={{ width: "100px", height: "30px", background: "gray" }}
        onClick={onClickImage}
      >
        이미지버튼
      </div>
      <input type="file" onChange={onChangeFile} ref={fileRef} />
      <img src={`https://storage.googleapis.com/` + imageUrl} />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  );
}
