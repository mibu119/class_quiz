import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/component/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/component/commons/apollo";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
