import { red } from "@material-ui/core/colors";
import { useState } from "react";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeConfirm(event) {
    setConfirm(event.target.value);
  }

  function onClickSign() {
    if (email.includes("@") === false) {
      setErrorEmail("이메일에 @가 없습니다.");
    } else {
      setErrorEmail("회원가입을 축하합니다.");
    }

    if (password !== confirm) {
      setErrorPassword("비밀번호를 다시 확인해 주십시오.");
    }
  }

  return (
    <>
      <div>이메일</div>
      <input type="text" onChange={onChangeEmail}></input>
      <div style={{ color: "red" }}>{errorEmail}</div>
      <div>비밀번호</div>
      <input type="password" onChange={onChangePassword}></input>
      <div>비밀번호 확인</div>
      <input type="password" onChange={onChangeConfirm}></input>
      <div style={{ color: "red" }}>{errorPassword}</div>
      <button onClick={onClickSign}>가입하기</button>
    </>
  );
}
