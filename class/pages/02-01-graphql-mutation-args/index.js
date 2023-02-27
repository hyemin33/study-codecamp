import { gql, useMutation } from "@apollo/client";
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

  const onClickSubmit = async () => {
    const result = await my({
      variables: {
        // variables 가 $ 역할을 함.
        writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
        title: title,
        contents: contents,
      },
    });
    alert(result.data.createBoard.message);
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
