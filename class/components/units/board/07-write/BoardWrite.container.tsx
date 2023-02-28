import BoardWriteUi from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

interface IProps {
  isEdit: boolean;
  data?: any;
}

export default function BoardWrite(props: IProps) {
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

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onClickUpdate = async () => {
    try {
      interface IUpdateVariables {
        number: number;
        writer?: string;
        title?: string;
        contents?: string;
      }

      const updateVariables: IUpdateVariables = {
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
      // alert(error.message);
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
