import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";

// 밖에서 cache를 하기 때문에 페이지 전환 되어도(_app.tsx 리렌더) 캐시 유지
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const client = new ApolloClient({
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: GLOBAL_STATE,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
