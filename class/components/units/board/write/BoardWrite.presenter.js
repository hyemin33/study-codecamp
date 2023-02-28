import { Button } from "./BoardWrite.styles";

export default function BoardWriteUi(props) {
  return (
    <>
      작성자 : <input type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeContents} />
      <br />
      <Button onClick={props.onClickSubmit}>GRAPHQL-API(동기)</Button>
    </>
  );
}
