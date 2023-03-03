import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <div>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </div>
    </ApolloSetting>
  );
}

export default MyApp;
