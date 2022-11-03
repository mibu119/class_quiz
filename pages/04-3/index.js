import { gql, useMutation } from "@apollo/client"
import { useState } from "react";

const GRAPHQL_API = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents)
        {
            message
            _id
            number
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createBoard] = useMutation(GRAPHQL_API)
    
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }
    

    const onClickGraphql = async() => {
        const result = await createBoard(
            {
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            }
        );
        console.log(result);
    }

    return(
        <>
        작성자: <input type="text" onChange={onChangeWriter}></input>
        제목: <input type="text" onChange={onChangeTitle}></input>
        내용: <input type="text" onChange={onChangeContents}></input>
        <button onClick={onClickGraphql}>GRAPHQL-API 요청하기</button>
        </>
    )
}