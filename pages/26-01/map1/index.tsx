import { useEffect } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7ca427efe001faeb59d190980b9b497f";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.877159745204295,
            128.84080859294002
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const imageSrc = "/images/maru02.PNG"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          37.877159745204295,
          128.84080859294002
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7ca427efe001faeb59d190980b9b497f"
        ></script>
      </Head>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
