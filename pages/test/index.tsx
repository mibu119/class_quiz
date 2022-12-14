import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazy-load";
import { v4 as uuidv4 } from "uuid";

export default function LazyLoadPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>(); // 태그를 저장할 state
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/lazyLoad/image5.jpg";
    img.onload = () => {
      setImgTag(img); // 태그를 저장한다.
    };
  }, []);
  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <section style={{ display: "flex", flexDirection: "row" }}>
      <h1>3-2 과제의 1번 LazyLoad 적용</h1>
      <div>
        {new Array(10).fill(0).map((_, i) => (
          <div key={uuidv4()}>
            <LazyLoad height={500}>
              <img
                style={{ height: "500px", width: "500px" }}
                src={`/images/lazyLoad/image${i}.jpg`}
              />
            </LazyLoad>
          </div>
        ))}
      </div>
      <section>
        <h1>3-2 과제의 2번 Preload 하기</h1>
        <button onClick={onClickPreload}>이미지 보여주기</button>
        <div style={{ height: "500px", width: "500px" }} ref={divRef}></div>
      </section>
    </section>
  );
}
