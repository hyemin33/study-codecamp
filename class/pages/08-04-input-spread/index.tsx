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
  const [inputs, setInputs] = useState({});

  const [my] = useMutation(CREATE_BOARD);

  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await my({
        variables: {
          ...inputs,
          //   writer: inputs.writer,
          //   title: inputs.title,
          //   contents: inputs.contents,
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

  const onChangeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      작성자 :{" "}
      <input
        type="text"
        id="writer"
        onChange={onChangeInputs}
        value={inputs.writer}
      />
      <br />
      제목 :{" "}
      <input
        type="text"
        id="title"
        onChange={onChangeInputs}
        value={inputs.title}
      />
      <br />
      내용 :{" "}
      <input
        type="text"
        id="contents"
        onChange={onChangeInputs}
        value={inputs.contents}
      />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  );
}
