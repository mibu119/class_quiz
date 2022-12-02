import * as yup from "yup";

export const schema = yup.object({
  writer: yup
    .string()
    .max(5, "최대 5글자까지만 입력 가능합니다.")
    .required("작성자를 입력해주세요."),
  title: yup
    .string()
    .max(100, "제목은 최대 100자까지만 작성이 가능합니다.")
    .required("제목을 입력하지 않았습니다."),
  contents: yup
    .string()
    .max(1000, "내용은 최대 1000자까지만 작성이 가능합니다.")
    .required("내용을 입력하지 않았습니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(8, "비밀번호는 최대 8자리까지 입력 가능합니다.")
    .matches(
      /^.*(?=.*[A-Za-z])(?=.*\d)(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).*$/,
      "비밀번호는 영문, 숫자, 특수문자를 1개 이상씩 포함해야 합니다."
    )
    .required("비밀번호는 필수 입력입니다."),
});
