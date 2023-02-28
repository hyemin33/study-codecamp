import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const handleDelete = async (e) => {
    await deleteBoard({
      variables: {
        number: Number(e.target.id),
      },
      //refetch해서 다시 불러오기
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        //  빈곳에 key 넣고 싶을때 -> <Fragment key={index}></Fragment>
        <List key={index}>
          <p>작성자: {el.writer}</p>
          <p>제목: {el.title}</p>
          <p>내용: {el.contents}</p>

          {/* 
          handleDelete에 number값을 넘기거나
          <button onClick={() => handleDelete(el.number)}>삭제</button> 
          */}

          {/* 버튼에 id값 저장해서 id로 넘기기 */}
          <button id={el.number} onClick={handleDelete}>
            삭제
          </button>
        </List>
      ))}
    </>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333;
`;
