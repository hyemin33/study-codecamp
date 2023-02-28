import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [my] = useMutation(CREATE_BOARD);

  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await my({
        variables: {
          // variables 가 $ 역할을 함.
          writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
          title: title,
          contents: contents,
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

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} value={writer} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} value={title} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} value={contents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  );
}
