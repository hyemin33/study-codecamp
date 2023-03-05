import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <div>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </div>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
