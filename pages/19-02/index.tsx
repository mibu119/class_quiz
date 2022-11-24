import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const LikeButton = styled(LikeOutlined)`
  display: block;
  font-size: 60px;
`;

export default function ImageUploadPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });
  //   const [writer, setWriter] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [title, setTitle] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자: <input type="text" id="writer" onChange={onChangeInput} />
      비밀번호: <input type="password" id="password" onChange={onChangeInput} />
      제목: <input type="text" id="title" onChange={onChangeInput} />
      내용: <input type="text" id="contents" onChange={onChangeInput} />
      <div style={{ display: "flex" }} onClick={onClickImage}>
        <LikeButton />
        {/* 이미지선택 */}
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
      ></input>
      {imageUrl && <img src={`https://storage.googleapis.com/${imageUrl}`} />}
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
