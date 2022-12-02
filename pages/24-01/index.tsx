import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./01-validation";
import styled from "@emotion/styled";
import Input01 from "../../src/component/commons/inputs";
import Button01 from "../../src/component/commons/buttons";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

const ErrorMessage = styled.div`
  color: red;
`;

export default function BoardSubmitPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 register={register("writer")} type="text" />
      <ErrorMessage>{formState.errors.writer?.message}</ErrorMessage>
      비밀번호: <Input01 type="password" register={register("password")} />
      <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
      제목: <Input01 type="text" register={register("title")} />
      <ErrorMessage>{formState.errors.title?.message}</ErrorMessage>
      내용: <Input01 type="text" register={register("contents")} />
      <ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
      <Button01 title="게시물 등록하기" isActive={formState.isValid} />
    </form>
  );
}
