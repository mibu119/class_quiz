import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit } = useForm<IFormData>({
    mode: "onChange",
  });

  const onClickSubmit = async (data: IFormData) => {
    try {
      // 1. uploadFile
      const resultFile = await uploadFile({ variables: { file } });
      const url = resultFile.data?.uploadFile.url;

      // 2. createBoard
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            images: [url],
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러 개 드래그 가능
    if (file === undefined) return;
    console.log(file);

    // 2. 임시 url 생성 => (진짜 url = 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImageUrl(event.target?.result);
        setFile(file);
      }
    }; // 용량이 너무 크다. result 자체가 사진이기 때문에.
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        비밀번호:
        <input type="password" {...register("password")} />
        제목: <input type="text" {...register("title")} />
        내용: <input type="text" {...register("contents")} />
        <input type="file" onChange={onChangeFile}></input>
        <img src={imageUrl} />
        <button>저장하기</button>
      </form>
    </>
  );
}
