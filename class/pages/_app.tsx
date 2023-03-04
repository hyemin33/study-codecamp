import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";

// ////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBsA8xCMPc4cEJnzt0JIhskIv4QZy85OQ",
  authDomain: "hm-test-eb640.firebaseapp.com",
  projectId: "hm-test-eb640",
  storageBucket: "hm-test-eb640.appspot.com",
  messagingSenderId: "795555233167",
  appId: "1:795555233167:web:7f53c44441411a05afdffa",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// ////////////////////////////

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
