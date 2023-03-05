import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyExample() {
  // default값은 fetchPolicy: "cache-first"
  //const { data } = useQuery(FETCH_BOARD, { fetchPolicy: "cache-first" });
  const { data } = useQuery(FETCH_BOARD);

  return (
    <div>
      <button></button>
    </div>
  );
}
