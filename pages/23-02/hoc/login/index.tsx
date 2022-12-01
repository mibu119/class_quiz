import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { accessTokenState } from "../../../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    SetPassword(event.currentTarget.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        Modal.error({ content: "로그인을 먼저 해주세요." });
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/23-02/hoc/main");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        gap: "10px",
      }}
    >
      <input
        type="text"
        onChange={onChangeEmail}
        placeholder="이메일을 입력해주세요."
      />
      <input
        type="password"
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해주세요."
      />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
