import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  gql,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLClient } from "graphql-request";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

// 밖에서 cache를 하기 때문에 페이지 전환 되어도(_app.tsx 리렌더) 캐시 유지
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 토큰 만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTINATED") {
          return fromPromise(
            // 2-1 refreshToken으로 accessToken을 재발급 받기

            getAccessToken().then((newAccessToken) => {
              // 2-2 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken);

              // 3-1 재발급 받은 accessToken 실패함 쿼리의 정보 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2 재발급 받은 accessToken으로 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    //  uri: "http://practice.codebootcamp.co.kr/graphql",
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
