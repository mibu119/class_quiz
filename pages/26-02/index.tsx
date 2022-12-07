import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { CloseSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface IRef {
  __ref: string;
}

const Delete = styled(CloseSquareOutlined)`
  font-size: 20px;
  color: red;
`;

export default function PaginationPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const { register, handleSubmit } = useForm<IFormData>();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  // 기존 삭제 버튼 함수
  // const onClickDelete = (boardId: string) => () => {
  //   void deleteBoard({
  //     variables: { boardId },
  //     refetchQueries: [{ query: FETCH_BOARDS }],
  //   });
  // };

  // apollo-cache-state 삭제 함수
  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        // 캐시를 수정한다는 뜻의 cache.modify
        cache.modify({
          // 캐시에있는 어떤 필드를 수정할 것 인지 key-value 형태로 적어줍니다.
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard; // 삭제된ID
              console.log(prev);
              const filteredPrev = prev.filter(
                (el: IRef) => readField("_id", el) !== deletedId // el._id가 안되므로, readField를 사용해서 꺼내오기
              );
              return [...filteredPrev]; // 삭제된ID를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
  };

  // 기존 등록 버튼 함수
  // const onClickCreate = () => {
  //   void createBoard({
  //     variables: {
  //       createBoardInput: {
  //            writer: data.writer,
  //            password: data.password,
  //            title: data.title,
  //            contents: data.contents,
  //        },
  //     },
  //     refetchQueries: [{ query: FETCH_BOARDS }],
  //   });
  // };

  // apollo-cache-state 등록 함수
  const onClickCreate: SubmitHandler<IFormData> = (data: IFormData) => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      update(cache, { data }) {
        // 캐시를 수정한다는 뜻의 cache.modify
        cache.modify({
          // 캐시에있는 어떤 필드를 수정할 것 인지 key-value 형태로 적어줍니다.
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
          <Delete onClick={onClickDelete(el._id)}></Delete>
        </div>
      ))}
      <form
        onSubmit={handleSubmit(onClickCreate)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          marginBottom: 30,
        }}
      >
        작성자: <input type="text" {...register("writer")} />
        비밀번호:
        <input type="password" {...register("password")} />
        제목: <input type="text" {...register("title")} />
        내용: <input type="text" {...register("contents")} />
        <button>등록하기</button>
      </form>
    </div>
  );
}
