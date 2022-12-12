// 자주 사용되는 accessToken 재발급하는 함수
import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    // axios보다 더 편리하게 graphql을 요청할 수 있는 라이브러리 설치 => graphql-request
    const graphQLClient = new GraphQLClient(
      "https://backend10.codebootcamp.co.kr/graphql", // https로 변경
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
