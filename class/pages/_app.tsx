import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <div>
        <Component {...pageProps} />
      </div>
    </ApolloSetting>
  );
}

export default MyApp;
