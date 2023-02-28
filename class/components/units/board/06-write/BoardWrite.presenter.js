import { Button } from "./BoardWrite.styles";

export default function BoardWriteUi(props) {
  return (
    <>
      <div>{props.isEdit ? "수정" : "등록"}</div>
      작성자 : <input type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeContents} />
      <br />
      <Button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </Button>
    </>
  );
}
