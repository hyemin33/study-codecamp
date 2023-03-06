import { gql, useApolloClient, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  // useApolloclient => 버튼 클릭으로 axios 와 동일하게 받아올 수 있다.
  const client = useApolloClient();
  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGED_IN,
    });

    console.log(result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭하세요</button>
      {/* {data?.fetchUserLoggedIn?.name}님 환영합니다! */}
    </>
  );
}

//hoc 사용
