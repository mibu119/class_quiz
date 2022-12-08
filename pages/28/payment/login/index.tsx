import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../../src/commons/stores";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

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

      void router.push("/28/payment/loading");
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
