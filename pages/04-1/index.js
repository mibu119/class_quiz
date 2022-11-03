import axios from 'axios'

export default function RestApiPage() {

    const onClickAPI = () => {
        const data = axios.get('https://koreanjson.com/users')
        console.log(data)

    }

    return(
        <>
        <button onClick={onClickAPI}>REST-API 요청하기</button>
        </>
    )
}