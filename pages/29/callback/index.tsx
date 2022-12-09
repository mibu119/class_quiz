// `http://numbersapi.com/random?min=1&max=200`
// `https://koreanjson.com/posts/${num}`
// `https://koreanjson.com/posts?userId=${userId}`
// 1.랜덤한 숫자를 가지고 오는 API // 2.posts/랜덤숫자 // 3.랜덤숫자 번 게시글 작성한 유저가 쓴 다른 글

import axios from "axios";
import { useState } from "react";

export default function CallbackPage() {
  const [callback, setCallback] = useState([]);
  const [promise, setPromise] = useState([]);
  const [asyncAwait, setAsyncAwait] = useState([]);

  const myCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aa.send();
    aa.addEventListener("load", (res) => {
      //   console.log(res);
      const num = res.target.response.split("")[0];

      const bb = new XMLHttpRequest();
      bb.open("get", `https://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res) => {
        // console.log(res);
        const userId = JSON.parse(res.target.response).UserId;

        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res) => {
          //   console.log(res);
          const list = JSON.parse(res.target.response);
          //   console.log(list);
          setCallback(list);
        });
      });
    });
  };

  const myPromise = async () => {
    await axios.get(`http://numbersapi.com/random?min=1&max=200`).then(async (res) => {
      //   console.log(res);
      const num = res.data.split(" ")[0];
      //   console.log(num);
      await axios.get(`https://koreanjson.com/posts/${num}`).then(async (res) => {
        // console.log(res);
        const userId = res.data.UserId;
        // console.log(userId);
        await axios.get(`https://koreanjson.com/posts?userId=${userId}`).then((res) => {
          console.log(res);
          const list = res.data;
          setPromise(list);
        });
      });
    });
  };

  const myAsyncAwait = async () => {
    const result = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    // console.log(result);
    const num = result.data.split(" ")[0];
    // console.log(num);
    const result2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    // console.log(result2);
    const userId = result2.data.UserId;
    // console.log(userId);
    const result3 = await axios.get(`https://koreanjson.com/posts?userId=${userId}`);
    // console.log(result3);
    const list = result3.data;
    console.log(list);
    setAsyncAwait(list);
  };

  return (
    <>
      <button onClick={myCallback}>Callback 연습하기</button>
      <h3>Callback 게시글 목록</h3>
      {callback.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
        </div>
      ))}
      <br />
      <button onClick={myPromise}>Promise 연습하기</button>
      <h3>Promise 게시글 목록</h3>
      {promise.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
        </div>
      ))}
      <br />
      <button onClick={myAsyncAwait}>AsyncAwait 연습하기</button>
      <div>AsyncAwait 게시글 목록</div>
      {asyncAwait.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
        </div>
      ))}
    </>
  );
}
