import { gql, useMutation } from "@apollo/client"

const GRAPHQL_API = gql`
    mutation {
     createBoard(
        writer: "짱구",
        title: "짱구는 못말려",
        contents: "짱구야 놀자"
        ){
            message
            _id
            number
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createBoard] = useMutation(GRAPHQL_API)

    const onClickGraphql = async() => {
        const result = await createBoard();
        console.log(result);
    }
 return(
    <>
    <button onClick={onClickGraphql}>GRAPHQL-API 요청하기</button>
    </>
 )
}