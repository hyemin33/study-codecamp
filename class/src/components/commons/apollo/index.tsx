import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// 밖에서 cache를 하기 때문에 페이지 전환 되어도(_app.tsx 리렌더) 캐시 유지
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
