import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../src/commons/stores";

// 5초 만료 토큰 받는 api
const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  // 3. 페이지 이동
  const router = useRouter();

  // 2. 글로벌 스테이트
  const [, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 뮤테이션
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async () => {
    try {
      // 1. 로그인 뮤테이션을 날려서 accessToken을 받아오기
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 global state에 저장하기 (그 이유는 보안 목적 상)
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }

      setAccessToken(accessToken);

      // 3. login 성공 페이지로 이동하기
      void router.push("/30/02");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
