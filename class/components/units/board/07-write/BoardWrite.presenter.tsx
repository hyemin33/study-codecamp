import { ChangeEvent } from "react";
import { Button } from "./BoardWrite.styles";

interface IProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  data: any;
}

export default function BoardWriteUi(props: IProps) {
  console.log(props.data);
  return (
    <>
      <div>{props.isEdit ? "수정" : "등록"}</div>
      작성자 :{" "}
      <input
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props?.data?.writer}
      />
      <br />
      제목 :{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props?.data?.title}
      />
      <br />
      내용 :{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props?.data?.contents}
      />
      <br />
      <Button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        color="red"
      >
        {props.isEdit ? "수정" : "등록"}하기
      </Button>
    </>
  );
}
