import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

interface IPropsApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IPropsApolloSetting) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const uploadLink = createUploadLink({
    uri: "http://backend10.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
