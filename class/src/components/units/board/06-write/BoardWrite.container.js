import BoardWriteUi from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [my] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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
      router.push(`/06-01-boards/${result.data.createBoard.number}`);
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

  const onClickUpdate = async () => {
    try {
      const updateVariables = {
        number: Number(router.query.number),
      };
      if (writer) updateVariables.writer = writer;
      if (title) updateVariables.title = title;
      if (contents) updateVariables.contents = contents;

      const result = await updateBoard({
        variables: updateVariables,
      });
      console.log(result);
      router.push(`/06-01-boards/${result.data.updateBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUi
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
