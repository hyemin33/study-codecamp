import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/fetch-policy";

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

export default function GlobalStatePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARD);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <div onClick={onClickIsOpen}>
      <button>버튼 클릭하면 새로운 컴포넌트 나타나기</button>

      {isOpen && <FetchPolicyExample />}
    </div>
  );
}
